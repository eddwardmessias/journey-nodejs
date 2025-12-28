> npm i typescript @types/node -D
> npx tsc --init
- vai no tsconfig bases, clica no @tsconfig/node22 e copia e cola no ts.config

> npm i tsx -D
- basicamente uma forma de converter o código para js e execucaçao com node, com um comando só

cria src e server.ts

> npx tsx watch src/server

> npm i fastify

> npm i prisma -D ->> npm install prisma@6.5 -D
> npx prisma init --datasource-provider SQLite
criou um .env
e  a pasta primsma(colocar a tabela dos bancos)


model Trip{


  
  @@map("trips")
}

@@map faz com que eu consiga renomear

criar tabela:

> npx prisma migrate dev
- e roda o sql...
prisma automatiza a criação e instrucoes


> npm i zod

existe uma integração mais nativa qe através de um plugin

> npm i fastify-type-provider-zod

ai joga na aplicação:

import { validatorCompiler, serializerCompiler } from 'fastify-type-provider-zod';


app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);