/**
 *  Links e outros:
 *  https://www.w3schools.com/nodejs/nodejs_http.asp
 *  https://nodejs.org/docs/latest-v18.x/api/http.html#http
 *  https://nodejs.org/dist/latest-v18.x/docs/api/cli.html#-e---eval-script
 *  https://blog.risingstack.com/mastering-the-node-js-cli-command-line-options/
 *
 *  node -e "process.stdout.write(crypto.randomBytes(1e9))" > big.file
 *
 */

import http from "node:http";
import { readFileSync } from "node:fs";

http.createServer((req, res) => {
    const file = readFileSync("./big.file").toString();
    res.write(file);
    res.end();
}).listen(3000, () => console.log("Running at PORT 3000"));

/**
 * 
 * Se gerarmos o arquivo de aproximadamente 1 GB com o comando node -e ... listado acima
 * e fazermos uma request para nosso server para ele nos retornar o arquivo inteiro de uma vez
 * dará erro, pois o arquivo é muito extenso ("code: 'ERR_STRING_TOO_LONG'"), não dá para ler
 * tudo de uma vez e enviar tudo de uma vez também nessa grande quantidade
 * 
 */

// próximo: example04.mjs