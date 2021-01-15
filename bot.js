/*
  Iremos importar as classes Client e Collection da biblioteca discord.js e o token do ficheiro config.json.
  Não vale a pena fazer:

    const Discord = require('discord.js')
    const token = require("../config.json").token

  porque não iremos usar a biblioteca do Discord.js toda nem tudo o que está no ficheiro config.json,
  apenas iremos usar Client e Collection e o token dentro do config.json, então fazemos o que é chamado de "destruturação",
  cuja sintaxe está apresentada abaixo, usando {}.
*/

const { Client, Collection } = require('discord.js')
const { token } = require("./config.json")

/*
  Usaremos o nome "client" para nos referirmos ao bot. Você pode trocar por "bot", ou o que preferir.
  Note que, se trocar para outro nome, convém usar sempre esse nome por questões de organização!
*/

const client = new Client();
  
/*
  Iremos fazer um loop, usando o método forEach(), para criarmos duas coleções que usaremos mais tarde: "commands" e "aliases".
  Iremos também fazer outro loop, usando o mesmo método, para que os comandos e os eventos sejam executados corretamente na hora de ligar o bot.
*/

['commands', 'aliases'].forEach(f => client[f] = new Collection());
['comandos', 'eventos'].forEach(f => require(`./handlers/${f}`)(client));



/*
  Finalmente, iremos usar o método .login(), exclusivo do Discord.js, para ligarmos o bot.
*/

client.login(token)