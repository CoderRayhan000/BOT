const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, PermissionsBitField } = require('discord.js')
const Warn = require('../../Ray/models/Warn')

module.exports = {
    data: new SlashCommandBuilder()
    .setName("warn")
    .setDescription("Warns a member")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addUserOption(option => 
        option.setName('target')
        .setDescription('The user you would like to warn')
        .setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('Reason for the warn').setRequired(true))
        .addUserOption(option => 
            option.setName('log-user')
            .setDescription('The person thats get a dm if someone reaches 5, 8 or 12 warns and gets punished (please enable dms)')
            .setRequired(true)),

        async execute(interaction) {


const member = interaction.options.getUser('target')
const reason = interaction.options.getString('reason')
const w = "Warn"

const Data = await Warn.findOne({
    WUser: member.id
})

const dmEmbed = new EmbedBuilder()

const embed = new EmbedBuilder()
.setColor('Orange')
.setTitle(w)
.setDescription(`<:yes:1043770969866633286> ${member} has been warned for ${reason}`)




if(Data) {
    Data.Warns += 1
    
    await Data.save();

    interaction.reply({ embeds: [
        new EmbedBuilder()
        .setColor('Orange')
        .setTitle(`Warned ${member.tag} he now has ${Data.Warns}`)
        .setDescription(`Executor: ${interaction.user.tag}\n Executor ID ${interaction.user.id}\n Reason for the warn: ${reason}`)
    ]})

    
    await member.send({ embeds: [
        new EmbedBuilder()
        .setColor('Red')
.setTitle(`You have been warned ${member.tag} you now have ${Data.Warns}`)
.setDescription(`Guild: ${interaction.guild.name}\n Executor: ${interaction.user.tag}\n Executor ID ${interaction.user.id}\n Reason for the warn: ${reason}`)

    ]}).catch(err => {
        return;
    })

} else {
    const Data = await Warn.create({
        Guild: interaction.guild,
        EUser: interaction.user.id,
        WUser: member.id,
        Reason: reason,
        Warns: 1,
    })

    await Data.save();

    interaction.reply({ embeds: [
        new EmbedBuilder()
        .setColor('Orange')
        .setTitle(`Warned ${member.tag} he now has ${Data.Warns}`)
        .setDescription(`Executor: ${interaction.user.tag}\n Executor ID ${interaction.user.id}\n Reason for the warn: ${reason}`)
    ]})
   
    await member.send({ embeds: [
        new EmbedBuilder()
        .setColor('Red')
.setTitle(`You have been warned ${member.tag} you now have ${Data.Warns}`)
.setDescription(`Guild: ${interaction.guild.name}\n Executor: ${interaction.user.tag}\n Executor ID ${interaction.user.id}\n Reason for the warn: ${reason}`)

    ]}).catch(err => {
        return;
    })
}



if(Data.Warns === 5 ) {
    const d = 3600
    const reason = "Reached 5 Warns "
    const member = interaction.options.getUser('target')
    const user = await interaction.guild.members.fetch(member.id);
const lm = await interaction.options.getUser('log-user')

  
        await user.timeout(d * 1000, reason).catch(err => {
             lm.send({ content: `Tried to timeout ${member} for reaching 5 warns but i dont have perms`}).catch(err => {
                return;
            })
        })

      

    

    
    await user.send({ embeds: [
        new EmbedBuilder()
        .setColor('DarkNavy')
        .setTitle('Time out')
        .setDescription(`Sorry ${member} but you have reached 5 warns you are now in timeout for 1hr`)
    ]}).catch(err => {
        lm.send({ content: `Tried to dm ${member} telling him he has reached 5 warns but i cant dm him please tell him!`}).catch(err => {
            return;
        })
    })
}

if(Data.Warns === 8 ) {
    const d = 86400
    const reason = "Reached 8 Warns "
    const member = interaction.options.getUser('target')
    const user = await interaction.guild.members.fetch(member.id);
    const lm = await interaction.options.getUser('log-user')



    await user.timeout(d * 1000, reason).catch(err => {
       lm.send({ content: `Tried to timeout ${member} for reaching 5 warns but i dont have perms`}).catch(err => {
        return;
       })
    })


  
    
    await member.send({ embeds: [
        new EmbedBuilder()
        .setColor('DarkNavy')
        .setTitle('Time out')
        .setDescription(`Sorry ${member} but you have reached 8 warns you are now in timeout for 1 day`)
    ]}).catch(err => {
        return;
    })
}

if(Data.Warns === 12 ) {
    const reason = "Reached 12 Warns "
    const member = interaction.options.getUser('target')
const lm = interaction.options.getUser('log-user')
const user = await interaction.guild.members.fetch(member.id);

    await member.send({ embeds: [
        new EmbedBuilder()
        .setColor('DarkNavy')
        .setTitle('Ban')
        .setDescription(`Sorry ${member} but you have reached 12 warns you are now banned from ${interaction.guild.name}`)
    ]}).catch(err => {
        return;
    })

    lm.send({ content: `The member has been banned if not check my dms again you might get another message`})

    await user.ban(reason).catch(err => {
        lm.send({
            content: `${member} has reached 12 warns but there was an error check if the bot has perms to ban`
        })
        return;
    })

await user.ban(reason).catch(err => {
    return;
})
    
}
        }
}
