//Müşteri Tablosu Fonksiyonları
function MusteriTabloGetir(){
    firebase.database().ref('musteri').once('value', function(snapshot){
        snapshot.forEach(function(childSnapshot){
            var mId = childSnapshot.val().id;
            var mAdi = childSnapshot.val().adi;
            var mTip = childSnapshot.val().tip;
            var mAdres = childSnapshot.val().adres;
            var mNotlar = childSnapshot.val().notlar;
            MusteriTabloDoldur(mId,mAdi,mTip,mAdres,mNotlar);
        });
    });
}

function MusteriTabloDoldur(mId,mAdi,mTip,mAdres,mNotlar){
    var tbody = document.getElementById('tbody1');
    var trow = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    //var td6 = document.createElement('a');
    //var td7 = document.createElement('a');
    
    td1.innerHTML= mId;
    td2.innerHTML= mAdi;
    td3.innerHTML= mTip;
    td4.innerHTML= mAdres;
    td5.innerHTML= mNotlar;
    /*
    td6.setAttribute("class", "nc-icon nc-settings-tool-66 btn");
    td6.setAttribute("style", "margin-top: 2%; margin-left: 10px; color: green;");
    td6.setAttribute("onclick", "Duzenle()");
    td7.setAttribute("class", "nc-icon nc-simple-remove btn");
    td7.setAttribute("style", "margin-top: 2%; margin-left: 10px; color: red;");
    td7.setAttribute("onclick", "Sil()");
    */
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    //trow.appendChild(td6);
    //trow.appendChild(td7);
    tbody.appendChild(trow);
}

//Ürün Tablosu Fonksiyonları
function UrunTabloGetir(){
    firebase.database().ref('urun').once('value', function(AllRecords){
        AllRecords.forEach(function(CurrentRecord){
            var uId = CurrentRecord.val().id;
            var uAdi = CurrentRecord.val().adi;
            var uFiyat = "₺" + CurrentRecord.val().fiyat;
            var uNotlar = CurrentRecord.val().notlar;
            UrunTabloDoldur(uId,uAdi,uFiyat,uNotlar);
        });
    });
}

function UrunTabloDoldur(uId,uAdi,uFiyat,uNotlar){
    var tbody = document.getElementById('tbody1');
    var trow = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    
    td1.innerHTML= uId;
    td2.innerHTML= uAdi;
    td3.innerHTML= uFiyat;
    td4.innerHTML= uNotlar;
    
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    tbody.appendChild(trow);
}

//Servis Tablosu Fonksiyonları
function ServisTabloGetir(){
    firebase.database().ref('servis').once('value', function(snapshot){
        snapshot.forEach(function(childSnapshot){
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            console.log(childKey);
            var sId = childSnapshot.val().id;
            var sAdi = childSnapshot.val().adi;
            var sFiyat = "₺" + childSnapshot.val().fiyat;
            var sNotlar = childSnapshot.val().notlar;
            ServisTabloDoldur(sId,sAdi,sFiyat,sNotlar,childSnapshot);
        });
    });
}

function ServisTabloDoldur(sId,sAdi,sFiyat,sNotlar,childKey){
    var tbody = document.getElementById('tbody1');
    var trow = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    
    td1.innerHTML= sId;
    td2.innerHTML= sAdi;
    td3.innerHTML= sFiyat;
    td4.innerHTML= sNotlar;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    tbody.appendChild(trow);
}

//Satis Tablosu Fonksiyonları
function SatisTabloGetir(){
    firebase.database().ref('satis').once('value',function(snapshot){
        snapshot.forEach(function(childSnapshot){
            var satKod = childSnapshot.val().kod;
            var musteri = childSnapshot.val().musteri;
            var urun = "";
            var hizmet = "";
            //Ürün kontrolü
            if(childSnapshot.val().urun1 != ""){
                urun = childSnapshot.val().urun1 + ", ";
            }
            if(childSnapshot.val().urun2 != ""){
                urun = urun + childSnapshot.val().urun2 + ", " ;
            }
            if(childSnapshot.val().urun3 != ""){
                urun = urun + childSnapshot.val().urun3;
            }
            //Hizmet kontrolü
            if(childSnapshot.val().hizmet1 != ""){
                hizmet = childSnapshot.val().hizmet1 + ", ";
            }
            if(childSnapshot.val().hizmet2 != ""){
                hizmet = hizmet + childSnapshot.val().hizmet2 + ", ";
            }
            if(childSnapshot.val().hizmet3 != ""){
                hizmet = hizmet + childSnapshot.val().hizmet3;
            }
            var tarih = childSnapshot.val().tarih;
            var notlar = childSnapshot.val().notlar;
            SatisTabloDoldur(satKod,musteri,urun,hizmet,tarih,notlar);
        });
    });
}

function SatisTabloDoldur(satKod,musteri,urun,hizmet,tarih,notlar){
    var tbody = document.getElementById('tbody1');
    var trow = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    
    td1.innerHTML= satKod;
    td2.innerHTML= musteri;
    td3.innerHTML= urun;
    td4.innerHTML= hizmet;
    td5.innerHTML= tarih;
    td6.innerHTML= notlar;
    
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    tbody.appendChild(trow);
}