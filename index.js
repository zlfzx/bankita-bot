const { Telegraf, Markup } = require('telegraf')
require('dotenv').config()
const BOT_TOKEN = process.env.BOT_TOKEN
const URL = process.env.URL
const PORT = process.env.PORT || 3000

const bot = new Telegraf(BOT_TOKEN)

bot.start((ctx) => hi(ctx))

bot.hears('hi', (ctx) => hi(ctx))

bot.action('PROFIL', (ctx) => {
    ctx.reply('BANKITA adalah salah satu bank swasta di Indonesia yang didirikan pada tahun 2021. 4 Mahasiswi UPN Veteran Jakarta menjadi orang dibalik kesuksesan Bank ini. BANKITA merupakan bank Gen Z dengan target nasabahnya yaitu Mahasiswa/i di seluruh Indonesia. Keuntungan yang didapat saat membuka rekening di Bank ini selain mendapat kartu ATM dan buku tabungan, kamu juga bisa melakukan transaksi di aplikasi M-Banking mulai dari transfer antar bank, pembayaran melalui Scan QR, maupun pembelian produk digital lainnya. \n\nJadi sangat cocok untuk Pelajar bukan?')
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

bot.telegram.setWebhook(`${URL}/bot${BOT_TOKEN}`)
bot.startWebhook(`/bot${BOT_TOKEN}`, null, PORT)

bot.launch()