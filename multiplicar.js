    function formulario(){

}

// Criar elemento
let h1 = document.createElement ('h1');
let p = document.createElement ('p');

// Criar o nó de texto
let texto = document.createTextNode("Insira o seu nome")


//@@ Buscar elemento pai
let elemento_pai = document.body;







// Inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
elemento_pai.appendChild(h1);
// Anexar o nó de texto ao elemento h1
h1.appendChild(texto);