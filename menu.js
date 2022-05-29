function menu(ctx) {
    ctx.reply('Silakan pilih menu dibawah ini', Markup.inlineKeyboard([
        Markup.button.callback('Profil', 'PROFIL'),
        Markup.button.callback('Pengajuan', 'PENGAJUAN'),
        Markup.button.callback('Keluhan', 'KELUHAN')
    ]))
}

module.exports = menu