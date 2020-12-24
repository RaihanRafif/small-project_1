var slideIndex = 1;

function f_mainpage() {
    showDivs(slideIndex);
}

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

var data_item = [{
        foto: "images/BAJU_KEMEJA_PRIA_SLIM_FIT_LENGAN_PANJANG___KEMEJA_COWOK_KERJ.jpg.webp",
        content: "Kemeja Pria / SlimFit ",
        harga: 20,
        diskon: 3,
        desc: ""
    },
    {
        foto: "images/4842 1.png",
        content: "Kemeja Pria / Merah",
        harga: 15,
        diskon: 2,
        desc: ""
    },
    {
        foto: "images/download (5).jpg",
        content: "Kemeja Pria / Batik",
        harga: 19,
        diskon: 4,
        desc: ""
    },

]

var foto_product = document.getElementById("foto_product");
var nama_barang = document.getElementById('nama_barang');
var harga_diskon = document.getElementById('harga_diskon');
var harga_barang = document.getElementById('harga_barang');

var slide_item = 0;

function item_menu() {
    show(slide_item);
}


function scrl_item(n) {
    show(slide_item += n);
}

function show(n) {
    var i;
    var x = data_item.length - 1;
    if (n > x) { slide_item = 0 }
    if (n < 0) { slide_item = x }
    foto_product.src = data_item[slide_item].foto;
    nama_barang.innerHTML = data_item[slide_item].content;
    harga_diskon.innerHTML = data_item[slide_item].harga - (data_item[x].harga * data_item[x].diskon / 100);
    harga_barang.innerHTML = '$' + data_item[slide_item].harga;
    console.log(slide_item)
}