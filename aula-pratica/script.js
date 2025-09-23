//Manipulação de texto
document.getElementById("btnMostrar").addEventListener("click",function(){
    const valor = document.getElementById("entrada").value;
    const resultado = document.getElementById("resultado");

    const novoParagrafo = document.createElement("p");
    novoParagrafo.textContent = "voce digitou: " + valor;

    resultado.append(novoParagrafo);
});

document.getElementById("btnLimpar").addEventListener("click",function(){
    document.getElementById("resultado").innerHTML = "";
});

//Contador

let Contador = 0;

function atualizarContador() {
    document.getElementById("contador").textContent = Contador;
}

document.getElementById("btnMais").addEventListener("click",function() {
    Contador++;
    atualizarContador();
});

document.getElementById("btnMenos").addEventListener("click",function(){
    Contador--;
    atualizarContador();
})

document.getElementById("btnZerar").addEventListener("click",function(){
    Contador = 0;
    atualizarContador();
})