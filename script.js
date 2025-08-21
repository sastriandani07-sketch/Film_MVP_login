document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const messageDisplay = document.getElementById('message');
    const googleButton = document.querySelector('.btn-google');
    const forgotPasswordLink = document.querySelector('.forgot-password');
    const registerLink = document.querySelector('.register-link');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman formulir default

        const username = usernameInput.value;
        const password = passwordInput.value;

        // --- Simulasi otentikasi ---
        // Dalam aplikasi nyata, data ini akan dikirim ke server.
        if (username === 'user' && password === 'password123') {
            messageDisplay.textContent = 'Login berhasil! Selamat datang.';
            messageDisplay.className = 'message success';
            // Contoh pengalihan halaman setelah login berhasil
            // setTimeout(() => { window.location.href = 'dashboard.html'; }, 1500);
        } else {
            messageDisplay.textContent = 'Nama pengguna atau kata sandi salah.';
            messageDisplay.className = 'message error';
        }
    });

    googleButton.addEventListener('click', function() {
        // Logika untuk "Masuk dengan Google"
        // Ini akan melibatkan Google OAuth. Untuk saat ini, kita hanya menampilkan pesan.
        alert('Anda akan dialihkan ke halaman Masuk dengan Google.');
        // Di sini Anda akan menginisiasi alur otentikasi Google OAuth.
    });

    forgotPasswordLink.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah refresh halaman
        alert('Fitur Lupa Password sedang dalam pengembangan. Silakan hubungi admin.');
        // Di sini Anda bisa mengarahkan ke halaman lupa password atau menampilkan modal.
        // window.location.href = 'forgot_password.html';
    });

    registerLink.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah refresh halaman
        alert('Anda akan dialihkan ke halaman pendaftaran.');
        // Di sini Anda bisa mengarahkan ke halaman pendaftaran.
        // window.location.href = 'register.html';
    });
});