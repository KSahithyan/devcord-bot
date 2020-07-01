import { Command } from './../types';

export default {
    name: 'help',
    description: 'Get help',
    execute(message: any) {
        let helpMessage = [
            "**!play <name | url>** - plays songs from youtube or by name",
            "**!stop** - stops the song",
            "**!available_songs** - gets all available songs that you can play with name",
        ].join('\n')
        message.channel.send(helpMessage)
    }
} as Command