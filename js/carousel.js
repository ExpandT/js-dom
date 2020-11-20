const images = [
    'img/squad.png',
    'img/squadofgods.jpg'
];

let current = 0;
function slide(){
    current = ++current < images.length -1 ? 0 : current;
}
setInterval(slide, 3000);

function back(){
    current = --current < 0 ? images.length -1 : current;
     showSlide(current);

}
document.querySelector('.carousel back').addEventListener('click', back);
function showSlide(awf){
    document.querySelector('.carousel img').src = images[awf];
}
