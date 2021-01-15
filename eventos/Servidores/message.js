/*
  O evento "message" é o evento que é ativado quando uma mensagem é enviada num servidor em que o bot está.

  Iremos importar as classes Collection e MessageEmbed da biblioteca discord.js e o prefixo do ficheiro config.json.
  Iremos também criar uma constante chamada "cooldowns" que será usada para atribuir tempos de espera nos comandos.
*/

const { Collection, MessageEmbed } = require('discord.js')
const { prefix } = require("../../config.json")
const cooldowns = new Collection()

module.exports = async (client, message) => { // NOTA: Todos os eventos necessitam de passar o parâmetro "client" antes de passar os outros parâmetros, caso existam.

    if (message.author.bot || message.channel.type === 'dm') return // Caso o autor da mensagem seja um bot ou a mensagem seja enviada no privado do bot, o bot ignora.

    const args = message.content.slice(prefix.length).trim().split(/ +/g) // Definir os argumentos através de uma constante "args", que é um array.
    const comando = args.shift().toLowerCase() // Definir o comando como a palavra que vem junta ao prefixo.

    

    /*
      Exemplo:  !say oi, eu sou um bot muito daora.
                | |  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                | |        argumentos (args)
                | |
                | |_ comando
                |_ prefixo 
    */

    if (!message.content.startsWith(prefix)) return // caso a mensagem não comece com o prefixo do bot, ou seja, não seja um comando, o bot ignora.
   
    



    // COOLDOWNS (https://discordjs.guide/command-handling/adding-features.html#cooldowns)

    const comandoInfo = client.commands.get(comando) || client.commands.get(client.aliases.get(comando))

    if (comandoInfo) {
      if (!cooldowns.has(comandoInfo.config.nome)) cooldowns.set(comandoInfo.config.nome, new Collection())

      const now = Date.now()
      const timestamps = cooldowns.get(comandoInfo.config.nome)
      const cooldown = (comandoInfo.config.cooldown || 0) * 1000

      if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldown;

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message
              .reply(`você precisa esperar mais ${timeLeft.toFixed(1)} segundo(s) até poder usar esse comando novamente.`)
              .then(msg => msg.delete({ timeout: timeLeft * 1000 }).catch(e => console.log('Ocorreu um erro tentando apagar a mensagem do bot.')))
              .catch(e => console.log('Ocorreu um erro tentando enviar a mensagem no chat.'))
        }
      }

      

      /*
        NOTA: É sempre bom usarmos .catch() para que o terminal/console não fique cheio de erros enormes.
      */

      timestamps.set(message.author.id, now)
      setTimeout(() => timestamps.delete(message.author.id), cooldown)

      comandoInfo.run(client, message, args) // Executar o comando.
    }
}
