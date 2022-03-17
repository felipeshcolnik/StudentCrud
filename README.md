# StudentCrud
Api  capaz de armazenar dados de um estudantes no sistema, onde é possível criar, listar, alterar, remover e filtrar estudantes

# Para Rodar o Projeto:
1- Em seu terminal, rode o comando abaixo, para fazer o download do projeto para sua máquina :
  git clone git@github.com:felipeshcolnik/StudentCrud.git

2- Dentro da pasta onde os arquivos foram baixados, rode o comando abaixo para instalar os pacotes necessarios para rodar o projeto:
  npm i

3- (a)Para rodar o projeto no modo desenvolvedor rode o comando abaixo:
  npm run dev
   (b)Para rodar o projeto no modo usuario rode o comando abaixo:
  npm start

4- O Banco de dados escolhido para rodar este projeto foi o MONGO, então é recomendável que ele esteja instalado em sua máquina.
  https://docs.mongodb.com/manual/installation/

5- Para fazer as requisições, minha sugestão é usar o software Insomnia (https://insomnia.rest/download) - Caso prefira, também é possível utilizar algum outro software similar. Nele será possível testar as rotas desenvolvidas na aplicação:
   
   Para criar um novo Estudante, utilize o método POST e a rota 
   http://localhost:3001/student
   Inclua um body com as seguintes informações:
    {
      "name": "Aluno",
	    "email": "exemplo@teste.com", 
	    "birthDate": "10/05/1996", 
	    "grade": "5a Seria"
    }

   Para listar todos os estudante do banco de dados, utilize o método GET e a rota 
   http://localhost:3001/student
   
   Para obter as informações de um único estudante do banco de dados, utilize o método GET e a rota 
   http://localhost:3001/student/id
   onde o id é uma sequencia de dígitos fornecida pelo Banco de Dados do MONGO

   Para editar as informações de um estudante, utilize o método PUT e a rota 
   http://localhost:3001/student
   Inclua um body com as seguintes informações:
    {
      "_id": "6233ae92411c3666410ffc91",
      "name": "Aluno",
	    "email": "exemplo@teste.com", 
	    "birthDate": "10/05/1996", 
	    "grade": "5a Seria"
    }
    onde o _id é uma sequencia de dígitos fornecida pelo Banco de Dados do MONGO

   Para deletar um estudantedo banco de dados, utilize o método DELETE e a rota 
   http://localhost:3001/student/id
   onde o id é uma sequencia de dígitos fornecida pelo Banco de Dados do MONGO
