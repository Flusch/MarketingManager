const database = firebase.database();

//Müşteri
const mId = document.getElementById('mId');
const mAdi = document.getElementById('mAdi');
const mTip = document.getElementById('mTip');
const mAdres = document.getElementById('mAdres');
const mNotlar = document.getElementById('mNotlar');
const musteriBtn = document.getElementById('musteriBtn');

const musteriRef = database.ref('musteri');

musteriBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const mAutoId = musteriRef.push().key
    musteriRef.child(mAutoId).set({
        id: mId.value,
        adi: mAdi.value,
        tip: mTip.value,
        adres: mAdres.value,
        notlar: mNotlar.value,
    })
});
//Müşteri sonu

//Ürün
const uId = document.getElementById('uId');
const uAdi = document.getElementById('uAdi');
const uFiyati = document.getElementById('uFiyati');
const uNotlar = document.getElementById('uNotlar');
const urunBtn = document.getElementById('urunBtn');

const urunRef = database.ref('urun');

urunBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const uAutoId = urunRef.push().key
    urunRef.child(uAutoId).set({
        id: uId.value,
        adi: uAdi.value,
        fiyat: uFiyati.value,
        notlar: uNotlar.value,
    })
});
//Ürün sonu

//Servis
const sId = document.getElementById('sId');
const sAdi = document.getElementById('sAdi');
const sFiyati = document.getElementById('sFiyati');
const sNotlar = document.getElementById('sNotlar');
const servisBtn = document.getElementById('servisBtn');

const servisRef = database.ref('servis');

servisBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const sAutoId = servisRef.push().key
    servisRef.child(sAutoId).set({
        id: sId.value,
        adi: sAdi.value,
        fiyat: sFiyati.value,
        notlar: sNotlar.value,
    })
});
//Servis sonu

//Satış
const satisRef = database.ref('satis');

function SatisTabloGetir(){
    firebase.database().ref('musteri').once('value', function(snapshot){
        snapshot.forEach(function(childSnapshot){
                var satMId = childSnapshot.val().id;
                var satMAdi = childSnapshot.val().adi;
                MusteriDoldur(satMId,satMAdi);
        });
    });

    firebase.database().ref('urun').once('value', function(snapshot){
        snapshot.forEach(function(childSnapshot){
            var satUId = childSnapshot.val().id;
            var satUAdi = childSnapshot.val().adi;
            var satUFiyat = childSnapshot.val().fiyat;
            UrunDoldurA(satUId,satUAdi,satUFiyat);
            UrunDoldurB(satUId,satUAdi,satUFiyat);
            UrunDoldurC(satUId,satUAdi,satUFiyat);
        });
    });

    firebase.database().ref('servis').once('value', function(snapshot){
        snapshot.forEach(function(childSnapshot){
            var satSId = childSnapshot.val().id;
            var satSAdi = childSnapshot.val().adi;
            var satSFiyat = childSnapshot.val().fiyat;
            ServisDoldurA(satSId,satSAdi,satSFiyat);
            ServisDoldurB(satSId,satSAdi,satSFiyat);
            ServisDoldurC(satSId,satSAdi,satSFiyat);
            });
    });
}

//MÜŞTERİ
function MusteriDoldur(satMId,satMAdi){
    var mSelect = document.getElementById('satMusteri');
    var mOption = document.createElement('option');
        
    mOption.innerHTML= satMId + " - " + satMAdi;   
    mSelect.appendChild(mOption);
}

//ÜRÜN
function UrunDoldurA(satUId,satUAdi,satUFiyat){
    var uSelect = document.getElementById('satUrun1');
    var uOption = document.createElement('option');
    var uVl = satUId + " - " + satUAdi + " - ₺" + satUFiyat;

    uOption.setAttribute("value", uVl);
    uOption.setAttribute("data-price", satUFiyat);
        
    uOption.innerHTML= uVl;
    uSelect.appendChild(uOption);
}

function UrunDoldurB(satUId,satUAdi,satUFiyat){
    var uSelect = document.getElementById('satUrun2');
    var uOption = document.createElement('option');
    var uVl = satUId + " - " + satUAdi + " - ₺" + satUFiyat;

    uOption.setAttribute("value", uVl);
    uOption.setAttribute("data-price", satUFiyat);
        
    uOption.innerHTML= uVl;
    uSelect.appendChild(uOption);
}

function UrunDoldurC(satUId,satUAdi,satUFiyat){
    var uSelect = document.getElementById('satUrun3');
    var uOption = document.createElement('option');
    var uVl = satUId + " - " + satUAdi + " - ₺" + satUFiyat;

    uOption.setAttribute("value", uVl);
    uOption.setAttribute("data-price", satUFiyat);
        
    uOption.innerHTML= uVl;
    uSelect.appendChild(uOption);
}

//SERVİS
function ServisDoldurA(satSId,satSAdi,satSFiyat){
    var sSelect = document.getElementById('satHizmet1');
    var sOption = document.createElement('option');
    var sVl = satSId + " - " + satSAdi + " - ₺" + satSFiyat;

    sOption.setAttribute("value", sVl);
    sOption.setAttribute("data-price", satSFiyat);
        
    sOption.innerHTML= sVl;
    sSelect.appendChild(sOption);
}

function ServisDoldurB(satSId,satSAdi,satSFiyat){
    var sSelect = document.getElementById('satHizmet2');
    var sOption = document.createElement('option');
    var sVl = satSId + " - " + satSAdi + " - ₺" + satSFiyat;

    sOption.setAttribute("value", sVl);
    sOption.setAttribute("data-price", '"' + satSFiyat + '"');

    sOption.innerHTML= sVl;
    sSelect.appendChild(sOption);
}

function ServisDoldurC(satSId,satSAdi,satSFiyat){
    var sSelect = document.getElementById('satHizmet3');
    var sOption = document.createElement('option');
    var sVl = satSId + " - " + satSAdi + " - ₺" + satSFiyat;

    sOption.setAttribute("value", sVl);
    sOption.setAttribute("data-price", satSFiyat);
        
    sOption.innerHTML= sVl;
    sSelect.appendChild(sOption);
}

//Satış Formu
const satMusteri = document.getElementById('satMusteri');

const satUrun1 = document.getElementById('satUrun1');
const satUrun2 = document.getElementById('satUrun2');
const satUrun3 = document.getElementById('satUrun3');

const satHizmet1 = document.getElementById('satHizmet1');
const satHizmet2 = document.getElementById('satHizmet2');
const satHizmet3 = document.getElementById('satHizmet3');

const satKod = document.getElementById('satKod');
const satTarih = document.getElementById('satTarih');
const satNotlar = document.getElementById('satNotlar');

const satisBtn = document.getElementById('satisBtn');

satisBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const satisAutoId = satisRef.push().key
    satisRef.child(satisAutoId).set({
        musteri: satMusteri.value,

        urun1: satUrun1.value,
        urun2: satUrun2.value,
        urun3: satUrun3.value,

        hizmet1: satHizmet1.value,
        hizmet2: satHizmet2.value,
        hizmet3: satHizmet3.value,

        kod: satKod.value,
        tarih: satTarih.value,
        notlar: satNotlar.value,

        //toplam_fiyat: toplamFiyat.value
    })
});
//Satış Sonu