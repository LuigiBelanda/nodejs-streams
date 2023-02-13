# :inbox_tray: nodejs-streams
Abordagem prática e inicial do que são as node.js stream

## :link: Links de apoio

- https://nodejs.org/docs/latest-v18.x/api/stream.html#stream

- https://pt.stackoverflow.com/questions/504494/como-funciona-o-pipe-no-node-js

- https://www.geeksforgeeks.org/node-js-stream-readable-pipe-method/
 
- https://nodejs.dev/en/learn/the-nodejs-event-emitter/

- https://www.w3schools.com/nodejs/nodejs_http.asp

- https://nodejs.org/docs/latest-v18.x/api/http.html#http

- https://nodejs.org/dist/latest-v18.x/docs/api/cli.html#-e---eval-script

- https://blog.risingstack.com/mastering-the-node-js-cli-command-line-options/

- https://nodejs.org/docs/latest-v18.x/api/net.html#net

- https://www.w3big.com/pt/nodejs/nodejs-net-module.html#gsc.tab=0

- https://www.geeksforgeeks.org/node-js-stream-pipeline-method/

- https://www.geeksforgeeks.org/node-js-util-promisify-method/

- https://nodejs.org/docs/latest-v18.x/api/stream.html#readable_readsize

- https://nodejs.org/docs/latest-v18.x/api/stream.html#readableread0
 
- https://nodejs.org/docs/latest-v18.x/api/stream.html#readablepush


## :page_facing_up: Anotações do próprio criador do vídeo

- Para que servem
    - Manipular dados sob demanda 
    - Resolve 90% dos casos que dizem que Node.js não é para isso 
        - Evita processamento desnecessário 
        - Controla concorrência e faz controle automático de gestão de tráfego

    - Estão no Node.js desde a primeira versão (mostrar print)
    - Trabalham com Buffers que são os dados brutos e são quebrados em fragmentos, conhecidos como chunks
    - Herdam de events : .on data, error, close e end
    - Fluxo contínuo de dados
    
- Categorias de Streams 
    - Readable Stream 
        São streams que emitem dados 
        Ex: download de arquivos 
            leitor de banco de dados 
        fs.createReadStream()

    - Writable Streams
        São streams que armazenam dados 
        fs.createWriteStream()

    Node.js based HTTP server, request is a readable stream and response is a writable stream

    - Transform Streams
        São Streams que Mapeiam dados 

- Casos de uso mais comuns 
    - Leitura e escrita de arquivos grandes 
    - Relatórios 
    - Extração e compressão de arquivos grandes
    - Processamento de video 

Ex.1 
    Readable

https://nodesource.com/blog/understanding-streams-in-nodejs/