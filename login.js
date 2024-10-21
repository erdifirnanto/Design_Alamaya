<script>
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah form agar tidak dikirimkan secara langsung

        var password = document.getElementById('exampleInputPassword1').value;
        var passwordError = document.getElementById('passwordError');

        // Reset pesan error
        passwordError.textContent = '';

        // Contoh validasi password (misal: minimal 8 karakter)
        if (password.length < 8) {
            passwordError.textContent = 'Invalid password. Must be at least 8 characters long.';
        } else {
            // Jika password valid, form dapat dikirimkan
            // Lanjutkan logika pengiriman form atau login
            alert('Login successful');
            this.submit();
        }
    });
</script>