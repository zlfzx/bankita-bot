const { Scenes, Markup } = require("telegraf");

const keluhanScene = new Scenes.BaseScene('KELUHAN_SCENE')

keluhanScene.enter((ctx) => {
    ctx.reply('Silakan pilih menu Keluhan', Markup.inlineKeyboard([
        Markup.button.callback('Kartu Kredit Hilang', 'KARTU_KREDIT_HILANG_ACTION')
    ]))
})

keluhanScene.action('KARTU_KREDIT_HILANG_ACTION', (ctx) => {
    ctx.reply(`
    Persyaratan & Prosedur
• Segera menelepon Call Center untuk memblokir kartu kredit. Berikut nomor Call Center BANKITA (021) 8423 7451,
• Lapor ke kepolisian setempat untuk mengurus berita kehilangan,
• Datang ke cabang BANKITA terdekat untuk mengurus kartu kredit yang baru dengan membawa surat kehilangan dari kantor polisi,
• Untuk setiap penggantian kartu yang dilaporkan hilang/dicuri, pemegang kartu akan dikenakan biaya administrasi.`)
})

module.exports = keluhanScene