const h1 = document.querySelector('h1');
h1.innerText += " From JavaScript";

//h1.hidden = true;

//const blink = document.querySelector('.blink');
//setInterval( () => blink.hidden = !blink.hidden , 1000);

//const clock = document.querySelector('.clock');
//setInterval( () => clock.innerText = new Date().toLocaleTimeString(), 100 );

//const countdown = document.querySelector('.countdown');
//const targetTime = new Date();
//targetTime.setSeconds(targetTime.getSeconds() + 10);
//setInterval( () =>
//    targetTime.innerText = targetTime.getSeconds() - new Date().getSeconds(), 1000);

const productsJSON =
`[
    {"name":"IPhoneX", "price":"1000"},
    {"name":"IPhone9", "price":"600"},
    {"name":"IPhone5", "price":"300"}
]`;

const productsContainer = document.querySelector('.product-list');
const products = JSON.parse(productsJSON);
for(const product of products){
    productsContainer.innerHTML +=
    `<div>${product.name}: ${product.price}</div>`;

}

function addProduct(ev){
    ev.preventDefault();
    const name = document.querySelector('.product-name').value;
    const price = document.querySelector('.product-price').value;
    if(name === '' || price === '')return;
    productsContainer.innerHTML +=
    `<div>${name}: ${price}</div>`;
}

document.querySelector('.btn-add').addEventListener('click', addProduct);
