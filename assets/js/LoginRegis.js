const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link')
const btnPopup = document.querySelector('.btnlogin-popup')
const iconclose = document.querySelector('.icon-close')

registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconclose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

document.getElementById("loginform").addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah pengiriman form default

    // Ambil nilai email dan password
    const email = document.getElementById("emaillogin").value.trim();
    const password = document.getElementById("passwordlogin").value.trim();

    // Validasi input
    if (email === "" || password === "") {
        
        return;
    }

    // Cek apakah email dan password sesuai (contoh validasi sederhana)
    if (email === "rubin@gmail.com" && password === "123456") {
    
        window.location.href = "Home.html"; // Ganti dengan URL file halaman utama
    } else {
        alert("Email atau password salah!");
    }
});

document.getElementById("regisform").addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah pengiriman form default

    // Ambil nilai input dari form
    const username = document.getElementById("usernameregis").value.trim();
    const email = document.getElementById("emailregis").value.trim();
    const password = document.getElementById("passwordregis").value.trim();
    const termsCheckbox = document.getElementById("termscheckbox").checked;

    // Validasi input
    if (username === "" || email === "" || password === "") {
        alert("Semua data harus diisi!");
        return;
    }

    if (!termsCheckbox) {
        alert("Anda harus menyetujui syarat dan ketentuan!");
        return;
    }

    // Simpan data pengguna di localStorage (untuk simulasi)
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registrasi berhasil! Silakan login.");
    window.location.href = "1.HomeLoginRegis.html"; // Kembali ke halaman login
});
