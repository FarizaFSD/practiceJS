let uyeler = JSON.parse(localStorage.getItem("uyeler")) || [];

const kayitOl = () => {
  let name = document.getElementById("name").value;
  let ePosta = document.getElementById("kayitEmail").value;
  let password = document.getElementById("kayitPassword").value;

  let uye = {
    name: name,
    ePosta: ePosta,
    password: password,
  };

  uyeler.push(uye);

  localStorage.setItem("uyeler", JSON.stringify(uyeler));
  temizle();
};

const temizle = () => {
  document.getElementById("name").value = "";
  document.getElementById("kayitEmail").value = "";
  document.getElementById("kayitPassword").value = "";
};

const girisYap = () => {
  let ePosta = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let sonuc = uyeler.find(
    (uye) => uye.ePosta == ePosta && uye.password == password
  );

  if (sonuc) {
    sessionStorage.setItem('isLogin', 1);
    window.location.href = "admin/admin.html";
  } else {
    alert("Sifre veya eposta hatali");
  }
};
