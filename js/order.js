<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">


    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">

    <link rel="stylesheet" href="fontawesome/css/all.css">
	<script src="https://kit.fontawesome.com/b9a9bf6e53.js" crossorigin="anonymous"></script>


    <title>Toko Kue ----</title>
</head>
<body>
    <div class="animasi" id="animasi">
        <!-- vanta bird js -->
    </div>

    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Toko Kue Sarah</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Promo</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Menu</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Kontak</a>
                </li>
                </ul>
            </div>
        </div>
    </nav>
    
    <header id="header">
        <img src="" alt="">LOGO
        <h1>Toko Kue Sarah</h1>
        <p class="header-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloribus dolores sed est, architecto molestias?
        </p>
        <a href="">ORDER</a>
    </header>

    

    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="asset/promo/Promo1.jpeg" class="img-full" alt="...">
                <div class="carousel-caption d-md-block">
                    <h5>Promo 1</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="asset/promo/Promo2.jpeg" class="img-full" alt="...">
                <div class="carousel-caption d-md-block">
                    <h5>Promo 2</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="asset/promo/Promo3.jpeg" class="img-full" alt="...">
                <div class="carousel-caption d-md-block">
                    <h5>Promo 3</h5>  
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <!-- <div class="block">

    </div> -->

    <div class="search">
        <input type="text"><i class="fas fa-search"></i>
    </div>

    <div class="produk" id="produk">
        <!-- <div class="card" data-nama="">
            <div class="box1">
                <img class="img-full" src="asset/menu/Food1.jpg" alt="">
                <span>Rp. 50000</span>
            </div>
            <div class="box2">
                <h4>Lorem, ipsum.</h4>
                <div class="box3">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, veritatis voluptatibus. Laudantium deleniti suscipit molestiae nobis id ratione laboriosam ea?</p>
                    <span class="tambah" data-id="">ORDER</span>
                </div>
            </div>
        </div> -->
    </div>
    <div class="order">
        <h1>Order</h1>
        <p class="order-ket">Anda juga dapat memesan menu selain yang kami miliki. Silahkan masukkan permintaan menu anda pada kolom deskripsi.</p>
        <div class="order-container" >
            <label for="order-nama">Nama Lengkap :</label>
            <input type="text" name="nama" id="order-nama" class="order-input" placeholder="Masukkan Nama Anda" required>

            <label for="order-nama">No Telpon :</label>
            <input type="number" name="telp" id="order-telpon" class="order-input" placeholder="Masukkan Nomor Telepon Anda" required>

            <p class="daftar-order">Daftar Order :</p>
            <ol class="order-pilih">
                
            </ol>
            <span class="total-harga"></span>

            <label for="order-deskripsi" class="label">Deskripsi order:</label>
            <textarea name="desc" id="order-deskripsi" class="order-input" placeholder="Masukkan Deskripsi orderan Anda, atau jika anda memiliki permintaan tertentu, silahkan masukan disini" required></textarea>

            <label for="alamat" class="label">Alamat:</label>
            <textarea name="alamat" id="alamat" class="order-input" placeholder="Masukan Alamat Lengkap Anda untuk pengantaran katering." required></textarea>

            <p class="cek-input">Tambahkan item dan masukan semua data</p>
            <button type="submit" class="order-button" id="order-button">O R D E R</button>
        </div>
    </div>



    <div class="kontak">
		<h3>Hubungi Kami di :</h3>
		<div class="kontak-box">
			<div class="kontak-konten">
				<a href="https://wa.me/+62823-9907-8306?text=Hallo admin Toko Kue Sarah.\n" class="kontak-link">
					<img src="asset/png/wa.svg" alt="">
					<p class="wa">082399078306</p>
				</a>
			</div>
			<div class="kontak-konten">
				<a href="" class="kontak-link">
					<img src="asset/png/ig.svg" alt="">
					<p class="ig">IG</p>
				</a>
			</div>
			<div class="kontak-konten">
				<a href="tel:082399078306" class="kontak-link">
					<img src="asset/png/telp.svg" alt="">
					<p class="telp">082399078306</p>
				</a>
			</div>
		</div>
		<div class="lokasi-konten">
			<a href="" class="lokasi-link">
				<i class="fas fa-map-marker-alt"></i>
				<p>Alamat</p>
			</a>
		</div>

		<div class="footer-konten">
			<div class="box">
				<h4>Tentang Kami</h4>
				<p>Toko Kue Sarah. ............... </p>
			</div>
			<div class="box">
				<h4>Jam Layanan :</h4>
				<p>Setiap Hari, 06.00 - 22.00 WIT <br>Kecuali Minggu (Libur)</p>
			</div>
		</div>
	</div>

    <footer>

    </footer>







    <script src="js/order.js"></script>
    <script src="bootstrap/js/bootstrap.bundle.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"></script>
    
    <script>
        VANTA.BIRDS({
        el: "#animasi",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00, 
        backgroundAlpha: 0.00,
        wingSpan: 40.00,
        speedLimit: 10.00
        })
    </script>

    <script>
        let orderArray = []

        window.addEventListener('load', function(e) {
            daftarOrder()
        })

        window.addEventListener('click', function(e){
            if (e.target.matches('.tambah')) {
                tambahOrder(e.target)
                daftarOrder()
                hitungTotal()
            }
            else if (e.target.matches('.fa-trash')) {
                hapusItem(e.target)
                daftarOrder()
                hitungTotal()
            }
            else if (e.target.matches('.order-button')){
                cekIsi()
            }
        })

        window.addEventListener('change', function(e){
            if (e.target.matches('.jumlah-item')){
                gantiNilai(e.target)
                jikaKosong(e.target)
            }
        })

        window.addEventListener('keyup', function(e){
            if(e.target.matches('.order-input')){
                jikaKosong(e.target)
            }
            else if (e.target.matches('.jumlah-item')){
                gantiNilai(e.target)
                jikaKosong(e.target)
                console.info('key up')
            }
        })
    </script>
</body>
</html>
