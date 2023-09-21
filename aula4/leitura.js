
// "require" é uma função que o node (que o nosso ambiente) deixa usar, para puxar um codigo de algum outro lugar.
const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados);

const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log( typeof clienteEmString);

const objetoCliente = JSON.parse(clienteEmString);

console.log(objetoCliente);