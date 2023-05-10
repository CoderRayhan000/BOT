const { Client, UserFlags } = require("discord.js");
const antiNuke = require("../../Ray/models/Antinuke");

module.exports = {
  name: "guildMemberAdd",
  once: false,

  async execute(member, client) {
    const antiNukers = await antiNuke.findOne({ guildId: member.guild.id });
    if (!antiNukers) return;

    if (antiNukers.enabled == false) return;

  if(member.bot && !member.user.flags.has(UserFlags.VerifiedBot)) {
      member.kick("No Unverified Bots Allowed");
    } else return;
  },
};
