//database information
const firebaseConfig = {
    apiKey: "AIzaSyCuYNWHfDwVF537e_e0HBi5viQUQe-gE7Q",
    authDomain: "chess4all-e7766.firebaseapp.com",
    databaseURL: "https://chess4all-e7766-default-rtdb.firebaseio.com",
    projectId: "chess4all-e7766",
    storageBucket: "chess4all-e7766.appspot.com",
    messagingSenderId: "600603932859",
    appId: "1:600603932859:web:b6606cc0ef9bb70504d19e"
};
//initialize the firebase database (finds the right one)
firebase.initializeApp(firebaseConfig);
//variable for the authentication function
const auth = firebase.auth()
//event listener to know when form is submitted and runs submitForm function
document.getElementById("chess4all").addEventListener("submit", submitForm);
function submitForm(e) {
    //prevents the default submitting of the form
    e.preventDefault();
    //saves the name, email and password entered by the user, however the name is not used yet
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('psw').value;
    //correct format for email
    var valid_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //checks for a valid email in the correct format example@something.com (baed on the valid_email var)
    if (!valid_email.test(email)) {
        document.querySelector(".alert").innerHTML = "Email adress invalid";
        document.querySelector(".alert").style.display = "block";
        return;
    }
    //checks the length of the password
    if (password.length < 6) {
        document.querySelector(".alert").innerHTML = "Password must be at least 6 characters long.";
        document.querySelector(".alert").style.display = "block";
        return;
    }
    /**
     * creates the user using the createUserWithEmailAndPassword function that is built into firebase authentication
     * (sends the information to the database where it's saved)
     * @param {string} email the email entered by the user
     * @param {string} password the password entered by the user
     */
    auth.createUserWithEmailAndPassword(email, password)

    
    //pause before continuing
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);
    //resets the form
    document.getElementById("chess4all").reset()
    //brings to home page
    window.location.href = "/html/main.html";

}
