# RequestAPI

RequestAPI es un modulo de NodeJS basado en promesas el cual te ayudara a hacer peticiones a diferentes APIs

## Instalacion

Usa [NPM](https://npmjs.com/package/npm) para instalar RequestAPI.

```bash
npm i reqapi
```

## Uso

RequestAPI es "promise based" o basado en promesas, por lo tanto, se necesita el uso de `async` y `await`.

Un ejemplo simple:

```js
const reqapi = require("reqapi")

const broma = async() => {
  let datos = await reqapi.jokeAPI("en", true)
  console.log(datos)
}

broma()
```

Datos retorna una promesa con la respectiva informacion, podemos pedirle cierta informacion concreta y que solo devuelva esta, cambiando el console.log para que sea console.log(<datos>.<informacion>)

```js
console.log(datos.category)
```
Tome nota, la "informacion concreta" varia segun la API al que se le esta haciendo un pedido, a continuacion se mostrara todas las opciones posibles con RequestAPI y la documentacion de la API respectiva.

### Metodos

#### JokeAPI

```js
await reqapi.jokeAPI("en", true)
```
**Parametros**
1. Lenguaje | String
 > es
 > en 
 > fr
2. Family Friendly Switch | Boolean
 > true
 > false

**Documentacion:** https://v2.jokeapi.dev

#### tovadeAPI

```js
await reqapi.tovadeAPi("covid")
```

**Parametros**
1. Route / a buscar / Nombre de la utilidad | String
 > covid
 > quote

**Documentacion:** https://api.tovade.xyz/docs/

## Contribuciones
Las Pull Requests son bienvenidas. Para cambios mayores en la estructura del codigo, asegurate
de documentar bien.
## Licencia
[MIT](https://choosealicense.com/licenses/mit/)
