function aparecerCadastro() {
    let a = document.getElementsByClassName("pedido")[0];
    let b = document.getElementsByClassName("entrega")[0];
    let c = document.getElementsByClassName("cadastro")[0];
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "grid";
}

function aparecerPedido() {
    let a = document.getElementsByClassName("cadastro")[0];
    let b = document.getElementsByClassName("pedido")[0];
    let c = document.getElementsByClassName("entrega")[0];
    a.style.display = "none";
    b.style.display = "grid";
    c.style.display = "none";
}

function aparecerEntrega() {
    let a = document.getElementsByClassName("pedido")[0];
    let b = document.getElementsByClassName("entrega")[0];
    let c = document.getElementsByClassName("cadastro")[0];
    a.style.display = "none";
    b.style.display = "grid";
    c.style.display = "none";
}