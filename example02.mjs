/**
 *  No código abaixo conseguimos entender melhor que o pipe() redireciona 
 *  os dados para o stdout, passando assim direto para ele
 *  ou seja, não veremos no terminal "Entrada terminaL: x"
 */

const stdin = process.stdin
    .on("data", msg => console.log("Entrada terminal: ", msg.toString()));

const stdout = process.stdout
    .on("data", msg => console.log("Saida terminal: ", msg.toString()));

stdin.pipe(stdout);

// próximo: example03.mjs