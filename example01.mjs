/**
 *  Links e outros:
 *  https://nodejs.org/docs/latest-v18.x/api/stream.html#stream
 *  https://pt.stackoverflow.com/questions/504494/como-funciona-o-pipe-no-node-js
 *  https://www.geeksforgeeks.org/node-js-stream-readable-pipe-method/
 *  https://nodejs.dev/en/learn/the-nodejs-event-emitter/
 * 
 *  readable.pipe( destination, options )
 * 
 */


/**
 * a entrada é nosso terminal si fizermos só a linha abaixo ele 
 * basicamente vai pegar o que digitarmos  e replicar logo em seguido
 * Input: ola || Output: ola
 * 
 * 
 * process.stdin.pipe(process.stdout)
 * 
 * 
 * no caso acima podemos entender que o process.stdin é uma Readable Stream, pois está emitindo um dado 
 * (São streams que emitem dados) e o que sai depois do pipe pelo process.stdout é uma Writable Stream,
 * pois esta sendo feita uma saida de dados, neste caso sendo apenas praticamente um log, 
 * mas poderia ser um dado que seria armazenado em um bando de dados etc
 */

// por herdar alguma opções de eventos podemo adicionar o "on"
// on é usado para adicionar uma função de retorno de chamada que será executada quando o evento for acionado
process.stdin.pipe(process.stdout)
.on("data", msg => console.log("Data terminal: ", msg.toString()));

// próximo: example02.mjs