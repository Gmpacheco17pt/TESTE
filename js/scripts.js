

// Função para exibir/ocultar o dropdown ao clicar no botão "SHOES"
document.getElementById('shoesBtn').addEventListener('click', function () {
    var dropdown = document.getElementById('shoesDropdown');
    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
    } else {
        dropdown.classList.add('show');
    }
});

document.getElementById('apparelBtn').addEventListener('click', function () {
    var dropdown = document.getElementById('apparelDropdown');
    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
    } else {
        dropdown.classList.add('show');
    }
});

// Fechar o dropdown se o usuário clicar fora dele
window.onclick = function (event) {
    if (!event.target.matches('.dropdown') && !event.target.matches('.dropdown-content')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


const dropdowns = document.querySelectorAll('.dropdown');


dropdowns.forEach((dropdown) => {

    const button = dropdown.querySelector('button');
    const dropdownContent = dropdown.querySelector('.dropdown-content');


    dropdownContent.style.width = `${button.offsetWidth}px`;
});










const buttons = document.querySelectorAll('.button-list button, .button-list3 button');

// Adiciona um evento de clique a cada botão
buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        const message = this.getAttribute('data-message');
        const pickupInfo = document.getElementById('pickup-info');
        pickupInfo.textContent = message ? message : '';
    });
});





document.querySelectorAll('.button-list button, .button-list3 button ').forEach(button => {
    button.addEventListener('click', function () {
        // Remover a classe 'selected' de todos os botões de tamanho
        document.querySelectorAll('.button-list button, .button-list3 button').forEach(btn => {
            btn.classList.remove('selected');
        });

        // Adicionar a classe 'selected' apenas ao botão clicado
        this.classList.add('selected');
    });
});

document.getElementById('wishlist-btn').addEventListener('click', function () {
    const shoeDetails = {
        name: document.querySelector('.text-column h1').textContent.trim(),
        price: document.querySelector('.text-column h3').textContent.trim(),
        size: getSize(),
        url: window.location.href // Armazena o URL atual da página
    }

    let wishlist = localStorage.getItem('wishlist');
    wishlist = wishlist ? JSON.parse(wishlist) : [];
    wishlist.push(shoeDetails);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    alert('Item added to wishlist!');
});

function getSize() {
    const selectedButton1 = document.querySelector('.button-list button.selected');
    const selectedButton2 = document.querySelector('.button-list2 button.selected');
    const selectedButton3 = document.querySelector('.button-list3 button.selected');

    if (selectedButton1) {
        return selectedButton1.textContent.trim();
    } else if (selectedButton2) {
        return selectedButton2.textContent.trim();
    } else if (selectedButton3) {
        return selectedButton3.textContent.trim();
    } else {
        return 'Not selected';
    }
}















