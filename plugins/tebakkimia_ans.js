const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*teki/i.test(m.quoted.text)) return !0
    this.tebakkimia = this.tebakkimia ? this.tebakkimia : {}
    if (!(id in this.tebakkimia)) return m.reply('Soal itu telah berakhir')
    if (m.quoted.id == this.tebakkimia[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tebakkimia[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.unsur.toLowerCase().trim()) {
            m.reply(`*Benar!*`)
            clearTimeout(this.tebakkimia[id][3])
            delete this.tebakkimia[id]
        } else if (similarity(m.text.toLowerCase(), json.unsur.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
        else m.reply(`*Salah!*`)
    }
    return !0
}
handler.exp = 0

module.exports = handler
