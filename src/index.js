// Librerias
const fetch = require("node-fetch");

///////////////////// JokeAPI /////////////////////////////////
/*
@param {String} lang | El lenguaje del chiste
@param {Boolean} familyfriendly | Cel indicador de si es apto para todos

@return {json} | Devuelve un JSON
*/
async function jokeAPI(lang, familyfriendly){
  if(!lang) throw new TypeError("El lenguaje del chiste no se ha especificado")
  if(!familyfriendly) throw new TypeError("El indicador \"Apto para todo publico\" no se ha especificado")
  let link;
  
  // TODO: Añadir mas idiomas
  // Verifica si el lenguaje es ingles o frnaces
switch(lang){
  case "en":
    lang = "lang=en";
    break;
  case "fr":
    lang = "lang=fr";
    break;
  case "es":
    lang = "lang=es";
    break;
    
  default:
   throw new SyntaxError("El lenguaje insertado no es admitido, disponible: en, es, y fr");
}
  
switch(familyfriendly){
  case false:
   link = "https://v2.jokeapi.dev/joke/Any?" + lang;
   break;
   
  case true:
    link = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Spooky,Christmas?" + lang + "&blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
   break;
   
  default:
   throw new SyntaxError("FamilyFriendly debe ser un booleano (true o false)")
}
  
  // y luego hace request
  let res = await fetch(link);
  let data = res.json()
   
  return data;
}

////////////////////////TovadeAPI/////////////////////////////

/*
@param {String} type | Lo que se busca en la api


@return {json} | Devuelve un JSON
*/

async function tovadeAPI(route){
  if(!route) throw new TypeError("El pedido no se ha especificado")
   
   let link;
   
  switch(route){
    case "quote":
      link = "https://api.tovade.xyz/v1/fun/quote";
      break;
      
    case "covid":
      link = "https://api.tovade.xyz/v1/info/covid";
    break;
    
    default:
    throw new SyntaxError("Las rutas son: quote y covid");
  }
  
  let res = await fetch(link);
  let data = res.json()
  
  return data;
}

module.exports = {
 jokeAPI, tovadeAPI
}