let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: Bintang Pamungkas
╠➥ Script: @Nurotomo
║
╠➥ Github: Https://github.com/BintangP28
╠➥ Instagram: @bintangp_28
║
╠═〘 Thanks To 〙 ═
╠➥ Kelvin
╠➥ Arya
╠➥ Izbullah
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ Gopay: 0838-1330-4760
╠➥ Dana: 0838-1330-4760
╠➥ Pulsa: 0859-2992-2766 / 0838-1330-4760
║
║>Request? Wa.me/6283813304760
║
╠═〘 TERMUX BOT 〙 ═
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

