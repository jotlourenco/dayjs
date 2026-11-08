### Exemplo completo com o Day.js

Vamos reunir tudo o que aprendemos em um programa pequeno, desde a criação do projeto até sua execução.

O **Day.js** é uma biblioteca JavaScript que facilita o trabalho com datas e horários. Com ela, podemos formatar datas, calcular intervalos, somar ou subtrair períodos e comparar datas, tarefas que podem ser trabalhosas utilizando apenas JavaScript puro.

#### Passo 1: Criar a pasta e o projeto

Primeiro, abra o terminal e execute os comandos:

```bash
mkdir exemplo-dayjs
cd exemplo-dayjs
npm init -y
```

Esses comandos:

- `mkdir exemplo-dayjs`: cria uma pasta chamada `exemplo-dayjs`.
- `cd exemplo-dayjs`: acessa a pasta criada.
- `npm init -y`: cria o arquivo `package.json`, responsável por armazenar as informações e configurações do projeto.

#### Passo 2: Instalar o Day.js

No terminal, execute:

```bash
npm install dayjs
```

Após a instalação, abra o arquivo `package.json`. Você encontrará o `dayjs` na lista de `dependencies` (dependências), acompanhado do número da versão instalada.

Isso significa que a biblioteca está instalada e disponível para ser utilizada no projeto.

#### Passo 3: Criar o arquivo index.js

Dentro da pasta do projeto, crie um arquivo chamado `index.js`.

Adicione o seguinte código:

```javascript
// Exemplo completo com o pacote dayjs
const dayjs = require('dayjs');

// Português do Brasil para nomes de dias e meses
require('dayjs/locale/pt-br');
dayjs.locale('pt-br');

// 1. A data de hoje, formatada de vários jeitos
const hoje = dayjs();

console.log('--- 1. Hoje ---');
console.log('Formato brasileiro:', hoje.format('DD/MM/YYYY'));
console.log('Por extenso:', hoje.format('dddd, D [de] MMMM [de] YYYY'));
console.log('Hora agora:', hoje.format('HH:mm'));

// 2. Quantos dias faltam para as férias?
const ferias = dayjs('2026-12-19');

// startOf('day') zera a hora, para contar dias inteiros do calendário
const diasParaFerias = ferias.diff(hoje.startOf('day'), 'day');

console.log('\n--- 2. Contagem regressiva ---');
console.log('Faltam', diasParaFerias, 'dias para as férias!');

// 3. Calcular a idade de alguém
const nascimento = dayjs('2009-03-15');
const idade = hoje.diff(nascimento, 'year');

console.log('\n--- 3. Idade ---');
console.log('Quem nasceu em 15/03/2009 tem', idade, 'anos.');

// 4. Somar e subtrair tempo
console.log('\n--- 4. Somar e subtrair ---');
console.log('Daqui a 30 dias:', hoje.add(30, 'day').format('DD/MM/YYYY'));
console.log('Há 1 semana:', hoje.subtract(1, 'week').format('DD/MM/YYYY'));
console.log('Daqui a 6 meses:', hoje.add(6, 'month').format('DD/MM/YYYY'));

// 5. Comparar datas
console.log('\n--- 5. Comparar datas ---');
console.log('As férias ainda não chegaram?', hoje.isBefore(ferias));
console.log('Hoje é depois do nascimento?', hoje.isAfter(nascimento));
```

#### Passo 4: Executar o programa

No terminal, dentro da pasta do projeto, execute:

```bash
node index.js
```

O programa apresentará uma saída semelhante à seguinte:

```text
--- 1. Hoje ---
Formato brasileiro: 06/11/2026
Por extenso: sexta-feira, 6 de novembro de 2026
Hora agora: 01:58

--- 2. Contagem regressiva ---
Faltam 43 dias para as férias!

--- 3. Idade ---
Quem nasceu em 15/03/2009 tem 17 anos.

--- 4. Somar e subtrair ---
Daqui a 30 dias: 06/12/2026
Há 1 semana: 30/10/2026
Daqui a 6 meses: 06/05/2027

--- 5. Comparar datas ---
As férias ainda não chegaram? true
Hoje é depois do nascimento? true
```

**Importante:** os valores apresentados são apenas exemplos. A data, o horário e os resultados dos cálculos mudarão conforme o momento em que o programa for executado.

---

### Entendendo o código, parte por parte

Vamos compreender as principais instruções utilizadas no programa.

**1. Importando a biblioteca**

```javascript
const dayjs = require('dayjs');
```

O `require('dayjs')` importa a biblioteca instalada pelo npm para dentro do programa.

É nesse momento que podemos utilizar os recursos que o pacote oferece.

**2. Criando objetos de data**

```javascript
const hoje = dayjs();

const ferias = dayjs('2026-12-19');
```

- `dayjs()`: cria um objeto com a data e a hora atuais.
- `dayjs('2026-12-19')`: cria um objeto representando uma data específica.

Observe que o formato utilizado para informar a data é `ANO-MÊS-DIA`.

**3. Formatando datas com format()**

```javascript
hoje.format('DD/MM/YYYY');
```

O método `format()` permite apresentar uma data em diferentes formatos.

| Código | Significado |
|---|---|
| `DD` | Dia com dois dígitos |
| `D` | Dia sem zero à esquerda |
| `MM` | Mês com dois dígitos |
| `MMMM` | Nome completo do mês |
| `YYYY` | Ano com quatro dígitos |
| `dddd` | Nome completo do dia da semana |
| `HH` | Hora no formato de 24 horas |
| `mm` | Minutos |

Também podemos utilizar colchetes para inserir textos fixos na formatação.

Exemplo:

```javascript
hoje.format('dddd, D [de] MMMM [de] YYYY');
```

Resultado:

```text
sexta-feira, 6 de novembro de 2026
```

**4. Calculando diferenças com diff()**

```javascript
const diasParaFerias = ferias.diff(hoje.startOf('day'), 'day');
```

O método `diff()` calcula a diferença entre duas datas.

Sua estrutura básica é:

```javascript
data1.diff(data2, 'unidade');
```

Algumas unidades disponíveis:

| Unidade | Significado |
|---|---|
| `'day'` | Dias |
| `'week'` | Semanas |
| `'month'` | Meses |
| `'year'` | Anos |
| `'hour'` | Horas |
| `'minute'` | Minutos |
| `'second'` | Segundos |

No exemplo, `startOf('day')` considera o início do dia atual, evitando que as horas e os minutos interfiram na contagem de dias inteiros.

**5. Somando e subtraindo tempo**

O Day.js também permite adicionar ou retirar períodos de uma data.

Adicionar 30 dias:

```javascript
hoje.add(30, 'day');
```

Subtrair uma semana:

```javascript
hoje.subtract(1, 'week');
```

Adicionar seis meses:

```javascript
hoje.add(6, 'month');
```

Imagine realizar esses cálculos manualmente, considerando meses com 28, 29, 30 ou 31 dias e anos bissextos!

**6. Comparando datas**

Podemos verificar se uma data acontece antes ou depois de outra.

```javascript
hoje.isBefore(ferias);
hoje.isAfter(nascimento);
```

Esses métodos retornam valores booleanos:

| Método | Significado |
|---|---|
| `isBefore()` | Verifica se uma data é anterior a outra |
| `isAfter()` | Verifica se uma data é posterior a outra |

Os resultados possíveis são:

- `true`: condição verdadeira.
- `false`: condição falsa.

Por exemplo:

```javascript
console.log(hoje.isBefore(ferias));
```

Se hoje for anterior à data das férias, o resultado será `true`.

---

### Conclusão

Neste exemplo, utilizamos uma biblioteca externa instalada pelo npm para facilitar operações com datas.

Conhecemos os seguintes recursos:

- `require()`: importa uma biblioteca.
- `dayjs()`: cria objetos de data.
- `format()`: formata datas e horários.
- `diff()`: calcula diferenças entre datas.
- `add()`: adiciona períodos.
- `subtract()`: subtrai períodos.
- `isBefore()`: compara datas verificando se uma é anterior à outra.
- `isAfter()`: compara datas verificando se uma é posterior à outra.

**O principal aprendizado:** o gerenciamento de pacotes permite utilizar funcionalidades desenvolvidas por outras pessoas, evitando que precisemos programar tudo do zero.
