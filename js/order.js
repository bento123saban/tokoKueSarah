const data = [
    {
        ID : 1,
        nama : "Menu Pertama",
        img : "images (2) (1).jpeg",
        deskripsi : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur maxime assumenda et eveniet dolorem harum, asperiores optio nam debitis odio libero quam nostrum possimus. Velit deleniti cumque voluptate quod eum?",
        harga : 10000
    },
    {
        ID : 2,
        nama : "Menu Kedua",
        img : "images (2) (2).jpeg",
        deskripsi : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur maxime assumenda et eveniet dolorem harum, asperiores optio nam debitis odio libero quam nostrum possimus. Velit deleniti cumque voluptate quod eum?",
        harga : 20000
    },
    {
        ID : 3,
        nama : "Menu Ketiga",
        img : "images (2) (3).jpeg",
        deskripsi : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur maxime assumenda et eveniet dolorem harum, asperiores optio nam debitis odio libero quam nostrum possimus. Velit deleniti cumque voluptate quod eum?",
        harga : 30000
    },
    {
        ID : 4,
        nama : "Menu Keempat",
        img : "images (2) (4).jpeg",
        deskripsi : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur maxime assumenda et eveniet dolorem harum, asperiores optio nam debitis odio libero quam nostrum possimus. Velit deleniti cumque voluptate quod eum?",
        harga : 40000
    },
    {
        ID : 5,
        nama : "Menu Kelima",
        img : "images (2) (5).jpeg",
        deskripsi : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur maxime assumenda et eveniet dolorem harum, asperiores optio nam debitis odio libero quam nostrum possimus. Velit deleniti cumque voluptate quod eum?",
        harga : 50000
    },
    {
        ID : 6,
        nama : "Menu Keenam",
        img : "images (2) (11).jpeg",
        deskripsi : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur maxime assumenda et eveniet dolorem harum, asperiores optio nam debitis odio libero quam nostrum possimus. Velit deleniti cumque voluptate quod eum?",
        harga : 60000
    },
    {
        ID : 7,
        nama : "Menu Ketujuh",
        img : "images (2) (7).jpeg",
        deskripsi : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur maxime assumenda et eveniet dolorem harum, asperiores optio nam debitis odio libero quam nostrum possimus. Velit deleniti cumque voluptate quod eum?",
        harga : 70000
    },
    {
        ID : 8,
        nama : "Menu Kedelapan",
        img : "images (2) (8).jpeg",
        deskripsi : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur maxime assumenda et eveniet dolorem harum, asperiores optio nam debitis odio libero quam nostrum possimus. Velit deleniti cumque voluptate quod eum?",
        harga : 80000
    },
    {
        ID : 9,
        nama : "Menu Kesembilan",
        img : "images (2) (9).jpeg",
        deskripsi : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur maxime assumenda et eveniet dolorem harum, asperiores optio nam debitis odio libero quam nostrum possimus. Velit deleniti cumque voluptate quod eum?",
        harga : 90000
    },
    {
        ID : 10,
        nama : "Menu Kesepuluh",
        img : "images (2) (10).jpeg",
        deskripsi : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur maxime assumenda et eveniet dolorem harum, asperiores optio nam debitis odio libero quam nostrum possimus. Velit deleniti cumque voluptate quod eum?",
        harga : 100000
    }
]

function tampilData(array) {
    let html = ''
    array.forEach(menu => {
        html += `
        <div class="card" data-nama="${menu.nama}">
            <div class="box1">
                <img class="img-full" src="asset/menu/${menu.img}" alt="">
                <span>Rp. ${menu.harga}</span>
            </div>
            <div class="box2">
                <h4>${menu.nama}</h4>
                <div class="box3">
                    <p>${menu.deskripsi}</p>
                    <span class="tambah" data-id="${menu.ID}">ORDER</span>
                </div>
            </div>
        </div>
        `
    })
    return html
}

document.querySelector('#produk').innerHTML = tampilData(data)



function daftarOrder() // menyusun daftar item yang telah diorder
{
    let daftar = '' // menampung hasil dari daftar order
    if (orderArray.length == 0 ) // jika orderArray kosong, panjang = 0, maka
    { 
        daftar = 
        `
            <p class="no-item">Belum ada item yang diorder</p> 
        ` // daftar order kosong
    }
    else// tapi, jika daftar order tidak kosong, maka
    { 
        orderArray.forEach(function(item){
            let html = `
                <div class="order-item" data-id="${item.ID}">
                    <li>${item.nama}</li>
                    <input type="number" class="jumlah-item order-input" value="${item.jumlah}" required>
                    <i class="fas fa-trash"></i>
                </div>
            `
            daftar += html
        })
    }
    return document.querySelector('.order-pilih').innerHTML = daftar // mengembalikan hasil dari daftar order menjadi HTML dari kelas order-pilih
}

function hitungTotal() // menghitung total bayar
{
    console.log('hitung')
    let total = 0 // varibal menampung hasil hitung total bayar
    orderArray.map(item => { // perulangan untuk setiap item dalam daftar order
        total += parseFloat(item.harga) * parseFloat(item.jumlah) // mengalikan harga dari item 
    })
    document.querySelector('.total-harga').innerHTML = 'Total Harga : Rp. ' + total // mengembalikan/menampilkan hasil hitung pada element total harga
}

// mendapatkan data dari item dalam array, dengan parameter id sebagai id yang akan dicari dan parameter array sebagai array tempat mengambil data


function tambahOrder(element) {
    let ID = element.getAttribute('data-id') //mengambil ID item
    let parameter = 0 //parameter ; jika 0 beluk ditambahkan, jika 1 sudah ditambahkan
    orderArray.forEach( index => { //perulangan untuk mengecek item sudah ditambahkan atau belum
        if (index.ID == ID) {
            // index.jumlah = parseFloat(index.jumlah) + 1
            parameter = 1 // jika sudah ditambahakan parameter menjadi (1)
            return ''// hentikan proses
        }
    }) //jika item belum ditambahkan (param = 0), ambil data item dara variabel simpan data (buketData atau ritelData)
    if(parameter == 0) //jika item belum ditambahkan (param = 0), ambil data item dara variabel simpan data (buketData atau ritelData)
    {
        const i = data.findIndex( item => item.ID == ID)
        let  item = data[i] // variabel Objek untuk menampung data dari item yang ditambhakan
        item.jumlah = 1;
        orderArray.push(item)
    }
    tambahSukses()
}

var suksesInterval = ''
function tambahSukses() {
    let hitung = 6
    const suksesTambah = document.querySelector("#tambah-sukses")

    if (suksesTambah.classList.contains('add')) {
        clearInterval(suksesInterval)
        suksesTambah.classList.remove('add')
        suksesTambah.classList.add('add')
        suksesInterval = setInterval(() => {
            hit()
        }, 1000);
    } else {
        suksesTambah.classList.add('add')
        suksesInterval = setInterval(() => {
            hit()
        }, 1000);
    }
    
    function hit() {
        hitung--
        if (hitung == 0) {
            clearInterval(suksesInterval)
            suksesTambah.classList.remove('add')
        }
        console.log('hitung', hitung)
    }
}



function hapusItem(element){
    const ID = element.parentElement.getAttribute('data-id')
    let i = orderArray.findIndex( item => item.ID == ID)
    orderArray.splice(i, 1)
}


function gantiNilai(element){
    const ID = element.parentElement.getAttribute('data-id')
    let i = orderArray.findIndex(index => index.ID == ID)
    let value = parseFloat(element.value)
    if (value > 0) {
        orderArray[i].jumlah = value
    } else {
        element.value = ''
        orderArray[i].jumlah = 0
    }
    hitungTotal()
}

function jikaKosong(element) {
    if (element.value == '') {
        element.style.borderColor = '#123'
    } else {
        element.style.borderColor = ''
    }
}

function cekIsi() {
    let parameter = 0
    document.querySelectorAll('.order-input').forEach(function (item) {
        if (item.value == '') {
            parameter = 1
            item.style.borderColor = '#123'
        }
    })
    if (orderArray.length == 0) {
        parameter = 1
    }
    if(parameter == 0){
        let konfirmasi = confirm('Anda akan dialihkan ke WhatsApp. Segera kirim text pesan yang tertera untuk mengkonfirmasi orderan anda !')
        if (konfirmasi) {
            order()
        }
    }
}

function order(){
    const nama = document.querySelector('#order-nama').value
    const telp = document.querySelector('#order-telpon').value
    const deskripsi = document.querySelector('#order-deskripsi').value
    const alamat = document.querySelector('#alamat').value
    
    let orderan = ''
    orderArray.forEach(function(item){
        orderan += `${item.nama} (${item.jumlah} Item).\n`
    })
    let total = 0 // varibal menampung hasil hitung total bayar
    orderArray.map(item => { // perulangan untuk setiap item dalam daftar order
        total += parseFloat(item.harga) * parseFloat(item.jumlah) // mengalikan harga dari item 
    });

    let dataWA = `Order Baru !! - ${new Date()}\n\n${nama} - ${telp}\n\n${orderan}\nTotal : Rp. ${total}\n\nDeskripsi : ${deskripsi}\n\nAlamat :\n${alamat}
    `
    const encode = encodeURI(dataWA)
    const linkWA = `https://wa.me/+6282399078306?text=${encode}`
    console.info(linkWA)
    console.info(dataWA)
    location.href = linkWA
}


