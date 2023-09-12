// ANIMAÇÃO
window.sr = ScrollReveal({ reset: true });

// HOME
sr.reveal('.introducao-anima', { 
    rotate: {x:0, y:20, z: 0},
    duration: 4000 
});

sr.reveal('.animacao-missao', { 
    rotate: {x: 10, y: 20, z: 0},
    duration:4000
});

sr.reveal('.inscricao-lista', { 
    rotate: {x:0, y:20, z: 0},
    duration:4000
});

sr.reveal('.animacao', { 
    rotate: {x:10, y:20, z: 0},
    duration:4000
});

sr.reveal('.animacao-h', { 
    rotate: {x: 0, y: 20, z: 0},
    duration:4000
});

// PAGINAS
sr.reveal('.animacao-introducao-pg', { 
    rotate: {x:0, y:20, z: 0},
    duration: 4000 
});

sr.reveal('.texto-introducao-pg', { 
    rotate: {x:0, y:0, z: 0},
    duration: 4000 
});

sr.reveal('.pg-img', { 
    rotate: {x:0, y:30, z: 0},
    duration: 4000 
});

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "../img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "../img/close_white_36dp.svg";
    }
}

//MENU C/ SUBMENU
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach((menuItem) => {
  const menuLink = menuItem.querySelector('.menu-link');
  const submenu = menuItem.querySelector('.submenu');
  const submenuColumn = document.querySelector('.submenu-column');

  menuLink.addEventListener('click', (event) => {
    event.preventDefault();

    const isOpen = menuItem.classList.contains('open');

    // Fecha o submenu anterior se estiver aberto
    const openMenuItem = document.querySelector('.menu-item.open');
    if (openMenuItem && openMenuItem !== menuItem) {
      openMenuItem.classList.remove('open');
      const openSubmenu = openMenuItem.querySelector('.submenu');
      openSubmenu.style.opacity = 0;
      setTimeout(() => {
        openSubmenu.style.display = 'none';
      }, 300);
    }

    menuItem.classList.toggle('open');

    if (!isOpen) {
      submenu.style.display = 'block';
      setTimeout(() => {
        submenu.style.opacity = 1;
      }, 10);
    } else {
      submenu.style.opacity = 0;
      setTimeout(() => {
        submenu.style.display = 'none';
      }, 300);
    }
  });
});

//CARROSSEL DE IMG
var carouselContainer = document.querySelector('td');

    function showPage(page) {
      var translateValue = -100 * (page - 1);
      carouselContainer.style.transform = 'translateX(' + translateValue + '%)';
    }

    showPage(1);