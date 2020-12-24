function btn_1_eksternal(){
    document.getElementById("demo").innerHTML="pagi";
    document.getElementById("demo").style.color="green";
}
function btn_exercise_2(){
    document.getElementById("exr_2_1").innerHTML="Ini Tugas 2 JS";
    document.getElementById("btn_2").style.display="none";
}

function hasilPerhitungan_lingkaran(form){
    var r=form.jari_lingkaran.value;
    if (r==0){
        alert ("Jari-Jari gak mungkin 0 woy!");
    }else{
        var luas_lingkaran=r*r*3.14;
    }
    document.getElementById("hasilPerhitungan_lingkaran").innerHTML=luas_lingkaran;
}
function hasilPerhitungan_persegi(form){
    var s=form.sisi_persegi.value;
    if (s==0){
        alert ("sisi gak mungkin 0 woy!");
    }else{
        var luas_persegi=s*s;
    }
    document.getElementById("hasilPerhitungan_persegi").innerHTML=luas_persegi;
}

function hasilPerhitungan_segitiga(form){
    var alas=form.alas_segitiga.value;
    var tinggi=form.tinggi_segitiga.value;
    if(alas==0 || tinggi==0 ){
        alert ("Alas dan Tinggi gak mungkin 0 woy!");
    }else{
        var luas_segitiga=alas*tinggi/2;
    }   
    document.getElementById("hasilPerhitungan_segitiga").innerHTML=luas_segitiga;
}

var animal = {
    tipe :"melata",
    jumlah_kaki : 0,
    nama : "ular",
    jenis_makanan : "karnivora",
    nama_latin : "Serpentes"
}
function ucapan() {
    var today = new Date();
    var time = today.getHours() ;
    if (time>=7 && time<=12){
        var waktu="Pagi";
    }
    else if(time>12 && time<=18){
        var waktu="siang";
    }
    document.getElementById("selamat").innerHTML=waktu;
}

function v_balok(panjang,lebar,tinggi){
    var panjang=document.getElementById("panjang").value
    var lebar=document.getElementById("lebar").value
    var tinggi=document.getElementById("tinggi").value
    var volume_balok=parseInt(panjang)*parseInt(lebar)*parseInt(tinggi);
    document.getElementById("hasilPerhitungan_balok").innerHTML=volume_balok;
}
function lp_balok(panjang,lebar,tinggi){
    var panjang=document.getElementById("panjang").value
    var lebar=document.getElementById("lebar").value
    var tinggi=document.getElementById("tinggi").value
    var LP_balok=2*(parseInt(panjang)*parseInt(lebar)+parseInt(panjang)*parseInt(tinggi)+parseInt(tinggi)*parseInt(lebar));
    document.getElementById("hasilPerhitunganLP_balok").innerHTML=LP_balok;
}
function lp_tabung(tinggi_tb,r_tb){
    var tinggi_tb=document.getElementById("tinggi_tb").value
    var r_tb=document.getElementById("r_tb").value
    var LP_tabung=3.14*r_tb*r_tb*2+2*3.14*r_tb*tinggi_tb;
    document.getElementById("hasilPerhitunganLP_tabung").innerHTML=LP_tabung;
}

function v_tabung(tinggi_tb,r_tb){
    var tinggi_tb=document.getElementById("tinggi_tb").value
    var r_tb=document.getElementById("r_tb").value
    var v_tabung=3.14*r_tb*r_tb*tinggi_tb;
    document.getElementById("hasilPerhitungan_tabung").innerHTML=v_tabung;
}
function btn_calcu(){
    var x = document.getElementById("kalku");
    if (x.style.display === "none") {
        x.style.display = "flex";
    }  else {
        x.style.display = "none";
    }
}
function cek_nilai(form){
    var nilai=parseInt(form.nilai.value);
    if(nilai<= 100 && nilai>=85 ){
        alert ("nilai mu A");
    } else if(nilai<= 84 && nilai>=70 ){
        alert ("nilai mu B");
    }else if(nilai<= 69 && nilai>=60 ){
        alert ("nilai mu C");
    }else if(nilai<= 59 && nilai>=40 ){
        alert ("nilai mu D");
    }else if(nilai<= 39 && nilai>=30 ){
        alert ("nilai mu E");
    }else if(nilai<=29){
        alert ("nilai mu F");
    }
    switch(true) {
        case (nilai<= 100 && nilai>=85):
            alert("luar biasa");
            break;
        case (nilai<= 84 && nilai>=60):
            alert("mulai B aja");
            break;
        default:
            alert("belajar bos");
        }
}
var perusahaan= [
    "Apple",
    "Microsoft",
    "Google",
    "Facebook",
    "Spotify",
    "Amazon",
    "Netflix", 
    "Slack"
    ]
// nomor 1
for (i in perusahaan){
    console.log(perusahaan[i]);
}
// nomor 2
var i=0;
// while(i<perusahaan.length){
//     console.log(perusahaan[i]);
//     i++;
// }
// nomor 3
// do{
//     console.log(perusahaan[i]);
//     i++;
// }while(i<perusahaan.length)
// nomor 4
// perusahaan.forEach(tampilin);
// function tampilin(value){
//     console.log(value);
// }
// x=perusahaan.map(tampilin);
// function tampilin(value){
//     console.log(value);
// }
// nomor 5
i=10;
// while(i<0){
//     console.log("apa");
// }
// do{
//     console.log("apa");
// }while(i<10)

var tweets=[{username:"Raihan",content:"halo"}]
var id=0;
function update(){
    var tweet_area=document.getElementById("old_tweet");
    var id=id++;
    tweet_area.innerHTML=`<div> ${tweets.map(function(tweet){
        return `<div>${tweet.username} , ${tweet.content}</div>` + `<button onclick=erase_twt(${id})> Erase </button>` 
    }
    )}</div>`
}

function new_twt(){
    var new_tweet= document.getElementById("status").value;
    tweets.unshift({username: "Raihan",content: new_tweet})
    update(); 
}
function erase_twt(id_sts){
    
}