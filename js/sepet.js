let sepet = JSON.parse(localStorage.getItem('sepet')) || []
let urunler = JSON.parse(localStorage.getItem('urunler')) || []


window.onload = () => listele()

const listele = () => {
    let alan = document.getElementById('alan')
    let fiyat = document.getElementById('fiyat')
    alan.innerHTML = ''
    let toplam = 0

    sepet.forEach(element => {
        let tr = document.createElement('tr')


        let urun = urunler.find(data => data.id == element.id)

        toplam += urun.fiyat * element.adet

        tr.innerHTML = `
        <td><img height="100" src="${urun.gorsel}"></td>
        <td>${urun.ad}</td>
        <td>${urun.fiyat}</td>
        <td><input id="miktar-${element.id}" class="form-control" onchange="arttir(${element.id})" type="number" value="${element.adet}" /></td>
        <td><button onclick="kaldir(${element.id})" class="btn btn-danger">Kaldır</button></td>
        `
        alan.appendChild(tr)
    });

    fiyat.innerHTML = toplam
}

const kaldir = (id) => {
    sepet = sepet.filter(el => el.id != id)
    localStorage.setItem('sepet', JSON.stringify(sepet))
    uyari('urun kaldırıldı', 'danger')
    listele()
}

const arttir = (id) => {
    let miktar = document.getElementById(`miktar-${id}`).value;

    let index = sepet.findIndex(data => data.id == id)

    sepet[index].adet = miktar

    localStorage.setItem('sepet', JSON.stringify(sepet))
    uyari('adet arttırıldı', 'success')
    listele()
}

const uyari = (mesaj, durum) => {
    let sepetAlan = document.getElementById('sepetAlan');

    sepetAlan.innerHTML = `
    <div class="alert alert-${durum}" role="alert">
        ${mesaj}
    </div>
    `;
    setTimeout(function() {
        sepetAlan.innerHTML = ``;
    }, 1500); 
}