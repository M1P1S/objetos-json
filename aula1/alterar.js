const pessoa = {
    nome: "Luma",
    Profissao: "Engenheira",
};

console.log(pessoa.nome);

console.log(pessoa.telefone);

pessoa.telefone = "11 22223333444";

console.log(pessoa.telefone);

pessoa.nome = "Luma Silva";

console.log(pessoa);


//Não podemos alterar uma constante, como exemplificado abaixo.
// const novaPessoa = {
//     nome: "Pedro",
// };

// pessoa = novaPessoa;

______________

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
        nome:"Saruman",
        classe: "mago"
    },
    status: "desaparecido"
}

delete objPersonagem.aliado;

console.log(objPersonagem.aliado)