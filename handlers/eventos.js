/*
  Iremos importar o método readdirSync() da biblioteca fs para lermos os ficheiros correspondentes aos comandos do bot.

  Não se preocupe se não entender o que está a ser feito, confie que funciona e, mais tarde, caso queira entender realmente o que está acontecendo,
  você sempre pode estudar sobre alguns dos métodos apresentados.

  NOTA: Não é necessário instalar esta biblioteca, ela vem com o node.js.
*/

const { readdirSync } = require('fs')

module.exports = (client) => {
  const load = dirs => {
    const events = readdirSync(`./eventos/${dirs}/`).filter(f => f.endsWith('.js'))

    for (let file of events) {
      const event = require(`../eventos/${dirs}/${file}`)
      let eventName = file.split(".")[0]

      client.on(eventName, event.bind(null, client))
    }
  }
  readdirSync(`./eventos/`).forEach(x => load(x))
}