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
