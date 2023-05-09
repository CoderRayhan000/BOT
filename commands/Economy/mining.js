const { SlashCommandBuilder,EmbedBuilder } = require("discord.js")
const accountSchema = require('../../models/account')


module.exports = {
    data: new SlashCommandBuilder()
    .setName("mineing")
    .setDescription("Mine For Games Costs $1000"),
    

    

async execute(interaction) {
    const { user } = interaction

    




    let Data = await accountSchema.findOne({ Guild: interaction.guild.id,
        User: user.id}).catch(() => { })

    if (!Data) return interaction.channel.send({ content: "Please Create An Account First", ephemeral: true})

    if (Data.Wallet <= 1000) return interaction.channel.send({ content: "You dont have $1000 In Wallet"}); else {
        Data.Wallet -= 1000;
        await Data.save();
    }




 interaction.channel.send({ content: `You Have Payed $1000 For Mining ${interaction.user}`})


let good = Math.round((Math.random() * 300) + 10)
const posN = [good];


const amount = Math.round((Math.random() * posN.length));
const value = posN[amount];




Data.Wallet += value;
await Data.save();


if (!value) interaction.reply({ content: `:x: ${interaction.user} You found no Money put you found a pet **Pet Equuiped U have a higer change of getting money**:x:`})

if (!value) return Data.Pets += 1;
await Data.save();



if (value > 0) {
    const goodChoices = [
        "While Mining You Got A Rare Red Gem You Earned ",
        "You Minined For Hours You Gasp No Way You Earned A GOLD Gem You Got",
        "You Minied For A Few Minutes And Got A Blue Gem You Earned",
    ]

    const posName = Math.round((Math.random () * goodChoices.length));




const mine = new EmbedBuilder()
          .setTitle("Mining Finished")
          .setColor('Cyan')
          .setDescription(`Result: **${goodChoices[[posName]]}**\n You Got $${value}`)
          


 interaction.reply({ embeds: [mine]})
}


}
}