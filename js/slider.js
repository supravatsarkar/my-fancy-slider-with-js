const images = [
    'images/fruit-1.jpg',
    'images/fruit-2.jpg',
    'images/fruit-3.jpg',
    'images/fruit-4.jpg',
    'images/fruit-5.jpg',
    'images/fruit-6.jpg',
    'images/fruit-7.jpg'
]

let imgIndex = 0;
setInterval(() => {
    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    imgUrl = images[imgIndex];
    console.log(imgUrl);
    imgIndex++;
}, 1000)