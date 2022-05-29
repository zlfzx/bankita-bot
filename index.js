const { Telegraf, Markup, Scenes, session } = require('telegraf')
const menu = require('./menu')
const keluhanScene = require('./scenes/keluhan')
const pengajuanScene = require('./scenes/pengajuan')
const profilScene = require('./scenes/profil')
require('dotenv').config()

const BOT_TOKEN = process.env.BOT_TOKEN
const URL = process.env.URL
const PORT = process.env.PORT || 3000

const bot = new Telegraf(BOT_TOKEN)

// use stage
const stage = new Scenes.Stage([profilScene, pengajuanScene, keluhanScene])
bot.use(session())
bot.use(stage.middleware())

bot.start((ctx) => hi(ctx))

bot.hears('hi', (ctx) => hi(ctx))
bot.hears('menu', (ctx) => menu(ctx))

bot.command('menu', (ctx) => menu(ctx))

bot.action('PROFIL', (ctx) => {
    ctx.scene.leave()
    ctx.scene.enter('PROFIL_SCENE')
})

bot.action('PENGAJUAN', (ctx) => {
    ctx.scene.leave()
    ctx.scene.enter('PENGAJUAN_SCENE')
})

bot.action('KELUHAN', (ctx) => {
    ctx.scene.leave()
    ctx.scene.enter('KELUHAN_SCENE')
})

function hi(ctx) {
    ctx.reply(`Selamat Datang ${ctx.message.from.first_name ?? ctx.message.from.username} ✨ \nPerkenalkan saya Julio dari BankitaBOT, ada yang bisa dibantu?`, Markup.inlineKeyboard([
        Markup.button.callback('Profil', 'PROFIL'),
        Markup.button.callback('Pengajuan', 'PENGAJUAN'),
        Markup.button.callback('Keluhan', 'KELUHAN')
    ]))
}

bot.telegram.setWebhook(`${URL}/bot${BOT_TOKEN}`)
bot.startWebhook(`/bot${BOT_TOKEN}`, null, PORT)

bot.launch()