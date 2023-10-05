// Efecto Parallax
const contenedorInfo = document.querySelector('.Principal__contenido');
window.addEventListener('scroll',()=>{
    let ventana = window.scrollY;
    contenedorInfo.style.transform = `translateY(-${ventana / 4}%)`
})
// Nvegacion
const Encabezado = document.querySelector('.Encabezado');
window.addEventListener('scroll',()=>{
    if(window.scrollY > 50){
        Encabezado.classList.add('active');
    }else{
        Encabezado.classList.remove('active');
    }
});
