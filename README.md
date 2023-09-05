# :mortar_board: Academy Help Desk

## :computer: Instalar e rodar localmente em sua máquina

Para instalar e rodar localmente você precisará instalar algumas dependêcias globais e locais

### Dependências globais

Você irá precisar dessas dependências globais:

- Node.js LTS >= v14
- MySQL Workbench >= v8 (Você pode baixar o MySQL sem o workbench, mas recomendo a baixar)
- Xampp ou Wamp (Pode ser qualquer servidor que tenha um serviço MySQL)
- (Recomendo também baixar o git, mas isso é opcional)

Para testar se foi feito a instalação do node.js copie e cole esse comando abaixo no cmd ou no powershell

```
node -v
```

Você também pode testar ser foi instalado o npm

```
npm -v
```

Se quiser testar também o git

```
git -v
```

### :octocat: Clonar projeto do github e instalar dependências locais

Para clonar o projeto você só precisa baixar o arquivo .zip ou você também pode clonar na linha de comando

```
git clone https://github.com/StivemGuimaraes/projeto-help-desk.git
```

Abrar o projeto e instale as dependências locais

Para instalar as dependências locais, você pode estar acessando os comandos no arquivo [install dependencias](./install%20dependencias)

Você também pode copiar e colar esses comandos abaixo

```
npm install --save body-parser connect-flash cors express express-handlebars express-session multer mysql2 passport passport-local socket.io
npm install --save-dev nodemon
```

### :file_cabinet: Configurar o banco de dados MySQL e rodar projeto

Para configurar o banco de dados, você precisa copiar e colar todo conteúdo do arquivo [db_academy_desk.sql](./db_academy_desk.sql)
Ativar o serviço MySQL no servidor, colar todo conteúdo no workbench e executar todas as linhas de codigo

Depois é só executar o projeto com o comando abaixo no cmd ou no powershell

```
npm start
```

Pronto, o projeto já deve estar ativo, agora só falta ir até seu navegador e digitar na url

```
localhost:8008
```

usuario é admin e senha é admin

## :notebook_with_decorative_cover: Sobre o projeto

Esse projeto foi feito para meu tcc, tivemos a ideia de fazer um help desk para escolas que precisam de ajuda na área da tecnologia da informação, muitas escolas estão indo para a área digital e algumas precisam de ajuda para entrar nessa área, no começo eu achei que não iremos conseguir fazer esse projeto, mas com tempo conseguimos terminar ele, foi uma experiência incrível que eu tive fazendo esse projeto, ganhei também conhecimento programando esse projeto que nunca irei esquecer.

## Contribuidores

[https://github.com/arthurluccas](https://github.com/arthurluccas) |
[https://github.com/RenatoLJacob](https://github.com/RenatoLJacob) |
[https://github.com/stivem-guimaraes](https://github.com/stivem-guimaraes) |
[https://github.com/WillianSousa21](https://github.com/WillianSousa21)
