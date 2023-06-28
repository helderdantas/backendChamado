
## Comando obrigatório
## Baixa a imagem do node com versão alpine (versão mais simplificada e leve)
FROM node:18

## Define o local onde o app vai ficar no disco do container
## Pode ser o diretório que você quiser
RUN mkdir /root/backend
WORKDIR /root/backend

## Copia tudo que começa com package e termina com .json para dentro da pasta /root/backend
COPY package*.json /root/backend

## Executa yarn install para adicionar as dependências e criar a pasta node_modules
RUN npm install

## Copia tudo que está no diretório onde o arquivo Dockerfile está 
## para dentro da pasta /root/backend do container
## Vamos ignorar a node_modules por isso criaremos um .dockerignore
COPY . /root/backend
RUN apt-get update && apt-get install -y curl
#COPY developement-entrypoint.sh /usr/bin/developement-entrypoint.sh
#RUN chmod 777 /usr/bin/developement-entrypoint.sh
#ENTRYPOINT ["/usr/bin/developement-entrypoint.sh"]
## Não se repete no Dockerfile
## Executa o comando yarn start para iniciar o script que que está no package.json
CMD yarn start
