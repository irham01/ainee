let handler = async m => m.reply(`
╭─「 Donasi • 」
│ •  [0856-0151-7617 == DANA]
│ •  [0856-0151-7617 == SPAY]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
