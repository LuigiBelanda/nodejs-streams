/**
 *
 * Teste:
 * Terminal 1 - node example04.mjs
 * Terminal 2 - curl localhost:3000 --output output.txt
 *
 */

import http from "node:http";
import { createReadStream } from "node:fs";

http.createServer((req, res) => {
    createReadStream("big.file")
        .pipe(res);
}).listen(3000, () => console.log("Running at PORT 3000"));

/**
 * 
 *  No exemplo acima conforme formos lendo o nosso big.file
 *  vamos redirecionando os dados por meio do pipe() para
 *  a res (response) do nosso servidor, onde se for executado o comando curl
 *  acima, isso significa que aos poucos iremos ir passando os dados pelo pipe
 *  e ir escrevendo eles aos poucos no output.txt
 * 
 */