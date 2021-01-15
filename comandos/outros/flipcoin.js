module.exports = {
    config: {
        nome: 'flipcoin',                                                   // NOTA: Coloque o nome do comando SEMPRE em letras minúsculas!
        aliases: ['moeda', 'girarmoeda'],                               // Alternativas para o comando, para você poder usar o comando com vários nomes diferentes.
        descricao: '.',     // Descrição do comando (OPCIONAL, porém é útil para organização ou para um comando de ver a informação de outros comandos).
        utilizacao: '',                                               // Modo de utilização do comando. Deixe em branco, ou seja, apenas com '', caso o comando não precise de argumentos para ser usado (OPCIONAL, porém é útil para organização ou para um comando de ver a informação de outros comandos).
        cooldown: 3                                                   // 3 segundos de tempo de espera até o usuário poder executar o comando de novo. Caso o comando não tenha tempo de espera, pode remover esta linha ou colocar     cooldown: 0
    },
    run: async (client, message, args) => {

       

                var coin = Math.floor(Math.random() * 20);
                var coin_string = '';

                if (coin % 3 === 0)
                    coin_string += "**cara**";
                else
                    coin_string += "**coroa**";

                return message.channel.send(`:coin:| <@${message.author.id}> jogou a moeda e caiu em ${coin_string}`);

            }
        }

    


