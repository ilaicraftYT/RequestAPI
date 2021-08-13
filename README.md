# RequestAPI

RequestAPI es un module de NodeJS el cual te ayudara a hacer peticiones a diferentes APIs

## Instalacion

Usa  [NPM](https://npmjs.com/package/npm) para instalar RequestAPI.

```bash
npm i reqapi
```

## Uso

** Advertencia **
> Ahora RequestAPI usa promesas, ahora se necesitara usar async y await, ahora bien, en lugar de logear la response completa, ahora se podran pedir propiedades

Para usar este paquete debemos usar await y async,primero que todo se necesita requerir el paquete, a continuacion se mostrara un ejemplo simple:

```js
const api = require("reqapi")

const prueba = async() => {
let datos = await api.jokeAPI("en", true)
console.log(datos);
}

prueba()
```
Esto hara un log de la respuesta completa, pues no le pedimos una propiedad en especifico, ahora bien, si queremos pedir una propiedad en especifico debemos cambiar el console.log

```js
console.log(datos.category);
```

Ahora en vez de retornar toda la respuesta, requerimos algo en especifico, un poco  menos simple, mas rapido.

Si quieres saber todas las opciones disponibles para este paquete te recomiendo que le heches un vistaso al codigo del proyecto, o puedes ver algunso ejemplos de uso aqui mismo.

### Ejemplos de uso

Estos ejemplos tienen una estructura "confirmada" de que funcionan asi, sin embargo puedes usarla a tu gusto:

```js
const api = require("reqapi");

const funcion = async() => {
// Ejemplo...
console.log(datos)
}
```

#### JokeAPI

```js
let datos = api.jokeAPI("es", true);
```
**Parametros**
1. Lenguaje / String
 - es
 - en
 - fr
2. Prender o apagar Family Friendly / Boolean
 - true
 - false

#### TovadeAPI

```js
let datos = api.tovadeAPI("covid")
```
**Parametros**
1. Route, a buscar / String
  - covid

## Contribuciones
Pull Requests son bienvenidos. Para cambios mayores en la estructura del codigo, asegurate
de documentar bien.
## Licencia
[MIT](https://choosealicense.com/licenses/mit/)
