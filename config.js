import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

global.owner = [
  ['5219992095479', 'π Mystic - Creador π', true],
  ['50499698072', 'π« Mystic - Collaborator 1 π«', true],
  ['51940617554', 'π« Mystic - Collaborator 2 π«', true],
  ['51996089079', 'π« Mystic - Collaborator 3 π«', true],
  ['573225236629', 'π« Mystic - Collaborator 4 π«', true],
  ['593959425714', 'π« Mystic - Collaborator 5 π«', true],
  ['50246028932', 'π« Mystic - Collaborator 6 π«', true],  
  ['5212411719888', 'π« Mystic - Collaborator 7 π«', true],	
  ['593968585283'],
  ['5219993404349'],
  ['5219991402134'],	
  ['5219996125657']
] 

global.suittag = ['5219993404349'] 
global.prems = ['51995386439'] 

global.packname = '(βοΎβοΎ)β'
global.author = 'βπππ πΌπ’ππππ - π±ππβ'
global.wm = 'βπππ πΌπ’ππππ - π±ππβ'
global.igfg = 'βπππ πΌπ’ππππ - π±ππβ'
global.wait = '*[β] Ζα΄ΚΙ’α΄Ι΄α΄α΄, α΄Ι’α΄α΄Κα΄α΄ α΄Ι΄ α΄α΄α΄α΄Ι΄α΄α΄...*'

global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
// 'fiktod' 'BF39D349845E' '675e34de8a' '0b917b905e6f'
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['BrunoSobrino']

global.APIs = { 
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',	
  fgmods: 'https://api-fgmods.ddns.net'
},
global.APIKeys = { 
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

global.imagen1 = fs.readFileSync('./Menu2.jpg')
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg') 
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png')
global.imagen4 = fs.readFileSync('./Menu.png')

global.mods = [] 


/*************************/
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	
global.rpg = {
emoticon(string) {
string = string.toLowerCase()
let emot = {
      level: 'π§¬ Nivel',
      limit: 'π Diamante',
      exp: 'β‘ Experiencia',
      bank: 'π¦ Banco',
      diamond: 'π Diamante',
      health: 'β€οΈ Salud',
      kyubi: 'π Magia',
      joincount: 'πͺ Token',
      emerald: 'π Esmeralda',
      stamina: 'β¨ EnergΓ­a',
      role: 'πͺ Rango',
      premium: 'ποΈ Premium',
      pointxp: 'π§ Puntos Exp',
      gold: 'π Oro',
      trash: 'π Basura',
      crystal: 'π? Cristal',
      intelligence: 'π§  Inteligencia',
      string: 'πΈοΈ Cuerda',
      keygold: 'π Llave de Oro',
      keyiron: 'ποΈ Llave de Hierro',
      emas: 'πͺ PiΓ±ata',
      fishingrod: 'π£ CaΓ±a de Pescar',
      gems: 'π Gemas',
      magicwand: 'βοΈ Varita MΓ‘gica',
      mana: 'πͺ Hechizo',
      agility: 'π€ΈββοΈ Agilidad',
      darkcrystal: 'β οΈ Cristal Oscuro',
      iron: 'βοΈ Hierro',
      rock: 'πͺ¨ Roca',
      potion: 'π₯€ PociΓ³n',
      superior: 'πΌ Superior',
      robo: 'π Robo',
      upgrader: 'π§° Aumentar Mejora',
      wood: 'πͺ΅ Madera',
      strength: 'π¦Ήβ βοΈ Fuerza',
      arc: 'πΉ Arco',
      armor: 'π₯Ό Armadura',
      bow: 'πΉ Super Arco',
      pickaxe: 'βοΈ Pico',
      sword: 'βοΈ Espada',
      common: 'π¦ Caja ComΓΊn',
      uncoommon: 'π₯‘ Caja Poco ComΓΊn',
      mythic: 'π³οΈ Caja MΓ­tico',
      legendary: 'π Caja Legendaria',
      petFood: 'π Alimento para Mascota',
      pet: 'π± Caja para Mascota',
      bibitanggur: 'π Semilla de Uva',
      bibitapel: 'π Semilla de Manzana',
      bibitjeruk: 'π Semillas de naranja',
      bibitmangga: 'π₯­ Semilla de Mango',
      bibitpisang: 'π Semillas de PlΓ‘tano',
      ayam: 'π Pollo',
      babi: 'π Puerco',
      Jabali: 'π Jabali',
      bull: 'π Toro',    
      buaya: 'π Cocodrilo',    
      cat: 'π Gato',      
      centaur: 'π Centauro',
      chicken: 'π Pollo',
      cow: 'π Vaca', 
      dog: 'π Perro',
      dragon: 'π DragΓ³n',
      elephant: 'π Elefante',
      fox: 'π¦ Zorro',
      giraffe: 'π¦ Jirafa',
      griffin: 'π¦ Ave',
      horse: 'π Caballo',
      kambing: 'π Cabra',
      kerbau: 'π BΓΊfalo',
      lion: 'π¦ LeΓ³n',
      money: 'πΎ MysticCoins',
      monyet: 'π Mono',
      panda: 'πΌ Panda',
      snake: 'π Serpiente',
      phonix: 'ποΈ FΓ©nix',
      rhinoceros: 'π¦ Rinoceronte',
      wolf: 'πΊ Lobo',
      tiger: 'π Tigre',
      cumi: 'π¦ Calamar',
      udang: 'π¦ CamarΓ³n',
      ikan: 'π Pez',
      fideos: 'π Fideos',
      ramuan: 'π§ͺ Ingrediente NOVA',
      knife: 'πͺ Cuchillo'
    }
let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]]
}}
global.rpgg = { //Solo emojis 
emoticon(string) {
string = string.toLowerCase()
    let emott = {
      level: 'π§¬',
      limit: 'π',
      exp: 'β‘',
      bank: 'π¦',
      diamond: 'π+',
      health: 'β€οΈ',
      kyubi: 'π',
      joincount: 'πͺ',
      emerald: 'π',
      stamina: 'β¨',
      role: 'πͺ',
      premium: 'ποΈ',
      pointxp: 'π§',
      gold: 'π',
      trash: 'π',
      crystal: 'π?',
      intelligence: 'π§ ',
      string: 'πΈοΈ',
      keygold: 'π',
      keyiron: 'ποΈ',
      emas: 'πͺ',
      fishingrod: 'π£',
      gems: 'π',
      magicwand: 'βοΈ',
      mana: 'πͺ',
      agility: 'π€ΈββοΈ',
      darkcrystal: 'β οΈ',
      iron: 'βοΈ',
      rock: 'πͺ¨',
      potion: 'π₯€',
      superior: 'πΌ',
      robo: 'π',
      upgrader: 'π§°',
      wood: 'πͺ΅',
      strength: 'π¦Ήβ βοΈ',
      arc: 'πΉ',
      armor: 'π₯Ό',
      bow: 'πΉ',
      pickaxe: 'βοΈ',
      sword: 'βοΈ',
      common: 'π¦',
      uncoommon: 'π₯‘',
      mythic: 'π³οΈ',
      legendary: 'π',
      petFood: 'π',
      pet: 'π±',
      bibitanggur: 'π',
      bibitapel: 'π',
      bibitjeruk: 'π',
      bibitmangga: 'π₯­',
      bibitpisang: 'π',
      ayam: 'π',
      babi: 'π',
      Jabali: 'π',
      bull: 'π',    
      buaya: 'π',    
      cat: 'π',      
      centaur: 'π',
      chicken: 'π',
      cow: 'π', 
      dog: 'π',
      dragon: 'π',
      elephant: 'π',
      fox: 'π¦',
      giraffe: 'π¦',
      griffin: 'π¦', 
      horse: 'π',
      kambing: 'π',
      kerbau: 'π',
      lion: 'π¦',
      money: 'πΎ',
      monyet: 'π',
      panda: 'πΌ',
      snake: 'π',
      phonix: 'ποΈ',
      rhinoceros: 'π¦',
      wolf: 'πΊ',
      tiger: 'π',
      cumi: 'π¦',
      udang: 'π¦',
      ikan: 'π',
      fideos: 'π',
      ramuan: 'π§ͺ',
      knife: 'πͺ'
    }
let results = Object.keys(emott).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emott[results[0][0]]
}}
global.rpgshop = { //Tienda
emoticon(string) {
string = string.toLowerCase()
    let emottt = {
      exp: 'β‘ Experiencia',
      limit: 'π Diamante',
      diamond: 'π Diamante',
      joincount: 'πͺ Token',
      emerald: 'π Esmeralda',
      berlian: 'β¦οΈ Joya',
      kyubi: 'π Magia',
      gold: 'π Oro',
      money: 'πΎ MysticCoins',
      tiketcoin: 'π« mystic Tickers',
      stamina: 'β¨ EnergΓ­a',
      potion: 'π₯€ PociΓ³n',
      aqua: 'π§ Agua',
      trash: 'π Basura',
      wood: 'πͺ΅ Madera',
      rock: 'πͺ¨ Roca',
      batu: 'π₯ Piedra',
      string: 'πΈοΈ Cuerda',
      iron: 'βοΈ Hierro',
      coal: 'β±οΈ CarbΓ³n',
      botol: 'πΆ Botella',
      kaleng: 'π₯« Lata',
      kardus: 'πͺ§ CartΓ³n',
      eleksirb: 'π‘ Electricidad',
      emasbatang: 'γ½οΈ Barra de Oro',
      emasbiasa: 'π§­ Oro ComΓΊn',
      rubah: 'π¦π«οΈ Zorro Grande',
      sampah: 'ππ«οΈ Super Basura',
      serigala: 'πΊπ«οΈ Super Lobo',
      kayu: 'π· Super Madera',
      sword: 'βοΈ Espada',
      umpan: 'πͺ± Carnada', 
      healtmonster: 'π΅ Billetes',
      emas: 'πͺ PiΓ±ata',
      pancingan: 'πͺ Gancho',
      pancing: 'π£ CaΓ±a de Pescar',
      common: 'π¦ Caja ComΓΊn',
      uncoommon: 'π₯‘ Caja Poco ComΓΊn',
      mythic: 'π³οΈ Caja MΓ­tica',
      pet: 'π« Caja de Mascotas',//?
      gardenboxs: 'π Caja de JardinerΓ­a',//?
      legendary: 'π Caja Legendaria',
      anggur: 'π Uva',
      apel: 'π Manzana',
      jeruk: 'π Naranja',
      mangga: 'π₯­ Mango',
      pisang: 'π Platano',
      bibitanggur: 'πΎπ Semillas de uva',
      bibitapel: 'πΎπ Semillas de manzana',
      bibitjeruk: 'πΎπ Semillas de naranja',
      bibitmangga: 'πΎπ₯­ Semillas de Mango',
      bibitpisang: 'πΎπ Semillas de plΓ‘tano',
      centaur: 'π Centauro',
      griffin: 'π¦ Ave',
      kucing: 'π Gato',
      naga: 'π DragΓ³n',
      fox: 'π¦ Zorro',
      kuda: 'π Caballo',
      phonix: 'ποΈ FΓ©nix',
      wolf: 'πΊ Lobo',
      anjing: 'πΆ Perro',
      petFood: 'π Alimento para Mascota', //?
      makanancentaur: 'ππ₯© Comida de Centauro',
      makanangriffin: 'π¦π₯© Comida de Ave',
      makanankyubi: 'ππ₯© Comida MΓ‘gica',
      makanannaga: 'ππ₯© Comida de DragΓ³n',
      makananpet: 'π±π₯© Alimentos de mascotas',
      makananphonix: 'ποΈπ₯© Comida de FΓ©nix'  
    }
let results = Object.keys(emottt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emottt[results[0][0]]
}}
global.rpgshopp = { //Tienda
  emoticon(string) {
    string = string.toLowerCase()
    let emotttt = {
      exp: 'β‘',
      limit: 'π',
      diamond: 'π+',
      joincount: 'πͺ',
      emerald: 'π',
      berlian: 'β¦οΈ',
      kyubi: 'π',
      gold: 'π',
      money: 'πΎ',
      tiketcoin: 'π«',
      stamina: 'β¨',
      potion: 'π₯€',
      aqua: 'π§',
      trash: 'π',
      wood: 'πͺ΅',
      rock: 'πͺ¨',
      batu: 'π₯',
      string: 'πΈοΈ',
      iron: 'βοΈ',
      coal: 'β±οΈ',
      botol: 'πΆ',
      kaleng: 'π₯«',
      kardus: 'πͺ§',
      eleksirb: 'π‘',
      emasbatang: 'γ½οΈ',
      emasbiasa: 'π§­',
      rubah: 'π¦π«οΈ',
      sampah: 'ππ«οΈ',
      serigala: 'πΊπ«οΈ',
      kayu: 'π·',
      sword: 'βοΈ',
      umpan: 'πͺ±', 
      healtmonster: 'π΅',
      emas: 'πͺ',
      pancingan: 'πͺ',
      pancing: 'π£',
      common: 'π¦',
      uncoommon: 'π₯‘',
      mythic: 'π³οΈ',
      pet: 'π«',//?
      gardenboxs: 'π',//?
      legendary: 'π',
      anggur: 'π',
      apel: 'π',
      jeruk: 'π',
      mangga: 'π₯­',
      pisang: 'π',
      bibitanggur: 'πΎπ',
      bibitapel: 'πΎπ',
      bibitjeruk: 'πΎπ',
      bibitmangga: 'πΎπ₯­',
      bibitpisang: 'πΎπ',
      centaur: 'π',
      griffin: 'π¦',
      kucing: 'π',
      naga: 'π',
      fox: 'π¦',
      kuda: 'π',
      phonix: 'ποΈ',
      wolf: 'πΊ',
      anjing: 'πΆ',
      petFood: 'π', //?
      makanancentaur: 'ππ₯©',
      makanangriffin: 'π¦π₯©',
      makanankyubi: 'ππ₯©',
      makanannaga: 'ππ₯©',
      makananpet: 'π±π₯©',
      makananphonix: 'ποΈπ₯©'  
    }
let results = Object.keys(emotttt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emotttt[results[0][0]]
}}	
	
global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']
//********Tiempo***************
global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, { weekday: 'long' })
global.fecha = d.toLocaleDateString('es', { day: 'numeric', month: 'numeric', year: 'numeric' })
global.mes = d.toLocaleDateString('es', { month: 'long' })
global.aΓ±o = d.toLocaleDateString('es', { year: 'numeric' })
global.tiempo = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
//*****************************
global.wm2 = `βΈ ${dia} ${fecha}\nβΈ πππ πΌπ’ππππ - π±ππ`
global.gt = 'βπππ πΌπ’ππππ - π±ππβ'
global.mysticbot = 'βπππ πΌπ’ππππ - π±ππβ'
global.md = 'https://github.com/BrunoSobrino/TheMystic-Bot-MD'
global.mysticbot = 'https://github.com/BrunoSobrino/TheMystic-Bot-MD'
global.waitt = '*[β] Ζα΄ΚΙ’α΄Ι΄α΄α΄, α΄Ι’α΄α΄Κα΄α΄ α΄Ι΄ α΄α΄α΄α΄Ι΄α΄α΄...*'
global.waittt = '*[β] Ζα΄ΚΙ’α΄Ι΄α΄α΄, α΄Ι’α΄α΄Κα΄α΄ α΄Ι΄ α΄α΄α΄α΄Ι΄α΄α΄...*'
global.waitttt = '*[β] Ζα΄ΚΙ’α΄Ι΄α΄α΄, α΄Ι’α΄α΄Κα΄α΄ α΄Ι΄ α΄α΄α΄α΄Ι΄α΄α΄...*'
global.nomorown = '5219993404349'
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf']
global.cmenut = 'βββββββγ'
global.cmenub = 'ββ¦ '
global.cmenuf = 'β°βββββββββββΰΉ\n'
global.cmenua = '\nβ ββββββββββββββββββββββββββββββββ β\n     '
global.dmenut = '*βββββββ©*'
global.dmenub = '*βΒ»*'
global.dmenub2 = '*β*'
global.dmenuf = '*β°βββββββββββ¦*'
global.htjava = 'β«Ήβ«Ί'
global.htki = '*β­β’Μ©Μ©Νβ±β’β’β’β’ βͺ*'
global.htka = '*βͺ β’β’β’β’Μ©Μ©Νβ°β’β­*'
global.comienzo = 'β’ β’ ββββββ'
global.fin = 'ββββββ β’ β’'
global.botdate = `β«Ήβ«Ί Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}` //Asia/Jakarta
global.bottime = `π§ π π  π : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`//America/Los_Angeles
global.fgif = {key: { participant : '0@s.whatsapp.net'}, message: { "videoMessage": { "title": wm, "h": `Hmm`, 'seconds': '999999999',  'gifPlayback': 'true',  'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}}
global.multiplier = 99
//*************************

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.redBright("Update 'config.js'"))
import(`${file}?update=${Date.now()}`)})
