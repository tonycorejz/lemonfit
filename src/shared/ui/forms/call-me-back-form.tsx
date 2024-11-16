"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMask } from '@react-input/mask';
import { useToast } from "@/hooks/use-toast";

const phoneRegex = new RegExp(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);

const formSchema = z.object({
    phone: z.string().regex(phoneRegex, {
    message: "Номер телефона введён не корректно",
  }),
});

interface Props {
  formSubmited?: () => void;
}


export const CallMeBackForm: React.FC<Props> = ({formSubmited}) => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
    },
  });

  const phoneInputRef = useMask({
    mask: '+7 (___) ___-__-__',
    replacement: { _: /\d/ },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await fetch('/api/telegram/send-message', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: `Пользователь с номером телефона ${values.phone} ожидает вашего звонка.`
      }),
    });
    const {ok, description} = await res.json();
    if(ok) {
      toast({
        title: "Отправка формы произошла успешно!",
        description: "Мы скоро свяжемся с вами",
      })
    } else {
      toast({
        title: "Во время отправки формы произошла ошибка",
        description: "Пожалуйста вяжитесь с нами по телефону или через соц. сети",
      })
    }
    formSubmited && formSubmited();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ваш номер телефона</FormLabel>
              <FormControl>
                <Input {...field} ref={phoneInputRef} type='tel' placeholder="+7 (999) 999-99-99" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="bg-[#24A746]" type="submit">Отправить</Button>
      </form>
    </Form>
  );
};