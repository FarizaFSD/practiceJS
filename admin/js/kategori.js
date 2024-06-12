let kategoriler = JSON.parse(localStorage.getItem('kategoriler')) || []

window.onload = function () {
    listele()
};

const kaydet = () => {
    let ad = document.getElementById('ad').value

    let kategori = {
        ad: ad,
        id: Date.now()
    }
    kategoriler.push(kategori)
    localStorage.setItem('kategoriler', JSON.stringify(kategoriler))

    listele()
    temizle()
}

const temizle = () =>{
    document.getElementById('ad').value = ""
}

const listele = () => {
    let alan = document.getElementById('alan')
    alan.innerHTML = ''

    kategoriler.forEach(element => {
        let tr = document.createElement('tr')
        tr.innerHTML = `
            <th>${element.id}</th>
            <th><input class="form-control" id="guncelleAd-${element.id}" value="${element.ad}"></th>
            <th>
            <button class="btn btn-success" type="button" onclick="guncelle(${element.id})">Güncelle</button>
            <button class="btn btn-danger" type="button" onclick="sil(${element.id})">Sil</button>
            </th>
        `;

        alan.appendChild(tr)
    });
}

const sil = (id) => {
    kategoriler = kategoriler.filter(data => data.id != id)

    localStorage.setItem('kategoriler', JSON.stringify(kategoriler))

    listele()
}

const guncelle = (id) => {
    let ad = document.getElementById(`guncelleAd-${id}`).value

    let index = kategoriler.findIndex(data => data.id == id)

    kategoriler[index].ad = ad

    localStorage.setItem('kategoriler', JSON.stringify(kategoriler))
    listele()
}