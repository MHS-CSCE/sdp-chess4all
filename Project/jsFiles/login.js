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
//variable for the firebase authentication function (built in)
const auth = firebase.auth()

//runs function when the submit button is clicked on the login page
document.getElementById("user_login").addEventListener("submit", submitForm);

function submitForm(e) {
    //prevents the default submitting of the form
    e.preventDefault();
    //creates variables for the email and password taking it form the values entered
    var email = document.getElementById('email').value;
    var password = document.getElementById('psw').value;
    /**
     * passes the email and password to the database and checks if there is an existing account
     * if the account is already registered the user will be brought to the main page
     * if not there will be an alert saying that their information is incorrect
     * @param {string} email the email entered by the user
     * @param {string} password the password entered by the user
     */
    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        var user = userCredential.user;
        window.location.href = "/html/main.html";
    })
    .catch((error) => {
        document.querySelector(".alert").innerHTML = "Incorrect email or password";
        document.querySelector(".alert").style.display = "block";
    });
    //resets the form
    document.getElementById("user_login").reset();
}
