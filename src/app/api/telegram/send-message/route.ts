import { error } from "console";

export async function POST(request: Request) {
  try {
    const {message} = await request.json()

    if(!message) throw error('Запрос передан без сообщения');

    if(!process.env.TELEGRAM_TOKEN) throw('TELEGRAM_TOKEN в .env файле не установлен.');
    if(!process.env.TELEGRAM_CHAT_ID) throw('TELEGRAM_CHAT_ID в .env файле не установлен.');

    const res = await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage?chat_id=${process.env.TELEGRAM_CHAT_ID}&text=${message}`)

    return res;
  } catch (e) {
    return Response.json(`Произошла ошибка. Ошибка: ${e}`);
  }
}

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