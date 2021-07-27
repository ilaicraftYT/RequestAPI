// Librerias
const fetch = require("node-fetch");

///////////////////// JokeAPI /////////////////////////////////
/*
@param {String} lang | El lenguaje del chiste
@param {Boolean} familyfriendly | Cel indicador de si es apto para todos

@return {json} | Devuelve un JSON
*/
function jokeAPI(lang, familyfriendly){
  if(!lang) throw new TypeError("El lenguaje del chiste no se ha especificado")
  if(!familyfriendly) throw new TypeError("El indicador \"Apto para todo publico\" no se ha especificado")
  let link;
  
  // TODO: Añadir mas idiomas
  // Verifica si el lenguaje es ingles o frnaces
  if(lang == "en"){
    lang = "lang=en";
  } else if(lang == "fr"){
    lang = "lang=fr"; 
  }  else if(lang == "es"){
    lang = "lang=es";
  } else {
    throw new TypeError("El lenguaje no es valido, solo español, ingles y frances (es, en, fr) son admitidos")
  }
  
  // Aca verifica lo de familyfriendly
  if(familyfriendly == false){
    link = "https://v2.jokeapi.dev/joke/Any?" + lang 
  } else if(familyfriendly == true){
    link = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Spooky,Christmas?" + lang + "&blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
  } else {
    throw new TypeError("familyfriendly no es un booleano (true o false)")
  }
  
  // y luego hace request
  fetch(link)
    .then(res => res.json())
    .then(json => console.log(json));
}

////////////////////////TovadeAPI/////////////////////////////

/*
@param {String} type | Lo que se busca en la api


@return {json} | Devuelve un JSON
*/

function tovadeAPI(type){
  if(!type) throw new TypeError("El pedido no se ha especificado")
  if(type == "quote"){
    
  let link = "https://api.tovade.xyz/v1/fun/quote";
  fetch(link)
    .then(res => res.json())
    .then(json => console.log(json));
    
  } else if(type == "covid"){
  
  let link = "https://api.tovade.xyz/v1/info/covid";
  fetch(link)
    .then(res => res.json())
    .then(json => console.log(json))
  
  } else if(type == "dog"){
    let link = "https://api.tovade.xyz/v1/animal/dog";
    fetch(link)
      .then(res => res.json())
      .then(json => console.log(json))
  }
}

module.exports = {
 jokeAPI, tovadeAPI
}