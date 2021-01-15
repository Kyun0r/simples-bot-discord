module.exports = {
    config: {
      nome: 'pergunta',                                                   // NOTA: Coloque o nome do comando SEMPRE em letras minúsculas!
      aliases: ['duvida', 'pergunta'],                               // Alternativas para o comando, para você poder usar o comando com vários nomes diferentes.
      descricao: '.',     // Descrição do comando (OPCIONAL, porém é útil para organização ou para um comando de ver a informação de outros comandos).
      utilizacao: '',                                               // Modo de utilização do comando. Deixe em branco, ou seja, apenas com '', caso o comando não precise de argumentos para ser usado (OPCIONAL, porém é útil para organização ou para um comando de ver a informação de outros comandos).
      cooldown: 3                                                   // 3 segundos de tempo de espera até o usuário poder executar o comando de novo. Caso o comando não tenha tempo de espera, pode remover esta linha ou colocar     cooldown: 0
    },
    run: async (bot, msg, params) => {
  
                var fortunes = [
                    "Sim",
                    "Não",
                    "Talvez",
                    "Eu não sei, tente de novo",
                    "Quem sabe?",
                    "Isso é um mistério",
                    "Não posso te contar",
                    "Meu informante disse que não",
                    "Provavelmente",
                    "Me pergunte mais tarde!",
                    "Claro que não!",
                    "Não conte comigo para isso",
                    "Dúvido muito"
                
                  ];
        
                  if(!params[0]){
                    return msg.channel.send(":x: " + "| Por favor insira uma pergunta!")
                  }
                  if (params[0]) msg.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
                  else msg.channel.send(":x: " + "| Não foi possível ler sua pergunta! :(");
                
        
            }
          }


    
    
  
  
  