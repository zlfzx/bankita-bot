const { Scenes, Markup } = require("telegraf");

const pengajuanScene = new Scenes.BaseScene('PENGAJUAN_SCENE')

pengajuanScene.enter((ctx) => {
    ctx.reply('Silakan pilih menu Pengajuan', Markup.inlineKeyboard([
        Markup.button.callback('Kartu Kredit', 'KARTU_KREDIT_ACTION')
    ]))
})

pengajuanScene.action('KARTU_KREDIT_ACTION', (ctx) => {
    ctx.reply(`
    Persyaratan & Prosedur
• Berusia minimal 21 tahun dan maksimal 65 tahun,
• Memiliki penghasilan minimal Rp 3 juta per bulan,
• Menyiapkan dokumen yang mewakilkan data diri seperti e-KTP,
• Menyiapkan Nomor Pokok Wajib Pajak (NPWP),
• Menyiapkan slip gaji atau Surat Pemberitahuan Tahunan (SPT) Pajak,
• Rekening tabungan 3 bulan terakhir untuk wirausaha,
• Akta pendirian/SIUP/TDP untuk wirausaha.`)
})

module.exports = pengajuanScene