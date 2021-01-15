/*
  Iremos importar o método readdirSync() da biblioteca fs para lermos os ficheiros correspondentes aos comandos do bot.
  
  Não se preocupe se não entender o que está a ser feito, confie que funciona e, mais tarde, caso queira entender realmente o que está acontecendo,
  você sempre pode estudar sobre alguns dos métodos apresentados.

  NOTA: Não é necessário instalar esta biblioteca, ela vem com o node.js.
*/

const { readdirSync } = require('fs')

module.exports = (client) => {
  const load = dirs => {
    const commands = readdirSync(`./comandos/${dirs}/`).filter(f => f.endsWith('.js'))

    for (let file of commands) {
      const comando = require(`../comandos/${dirs}/${file}`)
      client.commands.set(comando.config.nome, comando)

      if (comando.config.aliases) comando.config.aliases.forEach(a => client.aliases.set(a, comando.config.nome))
    }
  }
  readdirSync(`./comandos/`).forEach(x => load(x))
}