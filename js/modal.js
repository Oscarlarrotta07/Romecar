/*let imagenes = document.querySelectorAll('.gallery__img');
let texto = document.querySelectorAll('.gallery__txt');
let modal = document.querySelector('#modal');
let img = document.querySelector('#modal__img');
let boton = document.querySelector('#modal__boton');

for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener('click', function(e) {
        modal.classList.toggle("modal--open");
        let src = e.target.src;
        img.setAttribute("src", src);
    });
};
boton.addEventListener('click', function() {
    modal.classList.toggle("modal--open");
});*/

let imagenes = document.querySelectorAll('.gallery__figure');
let modal = document.querySelector('#modal__img');
let texto = document.querySelector('#modal__txt');
let modal1 = document.querySelector('.modal');
let boton = document.querySelector('.modal__boton');
imagenes.forEach(element => {
    element.addEventListener('click', function() {
        let txt = element.querySelector('.gallery__txt');
        let img = element.querySelector('.gallery__img');
        let src = img.getAttribute("src");
        let contenido = txt.innerHTML;
        modal.setAttribute("src", src);
        texto.innerHTML = contenido;

        modal1.classList.add("modal--open");

    })


});
boton.addEventListener('click', function() {
    modal1.classList.remove("modal--open");

});