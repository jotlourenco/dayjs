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