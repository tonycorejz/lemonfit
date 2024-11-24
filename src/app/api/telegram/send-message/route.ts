export async function POST(request: Request) {
  try {
    const {phone, message} = await request.json()

    if(!message) throw Error('Запрос передан без сообщения');

    const res = await fetch(`https://cloud.1c.fitness/api/hs/lead/Webhook/${process.env.ONE_C_WEBHOOK_ID}`,
      {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phone: phone,
          comment: message
        })
      }
    )

    if(res.ok) {
      return Response.json({ok: true});
    }

    return Response.json({ok: false});
  } catch (e) {
    return Response.json({description:`Описание ошибки: ${e instanceof Error ? e.message : "неизвестная ошибка"}`});
  }
}

//Отправка в телеграм
/*
if(!process.env.TELEGRAM_TOKEN) throw('TELEGRAM_TOKEN в .env файле не установлен.');
if(!process.env.TELEGRAM_CHAT_ID) throw('TELEGRAM_CHAT_ID в .env файле не установлен.');

const res = await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage?chat_id=${process.env.TELEGRAM_CHAT_ID}&text=${message}`)

*/

//Ниже получение id чата
/*export async function GET(request: Request) {
  try {
    const postLink = new URL(request.url).searchParams.get('post-link');

    if(!process.env.TELEGRAM_TOKEN) throw error('TELEGRAM_TOKEN в .env файле не установлен.');

    const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

    bot.command('start', async (ctx) => {
        await ctx.telegram.sendMessage(ctx.message.chat.id, `ChatId: ${ctx.message.chat.id}`);
        return Response.json("vse ok1");
    });

    bot.launch()

    process.once('SIGINT', () => bot.stop('SIGINT'))
    process.once('SIGTERM', () => bot.stop('SIGTERM'))

    return Response.json(process.env.TELEGRAM_TOKEN);
  } catch (e) {
    return Response.json(`Произошла ошибка. Ошибка: ${e}`);
  }
}*/