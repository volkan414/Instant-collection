let sayi1 = document.querySelector("#s1");
let sayi2 = document.querySelector("#s2");
let sonuc = document.querySelector("#sonuc");

function hesapla(){
    let toplam = Number(sayi1.value)+Number(sayi2.value);
    sonuc.innerHTML=toplam;
}

sayi1.oninput=hesapla;
sayi2.oninput=hesapla;