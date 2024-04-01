document.addEventListener("DOMContentLoaded", () => {
    // Mendapatkan elemen dengan ID "joker" dan tombol dengan ID "btn" dari DOM
    const jokeContainer = document.getElementById("joker");
    const btn = document.getElementById("btn");

    // URL untuk mengambil lelucon dari API
    const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

    // Fungsi untuk mengambil dan menampilkan lelucon acak
    let getJoke = () => {
        // Menghapus kelas "fade" untuk menghilangkan efek transisi saat menampilkan lelucon baru
        jokeContainer.classList.remove("fade");
        
        // Mengambil data dari URL menggunakan Fetch API
        fetch(url)
            .then(data => data.json()) // Mengubah data ke dalam format JSON
            .then(item => {
                // Menetapkan teks lelucon dari data yang diterima ke dalam elemen dengan ID "joker"
                jokeContainer.textContent = item.joke;
                // Menambahkan kelas "fade" kembali untuk menerapkan efek transisi saat menampilkan lelucon baru
                jokeContainer.classList.add("fade");
            })
            .catch(error => console.error('Error fetching joke:', error)); // Tangani kesalahan fetch
    }

    // Menambahkan event listener ke tombol untuk mendapatkan lelucon acak saat diklik
    btn.addEventListener("click", getJoke);

    // Memanggil fungsi getJoke() saat halaman dimuat untuk menampilkan lelucon pertama kali
    getJoke();
});
