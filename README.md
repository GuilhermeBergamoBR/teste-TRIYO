# Nas duas pastas rode o comando npm install para instalar as dependências que utilizei no teste, criando assim a pasta node_modules

# Primeiro inicie o backend, rode npm start
# Como o banco de dados não está em um container é necessário que na sua máquina você tenha algum banco de dados(MySQL, PostgreSQL, sqlite ou Oracle) e é interessante criar um banco para rodar as tabelas do teste
# No arquivo .env troque o valor das variáveis de ambiente DB_CONNECTION(banco ex: pg, mysql, sqlite etc), DB_PORT(porta padrão em que o seu banco roda), DB_USER(usuário do banco, o padrão é root), DB_PASSWORD(senha do banco) e DB_DATABASE(nome do banco)
# Rode o comando adonis migration:run para criar as tabelas no banco que você acabou de criar
# Mais uma vez, como o banco é local e não me sobrou tempo para criar factories, será necessário popular as tabelas com registros para visualizá-los no Vue
# Para isso, com o auxílio do Postman, Insomnia, ou mesmo diretamente no banco de dados, crie (no mínimo) um registro na tabela customers(cliente) de acordo com as colunas suportadas da tabela, e (no mínimo) 2 registros na tabela dependents(dependentes) também de acordo com as colunas exigidas pela tabela.


# Pronto! Agora para o app Vue


# Rode npm run serve
# Pronto! 