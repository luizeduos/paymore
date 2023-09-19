const btn = document.querySelector('.btn-darkMode');
const container = document.querySelector('.container');
const btnCarrinhoClass = document.querySelector('.carrinho');
const btnCarrinho = document.querySelector('#carrinho');
const body = document.querySelector('body');
const produtos = document.querySelector('.produtos');
const fa = document.querySelector('.fa-xmark');

btn.onclick = function() {
    this.classList.toggle('ativo');
    container.classList.toggle('ativo');
    btnCarrinhoClass.classList.toggle('ativo');
    body.classList.toggle('ativo')
    produtos.classList.toggle('ativo');
    fa.classList.toggle('ativo');
    var elements1 = document.querySelectorAll('.btnAddCarrinho');
    elements1.forEach(function(elementt) {
        elementt.classList.toggle('ativo');
    });
    var elements2 = document.querySelectorAll('.card');
    elements2.forEach(function(element) {
        element.classList.toggle('ativo');
    });
};


btnCarrinho.onclick = function() {
    btnCarrinhoClass.classList.toggle('aberto');
};

var count = 1;
document.getElementById("radio1").checked = true;

setInterval( function() {
    nextImage();
}, 5000);

function nextImage() {
    count++;
    if (count>4) {
        count = 1;
    };

    document.getElementById("radio"+count).checked = true
}

const classBtnCar = document.querySelectorAll('.c');
const txtP = document.querySelectorAll('.pP');
const icons = document.querySelectorAll('.fa-solid');
const prods = document.querySelector('.prodAdd');
const imgs = document.querySelectorAll('.img')
const idPs = document.querySelectorAll('.prod')
const cards = document.querySelectorAll('.card')
const valores = document.querySelectorAll('#valorProduto')
const h4s = document.querySelectorAll('.h4')

let total = 0;

classBtnCar.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const icon = icons[index];
        const img = imgs[index].src;
        const idP = idPs[index].id;
        const valor = parseFloat(valores[index].textContent);
        const h4 = h4s[index].textContent;
        
        btn.classList.toggle('adicionado');
        if (btn.classList.contains('adicionado')) {
            txtP[index].innerHTML = "Adicionado";
            icon.classList.remove('fa-circle-plus');
            icon.classList.add('fa-basket-shopping');
            prods.innerHTML += `<div class="prods ${idP}"><img src="${img}"><span class="nome">${h4}</span><span class="valor">${valor}</span></div>`;
            total += valor; // adiciona o valor ao total
        } else {
            txtP[index].innerHTML = "Carrinho";
            icon.classList.add('fa-circle-plus');
            icon.classList.remove('fa-basket-shopping');
            const prodToRemove = document.querySelector(`.prods.${idP}`);
            prodToRemove.parentNode.removeChild(prodToRemove);
            total -= valor; // subtrai o valor do total
        }
        
        console.log(total); // imprime o total no console
        atualizaTotal(total); // atualiza o total na tela
    });
});

function atualizaTotal(total) {
    const resultado = document.querySelector('.total');

    if (total == 0) {
        resultado.textContent = 'R$0,00';
    } else if (total >= 0) {
        let valorInteiro = Math.floor(total);
        let valorDecimal = Math.round((total - valorInteiro) * 100);
        resultado.textContent = 'R$' + valorInteiro + ',' + (valorDecimal < 10 ? '0' : '') + valorDecimal;
    }
}

document.querySelector('.fa-xmark').onclick = () => {
    btnCarrinhoClass.classList.remove('aberto');
}

function mostrarAlerta() {
    document.getElementById('alert').style.display='block';
    // Fecha o alerta após 5 segundos (3000 milissegundos)
    setTimeout(fecharAlerta, 3000);
}

function fecharAlerta() {
    document.getElementById('alert').style.display='none';
}

