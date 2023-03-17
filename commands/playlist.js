const {SlashCommandBuilder} = require("discord.js")

module.exports = {
    
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Melhor playlist"),

    async execute(interaction){
        await interaction.reply("sem playlist no momento")
    }

}