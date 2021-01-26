const productname = document.querySelector('#product-name');
const productcp = document.querySelector('#product-cp');
const productsp = document.querySelector('#product-sp');

// create elements and render

function renderShampoo(doc) {

    let name = document.createElement('span');
    let cp = document.createElement('span');
    let sp = document.createElement('span');




    name.textContent = doc.data().name;
    cp.textContent = doc.data().cp;
    sp.textContent = doc.data().sp;




    productname.appendChild(name);
    productcp.appendChild(cp);
    productsp.appendChild(sp);




}

$('.js-shampoo').on('click', function(e) {
    db.collection('Herbal Shampoo').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {

            renderShampoo(doc);

        })

    })


});