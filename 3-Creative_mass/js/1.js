const mainImage = document.getElementById('mainGalleryImage');
const galleryCollection = document.getElementById('galleryCollection');

galleryCollection.addEventListener('click', function(event) {
    if (!event.target.src) return false;
    let tmp = mainImage.src; 
    mainImage.src = event.target.src;
    event.target.src = tmp;
});