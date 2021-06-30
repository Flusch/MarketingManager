// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC28pXBilLFCPQdNgQdOS8ul0zaMRDn2oc",
    authDomain: "itms-iuc28.firebaseapp.com",
    databaseURL: "https://itms-iuc28-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "itms-iuc28",
    storageBucket: "itms-iuc28.appspot.com",
    messagingSenderId: "616913099147",
    appId: "1:616913099147:web:c90913602a043877edf78e",
    measurementId: "G-Y7EF79Z9MY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

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
