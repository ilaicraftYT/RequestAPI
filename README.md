# RequestAPI

RequestAPI es un module de NodeJS el cual te ayudara a hacer peticiones a diferentes APIs

## Instalacion

Usa  [NPM](https://npmjs.com/package/npm) para instalar RequestAPI.

```bash
npm i reqapi
```

## Uso

### JokeAPI
```js
const { jokeAPI } = require("reqapi");

// Primer argumento = Lenguaje
// Segundo argumento = Family Friendly
jokeAPI("en", true)
```
### TovadeAPI

```js
const { tovadeAPI } = require("reqapi");

// Primer argumento = Que cosa buscar, por ahora lo disponible es dog, quote y covid
tovadeAPI("dog")
```
## Contribuciones
Pull Requests son bienvenidos. Para cambios mayores en la estructura del codigo, asegurate
de documentar bien.
## Licencia
[MIT](https://choosealicense.com/licenses/mit/)
