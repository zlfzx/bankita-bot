const { Scenes } = require('telegraf')

const profilScene = new Scenes.BaseScene('PROFIL_SCENE')

profilScene.enter((ctx) => {
    ctx.reply('BANKITA adalah salah satu bank swasta di Indonesia yang didirikan pada tahun 2021. 4 Mahasiswi UPN Veteran Jakarta menjadi orang dibalik kesuksesan Bank ini. BANKITA merupakan bank Gen Z dengan target nasabahnya yaitu Mahasiswa/i di seluruh Indonesia. Keuntungan yang didapat saat membuka rekening di Bank ini selain mendapat kartu ATM dan buku tabungan, kamu juga bisa melakukan transaksi di aplikasi M-Banking mulai dari transfer antar bank, pembayaran melalui Scan QR, maupun pembelian produk digital lainnya. \n\nJadi sangat cocok untuk Pelajar bukan?')
})

module.exports = profilScene