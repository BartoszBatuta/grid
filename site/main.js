const items = document.querySelectorAll('.item');
let color = 0;

for(let i=0;i<items.length;i++){
    items[i].style.background = `rgb(${color},0 , 0)`;
    color+=11;
    console.log(color);
}