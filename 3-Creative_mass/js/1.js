/* Put it right after body */
/* Set id="mainGalleryImage" for '.gallery-main-image' */
/* And set id="galleryCollection" for '.gallery-images' */

const mainImage = document.getElementById('mainGalleryImage');
const galleryCollection = document.getElementById('galleryCollection');

galleryCollection.addEventListener('click', function(event) {
    if (!event.target.src) return false;
    mainImage.src = event.target.src;
});