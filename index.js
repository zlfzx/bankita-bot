const { Telegraf, Markup } = require('telegraf')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => hi(ctx))

bot.hears('hi', (ctx) => hi(ctx))

bot.action('PROFIL', (ctx) => {
    ctx.reply('okokoko')
})

bot.action('PENGAJUAN', (ctx) => {
    ctx.reply('Menu Pengajuan masih dalam tahap perbaikan.')
})

bot.action('KELUHAN', (ctx) => {
    ctx.reply('Menu Keluhan masih dalam tahap perbaikan.')
})

function hi(ctx) {
    ctx.reply(`Selamat Datang ${ctx.message.from.first_name ?? ctx.message.from.username} ✨ \nPerkenalkan saya Julio dari BankitaBOT, ada yang bisa dibantu?`, Markup.inlineKeyboard([
        Markup.button.callback('Profil', 'PROFIL'),
        Markup.button.callback('Pengajuan', 'PENGAJUAN'),
        Markup.button.callback('Keluhan', 'KELUHAN')
    ]))
}

bot.launch()