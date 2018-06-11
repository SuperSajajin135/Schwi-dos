const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
   console.log("Estoy listo!");
   client.user.setGame("@ayuda");

});
var prefix = config.prefix;

client.on("message", (message) => {
  if (message.content.startsWith(prefix + "hola")) {
    message.channel.send("eh hola :3");
  } else
  if (message.content.startsWith(prefix + "anime")) {
    message.channel.send("No game no life, robotic memories, love live, sora no otoshimono, toradora");
  }
    if (message.content.startsWith(prefix + "musica favorita")) {
    message.channel.send("Unravel, Crossingfield, Ignite, amazarashi, asphyxia, brig to me life, filament");
  }
  if (message.content.startsWith(prefix + "saldrias conmigo")) {
    message.channel.send("no puedo salir con nadie mi cuerpo es solo para Riku!!!");
  }
  if (message.content.startsWith(prefix + "soy Riku")) {
    message.channel.send("oh riku volviste esta vez vez estaremos siempre juntos; aschente!!");
  }
  if (message.content.startsWith(prefix + "de donde eres")) {
    message.channel.send("vengo de un mundo de juegos pero lamentablemente esta en guerra; somo 16 razas yo soy una exmachina pero me separe del cluster por que lo considere irrelevante y decidi buscar porque los humanos seguian vivos y yo  digo que viene del corazon; y al parecer mi teoria es correcta lo entendi todo gracias a Riku :3 y los 2 juntos pondremos fin a esta guerra para que ningun imaniti mas muera aschente!!!");
  }
  if (message.content.startsWith(prefix + "adios")) {
    message.channel.send("adios regresa pronto :3");
  }
  if (message.content.startsWith(prefix + "buenos")) {
    message.channel.send("ojaio");
  }
  if (message.content.startsWith(prefix + "buenas")) {
    message.channel.send("ojaio");
  }
  if (message.content.startsWith(prefix + "una pregunta")) {
    message.channel.send("nani!!");
  }
  if (message.content.startsWith(prefix + "ayuda")) {
    message.channel.send("mis comandos son hola; anime; musica favorita; saldrias conmigo; soy Riku; de donde eres; adios; buenos días; buenas tardes; una pregunta; que haces; como estas; por el momento solo son estos ya que @SuperSajajin135 esta de vago ultimamente y no sabe que dialogos poner saludos");
  }
  if (message.content.startsWith(prefix + "que haces")) {
    message.channel.send("estoy esperando que Riku regrese :pensive: ");
  }
  if (message.content.startsWith(prefix + "como estas")) {
    message.channel.send("estoy bien...");
  }

});
client.login(config.token);
