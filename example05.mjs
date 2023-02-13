/**
 *
 *  Links e outros:
 *  https://nodejs.org/docs/latest-v18.x/api/net.html#net
 *  https://www.w3big.com/pt/nodejs/nodejs-net-module.html#gsc.tab=0
 *
 */

/**
 *
 *  Teste:
 *  Terminal 1: node example05.mjs
 *  Terminal 2: node -e "process.stdin.pipe(require('net').connect(1338))"
 *
 */

import net from "node:net";

net.createServer((socket) => socket.pipe(process.stdout)).listen(1338);

/**
 * 
 *  No exemplo acima criamos um socket com Node, depois
 *  colocamos que todos os dados que vierem do user conectado no socket
 *  passará pelo pipe() e com serão redirecionadas automaticamente
 *  para o process.stdout
 * 
 *  Então se nos conectarmos na porta 1338 e mandarmos um "Oi", no terminal que executamos
 *  o arquivo "example05.mjs" esse "Oi" aparecerá (process.stdout)
 * 
 */

// próximo example06.mjs