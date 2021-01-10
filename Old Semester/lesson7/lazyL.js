const images = document.querySelectorAll("img[data-src]");

// moveButton.onclick = function() {
//    for ( var i=0; i < items.length; i++ ) {
//      items[i].classList.toggle('is-moved');
//    }
//  };

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }

    img.src = src;
    img.removeAttribute("data-src");

    
}




const imgOptions = {
    threshold: .5,
    rootMargin: "10px 10px 10px 10px"
};
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }   else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    });
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});

/*var moveButton = document.querySelector('.move-button');
var items = document.querySelectorAll('.grid-a .grid-item');*/

