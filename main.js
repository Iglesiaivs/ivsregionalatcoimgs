/**
 *  * Autor: jl_
  * ADSI - SENA
 * email: devluisluzardo@gmail.com
 * Fecha creacion : 18 - Nov - 2024
 * 
 *  desscripcion:
 * Barranquilla - Colombia
**/
document.addEventListener('DOMContentLoaded', () => {
    async function obtenerUrlsImagenes() {
        try {
            const response = await fetch('https://raw.githubusercontent.com/Iglesiaivs/ivsregionalatcoimgs/main/imagenes.json');
            const data = await response.json();

            const imageGallery = document.getElementById('image-gallery');

            if (imageGallery) {
                data.forEach((imagen, index) => {
                    const img = document.createElement('img');
                    img.src = imagen.url;
                    img.alt = `Imagen ${index + 1}`;
                    imageGallery.appendChild(img);
                });
            } else {
                console.error('Elemento con ID "image-gallery" no encontrado.');
            }
        } catch (error) {
            console.error('Error al obtener las imágenes:', error);
        }
    }

    obtenerUrlsImagenes();
});

