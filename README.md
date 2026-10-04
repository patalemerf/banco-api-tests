# Banco API Tests

Projeto de automação de testes de API desenvolvido em JavaScript, com
foco na validação dos principais fluxos de uma API bancária.

## Objetivo

Automatizar testes de endpoints da API, verificando respostas, regras de
negócio, autenticação e comportamento esperado diante de diferentes
entradas.

## Tecnologias utilizadas

-   **JavaScript**
-   **Node.js**
-   **Mocha** --- execução e organização dos testes
-   **Chai** --- asserções
-   **Supertest** --- requisições HTTP
-   **Mochawesome** --- geração de relatórios
-   **dotenv** --- leitura de variáveis de ambiente

## Estrutura do projeto

``` text
banco-api-tests/
├── fixtures/
├── helpers/
├── test/
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

As pastas `fixtures`, `helpers` e `test` organizam os recursos e os
testes do projeto. Ajuste esta descrição caso a organização interna do
seu repositório seja diferente.

## Pré-requisitos

-   Node.js e npm instalados
-   API bancária em execução
-   URL base da API configurada no ambiente

## Instalação

Clone o repositório:

``` bash
git clone https://github.com/patalemerf/banco-api-tests.git
cd banco-api-tests
```

Instale as dependências:

``` bash
npm install
```

## Configuração

Crie um arquivo `.env` na raiz do projeto e informe a URL da API:

``` env
BASE_URL=http://localhost:3000
```

Substitua o endereço pela URL correspondente ao ambiente em que a API
está rodando.

Não versione informações sensíveis. Mantenha o arquivo `.env` fora do
Git e, se necessário, disponibilize um `.env.example` apenas com os
nomes das variáveis e valores ilustrativos.

## Executando os testes

Para executar a suíte:

``` bash
npm test
```

O comando utiliza o Mocha para executar os arquivos de teste localizados
em `test/` e o Mochawesome como reporter.

## Relatórios

Após a execução, o Mochawesome pode gerar os arquivos de relatório no
diretório `mochawesome-report/`, incluindo:

-   `mochawesome.html` --- relatório visual que pode ser aberto no
    navegador
-   `mochawesome.json` --- dados do relatório em JSON

Os arquivos são gerados conforme a configuração do reporter e o
resultado da execução.

## Cenários cobertos

Os testes do projeto contemplam fluxos como:

-   **Login:** validação do acesso com credenciais e do token retornado.
-   **Transferências:** validação da criação de transferências e de
    regras de valor mínimo.
-   **Consulta por ID:** verificação dos dados de uma transferência
    específica.
-   **Paginação:** validação dos parâmetros de paginação e dos dados
    retornados.

Os cenários específicos e as regras esperadas devem acompanhar a
implementação atual da API e dos testes.

## Aprendizados e objetivos de qualidade

O projeto permite praticar:

-   Automação de testes de API
-   Validação de status HTTP, corpo da resposta e tipos de dados
-   Verificação de regras de negócio
-   Uso de variáveis de ambiente
-   Organização de testes automatizados
-   Geração e análise de relatórios
