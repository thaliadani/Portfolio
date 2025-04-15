function abrirMenu() {
    const botaoDoMenu = document.getElementById('btn-menu');
    let 
    const links = document.querySelector('.links');

    if(botaoDoMenu.onclick()){
        links.style.display = 'flex';
    } else {
        links.style.display = 'none';
    }
}

abrirMenu()

