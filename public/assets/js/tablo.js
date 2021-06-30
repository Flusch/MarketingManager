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
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function TabloGetir(){
    firebase.database().ref('servis').once('value',
    function(snapshot){
        snapshot.forEach(
            function(childSnapshot){
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();

                var sId = childSnapshot.val().id;
                var sAdi = childSnapshot.val().adi;
                var sFiyat = "₺" + childSnapshot.val().fiyat;
                var sNotlar = childSnapshot.val().notlar;
                
                TabloDoldur(sId,sAdi,sFiyat,sNotlar,childKey);
            }
        );
    });
}

window.onload = TabloGetir;

function TabloDoldur(sId,sAdi,sFiyat,sNotlar,childKey){
    var tbody = document.getElementById('tbody1');
    var trow = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement("button");
    var td6 = document.createElement("button");
    
    td1.innerHTML= sId;
    td2.innerHTML= sAdi;
    td3.innerHTML= sFiyat;
    td4.innerHTML= sNotlar;
    
    td5.setAttribute("class", "nc-icon nc-settings-tool-66 btn");
    td5.setAttribute("style", "margin-top: 2%; margin-left: 10px; color: green;");
    td5.setAttribute("onclick", "Duzenle()");

    td6.setAttribute("id", "silBtn");
    td6.setAttribute("class", "nc-icon nc-simple-remove btn");
    td6.setAttribute("style", "margin-top: 2%; margin-left: 10px; color: red;");
    td6.setAttribute("onclick", "Sil("+ childKey +")");
    

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    tbody.appendChild(trow);
}

const database = firebase.database();
const rootRef = database.ref('servis');

function Duzenle(){

}

function Sil(childKey){
    firebase.database().ref().child('servis/' + childKey + '/').remove();
}