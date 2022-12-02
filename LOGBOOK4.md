# LOGBOOK4

## SEED LABS
### 2.1

* Ao executar o comando "printenv" e "env", como esperado, as variáveis globais foram imprimidas, para imprimir uma variável em particular coloca-se o nome da variavel depois do comando, por exemplo:

*$ printenv PWD*
*/home/seed/Desktop/git/l02g06*

* Os comandos "export" e "unset" são comandos em que podemos definir e apagar uma variável ambiente respetivamente, e que tal experimentamos:

* Ao usar "export" para mudar o valor da variavel PWD, tambem nos alterava o path no terminal.

* Ao utilizar " unset" a path retorna para a original. Exemplo:
*[11/11/21]seed@VM:~/Desktop$ export PWD="123"*
*[11/11/21]seed@VM:123$ unset PWD*
*[11/11/21]seed@VM:~/Desktop$*

### 2.2
1. Ao correr o executavel compilado pelo gcc obtemos a mesma informção de corremos o comando "printenv".
2. Obtivemos o mesmo resultado que em 1.
3. Como os ficheiros são iguais, o comando "diff -s" returnou "Files file_parent e file_child are identical" o que faz sentido visto as variaveis ambiente serem herdadas do pai para o filho.

### 2.3
1. Depois de compilado e corrido o programa não é imprimido nada na consola.
2. Alterando a linha indicada no ficheiro o programa retorna as variaveis ambiente.
3. Observando as diferenças nas duas linhas de código - **execve("/usr/bin/env", argv, NULL);** e **execve("/usr/bin/env", argv, environ);** - notamos que a função "execve ()" não herda as variaveis ambiente por default, isto é, a função tem um parametro para passar as variaveis ambiente.

### 2.4
* A funçaõ system() é programada de uma forma que usa "fork()" para criar o processo filho e é nesse processo que o comando shell é executado, como vimos na pergunta 2.2. As variáveis ambientais são herdadas do pai para o filho, logo o programa imprime-as. 

### 2.5
* Com este exercício, percebemos que um programa Set-UID não recebe todas as variaveis ambiente, que podemos comprovar correndo um script Set-UID e imprimindo todas as variaveis ambiente, verificamos que, por exemplo, a variavel *LC_LIBRARY_PATH* não foi herdada. 

* Estavamos à espera que todas as variaveis iriam ser herdadas, como mudamos as suas permissões para root faria sentido que todas as variáveis fossem herdadas visto *root* ser um **SuperUser**.


### 2.6
* O programa apenas corre o comando "ls".
* Para fazer testes, alteramos o programa para correr um outro programa previamente compilado, neste caso utilizamos o myprintenv, reparamos que atraves da função *system* podemos correr qualquer programa feito por nós, ou seja, podemos correr um programa malicioso para nos aproveitarmos nos do sistema.

## CTF
Como sugerido tentamos encontrar a versão do wordpress utilizado no website, que era a versão 5.8.1. De seguida procuramos os plug-ins usados que estavam no footer da pagina - Storefront e WooCommmerce. O proximo passo é encontrar o CVE, para isso procuramos no site https://cve.mitre.org com as keywords "WooCommmerce wordpress login" e obtivemos o CVE-2021-34646.

Para descobrir a segunda flag da semana já foi mais complicado. Primeiro procuramos o CVE no site https://www.exploit-db.com e encontramos um exploit já desenvolvido, infelizmente não tivemos sorte a correr o exploit, isto é, nenhum dos links funcionava - viemos a descobrir depois que era por estar a usar o link errado. Deixamos passar uns dias e procuramos outro exploit - https://github.com/motikan2010/CVE-2021-34646 - ao alterarmos a variável url para o link correto (http://ctf-fsi.fe.up.pt:5001) e mantivemos a variável userid = 1, depois de correr o codigo obtivemos 1 link - Autenticated URL (http://ctf-fsi.fe.up.pt:5001/?wcj_verify_email=eyJpZCI6IjEiLCJjb2RlIjoiNWM3YzViZDA5YmUzODVkNzQ3MjVmYWQyZTZkNmVmOWEifQ%3D%3D) - que permitiu entrar como admin no website e de seguida abrir o ficheiro com a flag.