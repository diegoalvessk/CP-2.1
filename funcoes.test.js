const funcoes = require("./funcoes.js")

test('gasolina', () => {
  expect(funcoes.litrosGasolina(100000, "gasolina")).toBe(6);
});

test('parads', () => {
  expect(funcoes.paradas(passageiros = ["nao" , "nao" , "nao" , "nao" , "nao"], 10)).toBe(6);
});

test('parads', () => {
  expect(funcoes.paradas(passageiros = ["sim" , "sim" , "sim" , "nao" , "nao"], 10)).toBe(15);
});

test('parads', () => {
  expect(funcoes.paradas(passageiros = ["sim" , "sim" , "nao" , "nao" , "nao"], 10)).toBe(10);
});

