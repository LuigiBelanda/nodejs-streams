import { pipeline, Readable, Transform, Writable } from "stream";
import { promisify } from "util";
import { createWriteStream } from "node:fs";

const pipelineAsync = promisify(pipeline);

const readableStream = Readable({
    read: function () {
        for (let index = 0; index < 1e4; index++) {
            const person = {
                id: Date.now() + index,
                name: `John Doe-${index}`,
            };

            // pelas streams trabalharem com buffer, temos que converte-los em string
            const data = JSON.stringify(person);
            this.push(data);
        }

        this.push(null);
    },
});

const writableMapToCSV = Transform({
    transform(chunk, enconding, cb) {
        const data = JSON.parse(chunk);
        const result = `${data.id}, ${data.name.toUpperCase()} \n`;

        // caso a gente precise enviar o dado para outra etapa
        // colocamos como da seguinte forma
        cb(null, result);
        // primeiro param = erro (null por que não tivemos erro)
        // segundo param = o que gerou / o que queremos enviar com o sucesso deste processo
    },
});

// adicionando o header (id, name) caso ainda não tenha
const setHeader = Transform({
    transform(chunk, enconding, cb) {
        this.counter = this.counter ?? 0;

        if (this.counter) {
            return cb(null, chunk);
        }

        this.counter += 1;

        cb(null, "id, name\n".concat(chunk));
    },
});

// pipeline de dados / etapas que serão percorridas
await pipelineAsync(
    readableStream,
    writableMapToCSV,
    setHeader,
    // process.stdout,
    createWriteStream("my.csv")
);

console.log("Processo acabou");

/**
 * 
 *  Basicamente o código acima com o readableStream serão gerados diversos "users" com id e name,
 *  pela streams trabalharem com buffers ja no readableStream passamos isso para outro formato e depois
 *  enviamos esses dados para próxima etapa.
 * 
 *  writableMapToCSV fazemos um pequeno ajuste de como os dados devem ficar, qual vem primeiro etc, aqui é 
 *  transform, ou seja, estamos fazendo algum tratamento nos nossos dados. Com o setHeader não é diferente,
 *  mas aqui é de uma forma bem mais sutil, verificando apenas se temos os headers de nossos dados, caso
 *  contrário adicionamos eles.
 * 
 *  Depois com base no nosso pipeline, nossa próxima etapa é jogar esse dados tratados e estruturados, pouco
 *  a pouco, por meio do createWriteStream em um csc (my.csv)
 * 
 */