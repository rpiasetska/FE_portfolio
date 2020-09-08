const mainImage = document.getElementById('mainGalleryImage');
const galleryCollection = document.getElementById('galleryCollection');

galleryCollection.addEventListener('click', function(event) {
    if (!event.target.src) return false;
    mainImage.src = event.target.src;
});