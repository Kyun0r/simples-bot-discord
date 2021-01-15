module.exports = {
  config: {
    nome: 'ajuda',                                                   // NOTA: Coloque o nome do comando SEMPRE em letras minúsculas!
    aliases: ['help', 'info'],                               // Alternativas para o comando, para você poder usar o comando com vários nomes diferentes.
    descricao: '.',     // Descrição do comando (OPCIONAL, porém é útil para organização ou para um comando de ver a informação de outros comandos).
    utilizacao: '',                                               // Modo de utilização do comando. Deixe em branco, ou seja, apenas com '', caso o comando não precise de argumentos para ser usado (OPCIONAL, porém é útil para organização ou para um comando de ver a informação de outros comandos).
    cooldown: 3                                                   // 3 segundos de tempo de espera até o usuário poder executar o comando de novo. Caso o comando não tenha tempo de espera, pode remover esta linha ou colocar     cooldown: 0
  },
  run: async (bot, message, argumentos, arg_texto, chat) => {

    const Discord = require("discord.js")

    const ajuda = new Discord.MessageEmbed()
      .setColor("#ee3654")
      .setTitle("Lista de comandos!")
      .setDescription('Olá! Possuo o comando dado, flipcoin, say e pergunta')

      message.channel.send(ajuda)
  }

}
