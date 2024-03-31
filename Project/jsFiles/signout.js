const firebaseConfig = {
    apiKey: "AIzaSyCuYNWHfDwVF537e_e0HBi5viQUQe-gE7Q",
    authDomain: "chess4all-e7766.firebaseapp.com",
    databaseURL: "https://chess4all-e7766-default-rtdb.firebaseio.com",
    projectId: "chess4all-e7766",
    storageBucket: "chess4all-e7766.appspot.com",
    messagingSenderId: "600603932859",
    appId: "1:600603932859:web:b6606cc0ef9bb70504d19e"
};

firebase.initializeApp(firebaseConfig);




document.getElementById("signout").addEventListener("click", signOut);

function signOut() {
    
    console.log("test")

    
}

document.addEventListener("DOMContentLoaded", initializeFirebase);