function hitung(){
    let panjangAlas = document.getElementById("panjang-alas").value;
    let tinggi = document.getElementById("tinggi").value;
    let hasil = (1/2) * parseInt(panjangAlas) * parseInt(tinggi);

    console.log(hasil);
}

function hitungKeliling(){
    let sisiA = document.getElementById("sisi-a").value;
    let sisiB = document.getElementById("sisi-b").value;
    let sisiC = document.getElementById("sisi-c").value;

    let keliling= parseInt(sisiA) + parseInt(sisiB) +parseInt(sisiC);
    console.log(keliling);
}