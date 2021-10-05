<h1 align="center">Desafio</h1>


<h1 align="center"> 
	:books: Tecnologias 
</h1>

<ul>
    <li><a href="https://reactnative.dev/">ReactNative</a></li>
</ul>
<ul>
    <li><a href="https://nodejs.org/en/">Nodejs</a></li>
</ul>

<p>Aplicação simples um catalogo de filmes,com funções de login e logout,ver todos os shows, por tag, por categoria, adicionar e remover favoritos como também retorno de todos os favoritos</p>


<h1 align="center">:notebook: Funcionalidades</h1>

- [x] Tela de criação de usuario
- [x] Tela de login
- [x] Tela de Home  
- [x] Tela de Shows por Tags
- [x] Tela de Shows por Categorias
- [x] Tela unica de Show com função ADD/REMOVE favoritos
- [x] Tela para Mostrar todos os favoritos


<h1>:pushpin: Como Usar</h1>

<p>Criei um container no docker com Mysql para servi de banco de dados</p>

```
# Instale uma imagem do MYSQL
docker run --name {nome do banco} -e MYSQL_PASSWORD=root -p 3306:3306 -d mysql

Crie o banco desejado e depois ponha o seu nome nas configuraçoes 

Feito isso e so colocar as configurações no .env para o sequelize poder funcionar

exemplo do .Env

PORT="Sua porta "
NODE_ENV="Configuração sequelize"

#Database
DB_HOST="Host do Banco de dados"
DB_USER="Usuario do banco dados"
DB_PASS="Senha do banco de dados
DB_NAME="Nome do banco de dados"
DB_PORT="Porta do banco de dados"

#JWT
ACCESS_TOKEN_SECRET="segredo do jwt token"

Depois so usar yarn e por fim yarn start

#PARTE MOBILE

Já na parte Mobile vá até a pasta services no arquivo api.js e substitua o Base_url pelo ip do seu servidor 

Feito isso yarn para instalar e npx react-native run-android para rodar a aplicação no emulador 
```
