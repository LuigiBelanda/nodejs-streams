/**
 *  
 *  Links e outros:
 *  https://www.geeksforgeeks.org/node-js-stream-pipeline-method/
 *  https://www.geeksforgeeks.org/node-js-util-promisify-method/
 *  https://nodejs.org/docs/latest-v18.x/api/stream.html#readable_readsize
 *  https://nodejs.org/docs/latest-v18.x/api/stream.html#readableread0
 *  https://nodejs.org/docs/latest-v18.x/api/stream.html#readablepush
 *
 */

import { pipeline, Readable, Writable } from "stream";
import { promisify } from "util";

const pipelineAsync = promisify(pipeline);

const readableStream = Readable({
    read: function () {
        this.push("Hello Dude!! 1");
        this.push("Hello Dudee!! 2");
        this.push("Hello Dudeee!! 3");

        // avisa que acabaram os dados
        this.push(null);
    },
});

const writableStream = Writable({
    write(chunk, enconding, cb) {
        console.log("msg", chunk.toString());
        cb();
    },
});

// pipeline de dados / etapas que serão percorridas
await pipelineAsync(
    readableStream,
    // process.stdout
    writableStream
);

console.log("Processo acabou");

/**
 * 
 *  Basicamente o código acima implementamos efetivamente uma Readable / Writable stream 
 *  e com o pipeline fazemos o fluxo dos dados, onde primeiro lemos e mostramos quais
 *  são os nossos dados (readableStream), depois mostramos eles no log (writableStream)
 * 
 */


// próximo: example07mjs