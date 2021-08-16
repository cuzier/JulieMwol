const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

// LIST
const EFFECT_DESC = "Set of commands to convert text into effective images."
const NEED_WORD = "*You Must Enter a Word*"

    Asena.addCommand({pattern: 'effectimg', fromMe: true, desc: EFFECT_DESC}, (async (message, match) => {    

    await message.sendMessage('*🎯Cmd* ➤ .glitch\n*♦Desc* ➤ It Sends a glitch style image of the text provided\nYou must enter the heading and subheading seperated by */* in order!.\n\n*🎯Cmd* ➤ .underwater\n*♦Desc* ➤ It Sends a ocean image of the text provided\n\n*🎯Cmd* ➤ .flower\n*♦Desc* ➤ It Sends a flower image of the text provided\n\n*🎯Cmd ➤* .burn\n*♦Desc* ➤It Sends a half burned paper image of the text provided\n\n*🎯Cm*d .candy\n*♦Desc* ➤It Sends a candy image of the text provided\n\n*🎯Cmd* .wood\n*♦Desc* ➤ It Sends a wood carved image of the text provided.\n\n*🎯Cmd*➤ .latte\n*♦Desc*➤ It put the text as latte art within a coffee cup.\n\n*🎯Cmd* .8bit\n*♦Desc*➤ Converts the text into an 8bit style image.\nYou must enter the heading and subheading seperated by */* in order!\n\n*🎯Cmd* .shadow\n*♦Desc*➤ Converts the text into shadow themed image.\n\n*🎯Cmd* ➤ .harry\n*♦Desc*➤ Converts the text into a harrypotter themed image.\n\n*🎯Cmd* ➤ .sparkling\n*♦Desc* ➤ Converts the text into a sparkling themed image\nYou must enter the heading and subheading seperated by */* in order!\n\n*🎯Cmd* ➤ .watercolour\n*♦Desc* ➤ Converts the text into a watercolour themed image.\n\n*🎯Cmd* ➤.ninjalogo\n*♦Desc* ➤ Enters the text as the caption for a ninja themed logo.\n\n*🎯Cmd* ➤ .neonlight\n*♦Desc* ➤ Converts the text into a neonlight themed image.\n\n*🎯Cmd* ➤.3dtext\n*♦Desc*➤ Converts the provided text into a 3D style image.');

    }));

    Asena.addCommand({pattern: 'glitch ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/tiktokeffect/?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by```*⦁═ǫᴜᴇᴇɴ 👸 ᴀʟᴇxᴀ═⦁*'})

    }));

    Asena.addCommand({pattern: 'latte ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/coffeecup/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*```Made by```*⦁═ǫᴜᴇᴇɴ 👸 ᴀʟᴇxᴀ═⦁*'})

    }));


    Asena.addCommand({pattern: 'wood ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/woodblock/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by```*⦁═ǫᴜᴇᴇɴ 👸 ᴀʟᴇxᴀ═⦁*'})

    }));

    Asena.addCommand({pattern: '8bit ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/8bit/?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by```*⦁═ǫᴜᴇᴇɴ 👸 ᴀʟᴇxᴀ═⦁*'})

    }));

    Asena.addCommand({pattern: 'shadow ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/shadowtext/?text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by```*⦁═ǫᴜᴇᴇɴ 👸 ᴀʟᴇxᴀ═⦁*'})

    }));

    Asena.addCommand({pattern: 'underwater ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/underwater/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by```*⦁═ǫᴜᴇᴇɴ 👸 ᴀʟᴇxᴀ═⦁*'})

    }));

    Asena.addCommand({pattern: 'flower ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/mugflower/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by```*⦁═ǫᴜᴇᴇɴ 👸 ᴀʟᴇxᴀ═⦁*'})

    }));

    Asena.addCommand({pattern: 'burn ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/burnpaper/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by```*⦁═ǫᴜᴇᴇɴ 👸 ᴀʟᴇxᴀ═⦁*'})

    }));

    Asena.addCommand({pattern: 'candy ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/sweetcandy/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by```*⦁═ǫᴜᴇᴇɴ 👸 ᴀʟᴇxᴀ═⦁*'})

    }));

    Asena.addCommand({pattern: 'harrypotter ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/hpotter/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by```*⦁═ǫᴜᴇᴇɴ 👸 ᴀʟᴇxᴀ═⦁*'})

    }));

    Asena.addCommand({pattern: 'sparkling ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/sparkling?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by```*⦁═ǫᴜᴇᴇɴ 👸 ᴀʟᴇxᴀ═⦁*'}
