document.addEventListener("DOMContentLoaded", function() {
    const path = window.location.pathname;

    if (path.includes("Home.html")) {
        document.querySelector(".sidebar a[href='Home.html']").classList.add("active");
    } else if (path.includes("Profile.html")) {
        document.querySelector(".sidebar a[href='Profile.html']").classList.add("active");
    } else if (path.includes("About.html")) {
        document.querySelector(".sidebar a[href='About.html']").classList.add("active");
    }
});

// Ambil elemen pop-up dan tombol-tombolnya
const logoutPopup = document.getElementById("logoutPopup");
const logoutButton = document.querySelector(".btnlogout-popup");
const confirmLogout = document.getElementById("confirmLogout");
const cancelLogout = document.getElementById("cancelLogout");

// Tampilkan pop-up saat tombol logout ditekan
logoutButton.addEventListener("click", function () {
    logoutPopup.style.display = "flex";
});

// Jika pengguna memilih "Yes"
confirmLogout.addEventListener("click", function () {
    logoutPopup.style.display = "none";
    window.location.href = "index.html"; // Ganti dengan URL halaman login
});

// Jika pengguna memilih "No"
cancelLogout.addEventListener("click", function () {
    logoutPopup.style.display = "none"; // Tutup pop-up
});
