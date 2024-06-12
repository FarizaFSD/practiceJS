
let urunler = JSON.parse(localStorage.getItem('urunler')) || []
let kategoriler = JSON.parse(localStorage.getItem('kategoriler')) || []

window.onload = () => {
    listele()
    kategoriListele()
}

const cek = id => document.getElementById(id).value

const kaydet = () => {
    let urun = {
        id: Date.now(),
        ad: cek('ad'),
        aciklama: cek('aciklama'),
        fiyat: cek('fiyat'),
        gorsel: cek('gorsel'),
        kategori: cek('kategori')
    }

    urunler.push(urun);

    localStorage.setItem('urunler', JSON.stringify(urunler))

    listele()
}


const listele = () => {
    let alan = document.getElementById('alan');
    alan.innerHTML = '';

    urunler.forEach(element => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <th><input type="text" id="ad-${element.id}" value="${element.ad}"/></th>
            <th><input type="text" id="aciklama-${element.id}" value="${element.aciklama}"/></th>
            <th><input type="text" id="fiyat-${element.id}" value="${element.fiyat}"/></th>
            <th>
            <img src="${element.gorsel}" height="120"><br>
            <input type="text" id="gorsel-${element.id}" value="${element.gorsel}"/>
            </th>
            <th>
            <button type="button" class="btn btn-success" onclick="guncelle(${element.id})">Güncelle</button>
            <button type="button" class="btn btn-danger" onclick="sil(${element.id})">Sil</button>
            </th>
        `;

        alan.appendChild(tr)
    });
}

const guncelle = (id) => {
    let index = urunler.findIndex(element => element.id == id)

    urunler[index].ad = cek(`ad-${id}`)
    urunler[index].aciklama = cek(`aciklama-${id}`)
    urunler[index].fiyat = cek(`fiyat-${id}`)
    urunler[index].gorsel = cek(`gorsel-${id}`)

    localStorage.setItem('urunler', JSON.stringify(urunler))
    listele()
}

const sil = (id) => {
    urunler = urunler.filter(el => el.id != id)

    localStorage.setItem('urunler', JSON.stringify(urunler))
    listele()
}

const kategoriListele = () => {
    let kAlan = document.getElementById('kategori');
    kAlan.innerHTML = '';

    kategoriler.forEach(element => {
        let option = document.createElement('option')
        option.value = element.id
        option.innerHTML = element.ad

        kAlan.appendChild(option)
    })
}