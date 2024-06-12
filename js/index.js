let kategoriler = JSON.parse(localStorage.getItem('kategoriler')) || []
let urunler = JSON.parse(localStorage.getItem('urunler')) || []
let sepet = JSON.parse(localStorage.getItem('sepet')) || []

window.onload = () => {
    kategoriList()
    urunList(0)
}

const sepeteEkle = (id) =>{
    let obje = {
        id: id,
        adet: 1
    }

    let kontrol = sepet.findIndex(data => data.id == id)

    console.log(kontrol)

    if(kontrol == -1){
        sepet.push(obje)
        localStorage.setItem('sepet', JSON.stringify(sepet))

        uyari('Ürün sepete Eklendi')
    }else{
        sepet[kontrol].adet += 1;
        uyari('Ürün adeti arttırıldı')
    }
}

const uyari = (mesaj) => {
    let sepetAlan = document.getElementById('sepetAlan');

    sepetAlan.innerHTML = `
    <div class="alert alert-success" role="alert">
        ${mesaj}
    </div>
    `;
    setTimeout(function() {
        sepetAlan.innerHTML = ``;
    }, 1500); 
}

const kategoriList = () => {
    let kategoriAlan = document.getElementById('kategoriAlan')

    kategoriler.forEach(element => {
        let li = document.createElement('li')
        li.innerHTML = element.ad
        li.classList = 'list-group-item'
        li.addEventListener('click', () => urunList(element.id));
        kategoriAlan.appendChild(li)
    });
}

const urunList = (deger) =>{
    let flitreli = urunler;
    if(deger != 0){
        flitreli = urunler.filter(data => data.kategori == deger)
    }

    let urunAlan = document.getElementById('urunAlan')
    urunAlan.innerHTML = ''

    flitreli.forEach(element =>{
        let div = document.createElement('div')
        div.classList = 'col-lg-4'

        div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img height="250" src="${element.gorsel}"
                class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.ad}</h5>
                <p class="card-text">${element.aciklama}</p>
                <p class="card-text"><small>${element.fiyat} ₺</small></p>
                
                <button type="button" onclick="sepeteEkle(${element.id})" class="btn btn-success">Sepete Ekle</button>
            </div>
        </div>
        `;

        urunAlan.appendChild(div)
    })
}


