const btn = document.querySelector('button');


// btn.onclick = function() {
//     alert('Click');
// }


// btn.addEventListener('click', () => {
//     alert('Click');
// })


// btn.addEventListener('click', (e) => {
//     // console.log(e.target);
//     e.target.remove();
// })

console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.firstChild);
console.log(document.body.firstChildElement);
console.log(document.body.lastChild);
console.log(document.querySelector('#current').parentNode.parentNode);
console.log(document.querySelector('#current').parentElement);


console.log(document.querySelector('[data-current="3"]').nextSibling);

console.log(document.querySelector('[data-current="3"]').nextElementSibling);

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}