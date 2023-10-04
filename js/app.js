const contenedorPeliculas = document.getElementById('contenedorPeliculas');
const btnAnterior = document.getElementById('Anterior');
const btnSiguiente = document.getElementById('Siguiente');
let pagina = 1;
btnAnterior.addEventListener('click',()=>{
    if(pagina > 1){
        pagina--;
    }
    ConexionApi();
})
btnSiguiente.addEventListener('click',()=>{
    if(pagina < 1000){
        pagina++;
    }
    ConexionApi();
})
const ConexionApi = async ()=>{
    const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${pagina}`)
    const datos = await respuesta.json();
    console.log(datos);
    let contenido ='';
    datos.results.forEach(Pelicula => {
        contenido += `
            <div class="card">
                <div class="imagen">
                    <img src="https://image.tmdb.org/t/p/w500/${Pelicula.poster_path}" alt="">
                </div>
                <div class="descripcion">
                    <h2 class="titulo">${Pelicula.title}</h2>
                    <a href="#" class="link--verMas">Ver Mas</a>
                    <a href="#" class="link--comprar">Comprar</a>
                </div>
            </div>
        `
    });
    contenedorPeliculas.innerHTML = contenido
}
ConexionApi();
// Ruta: https://image.tmdb.org/t/p/w500/${pelicula.poster_path}
// Script del Encabezado
const Encabezado = document.querySelector('.Encabezado');
window.addEventListener('scroll',()=>{
    if(window.scrollY > 50){
        Encabezado.classList.add('active');
    }else{
        Encabezado.classList.remove('active');
    }
});
// Efecto Parallax
const TituloEncabezado = document.querySelector('.Hero__titulo'),
    parrafoEncabezado=document.querySelector('.Hero__parrafo')


window.addEventListener('scroll',()=>{
    let ventanaScroll = window.scrollY;
    TituloEncabezado.style.transform = `translateY(${ventanaScroll / 1}%)`;
    parrafoEncabezado.style.transform = `translateY(${ventanaScroll / 0.6}%)`;
    // Camara.style.transform = `translateY(${ventanaScroll / 0.6}%)`;
    // Cinta.style.transform = `translateY(${ventanaScroll / 0.6}%)`;

})