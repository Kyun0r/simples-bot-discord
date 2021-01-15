module.exports = {
    config: {
        nome: 'dado',                                                   // NOTA: Coloque o nome do comando SEMPRE em letras minúsculas!
        aliases: ['jogardado'],                               // Alternativas para o comando, para você poder usar o comando com vários nomes diferentes.
        descricao: '.',     // Descrição do comando (OPCIONAL, porém é útil para organização ou para um comando de ver a informação de outros comandos).
        utilizacao: '',                                               // Modo de utilização do comando. Deixe em branco, ou seja, apenas com '', caso o comando não precise de argumentos para ser usado (OPCIONAL, porém é útil para organização ou para um comando de ver a informação de outros comandos).
        cooldown: 3                                                   // 3 segundos de tempo de espera até o usuário poder executar o comando de novo. Caso o comando não tenha tempo de espera, pode remover esta linha ou colocar     cooldown: 0
    },
    run: async (args, message) => {

        const Discord = require('discord.js')

        if (args[0]) {
            if (args[0] < 1) return message.channel.send('Numero de dados inválido.');

            var dices = new Array();
            try {
                dices.length = parseInt(args[0]);
            } catch (e) {
                return message.channel.send('Numero de dados inválido.');
            }

            if (dices.length > 5)
                return message.channel.send('Você só pode jogar no máximo 5 dados por vez.');

            var dice_string = '';
            for (let i = 0; i < dices.length; i++) {
                dices[i] = Math.floor(Math.random() * 6) + 1;
                dice_string += `Dado ${i + 1}: **${dices[i]}**\n`;
            }

            return message.channel.send(new discord.RichEmbed()
                .addField('Resultado dos dados jogados', dice_string)
                .setColor("#00FF00"));

        } else {
            var dice = Math.floor(Math.random() * 6) + 1;
            return message.channel.send(`:game_die: | <@${message.author.id}> jogou o dado e parou em **${dice}**`);
        }


    }
}






