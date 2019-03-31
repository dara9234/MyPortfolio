// Initialize Firebase
var config = {
  apiKey: "AIzaSyCkvsHcBOja84l6U5zeABhxgFtfcYt3-Ew",
  authDomain: "contactform-dd3f7.firebaseapp.com",
  databaseURL: "https://contactform-dd3f7.firebaseio.com",
  projectId: "contactform-dd3f7",
  storageBucket: "",
  messagingSenderId: "472256435188"
};
    
    firebase.initializeApp(config);

    var database = firebase.database();

    //Button 
    $("#send").on("click", function (event) {
        event.preventDefault();
        alert("clicked");

        //Grabs user input
        var userName = $("#recipient-name").val().trim();
        var userEmail = $("#exampleInputEmail1").val().trim();
        var userPhone = $("#recipient-phone").val().trim();
        var userSubject = $("#recipient-sub").val().trim();
        var userMessage = $("#recipient-msg").val().trim();

        var newUser = {
            name: userName,
            email: userEmail,
            phone: userPhone,
            subject: userSubject,
            message: userMessage
        };

        //Push to database
        database.ref().push(newUser);

        //Clears input boxes
        $("#recipient-name").val("");
        $("#exampleInputEmail1").val("");
        $("#recipient-phone").val("");
        $("#recipient-sub").val("");
        $("#recipient-msg").val("");


    });
