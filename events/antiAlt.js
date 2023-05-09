const Schema = require("../../models/antiAlt");
const ms = require("ms");
const { EmbedBuilder } = require("@discordjs/builders");

module.exports = {
  name: "guildMemberAdd",

  async execute(member, client) {
   

const Data = await Schema.findOne({
  Guild: member.guild.id
})

if(!Data) return;


const timeSpan = ms("7 days");

const createdAt = new Date(member.user.createdAt).getTime();
const difference = Date.now() - createdAt;  


if(difference < timeSpan) {
  member.send({ embeds: [
    new EmbedBuilder()
    .setTitle('Kicked')
    .setDescription(`You have been detected as an alt account becuase your account is younger than 7 days `)
  ] }).then(() => {
    member.kick("Kicked because its an (ALT) account");
  });
} else return;


  },
};