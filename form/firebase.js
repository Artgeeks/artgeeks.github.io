// Initialize Firebase
var config = {
apiKey: "AIzaSyAZiSblA4pRVSTq4b7VeP-9xIFyQLoFziM",
authDomain: "artgeeks-fest.firebaseapp.com",
databaseURL: "https://artgeeks-fest.firebaseio.com",
projectId: "artgeeks-fest",
storageBucket: "artgeeks-fest.appspot.com",
messagingSenderId: "122810303667"
};
firebase.initializeApp(config);
var db = firebase.firestore();

//Feed Data
const form = document.querySelector('#main-form');
form.addEventListener('submit', (e) => {
    const event = $('#event_name').val();
    const num = $('#part_no').val();
    e.preventDefault();
    $('#main-body').hide();
    $('#loader').show();
    if(num == 1){
        const name1 = $('#name-tag1').val();
        const phone1 = $('#phone-tag1').val();

        db.collection('fest-data').add({
            event: event,
            team_size: num,
            Participant_1: name1,
            Phone_1: phone1 
        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            location.replace("thanks.html")
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }
    else if(num == 2){
        const name1 = $('#name-tag1').val();
        const phone1 = $('#phone-tag1').val();
        const name2 = $('#name-tag2').val();
        const phone2 = $('#phone-tag2').val();

        db.collection('fest-data').add({
            event: event,
            team_size: num,
            Participant_1: name1,
            Phone_1: phone1,
            Participant_2: name2,
            Phone_2: phone2 
        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            location.replace("thanks.html")
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }
    else if(num == 3){
        const name1 = $('#name-tag1').val();
        const phone1 = $('#phone-tag1').val();
        const name2 = $('#name-tag2').val();
        const phone2 = $('#phone-tag2').val();
        const name3 = $('#name-tag3').val();
        const phone3 = $('#phone-tag3').val();

        db.collection('fest-data').add({
            event: event,
            team_size: num,
            Participant_1: name1,
            Phone_1: phone1,
            Participant_2: name2,
            Phone_2: phone2,
            Participant_3: name3,
            Phone_3: phone3 
        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            location.replace("thanks.html")
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }
    else if(num == 4){
        const name1 = $('#name-tag1').val();
        const phone1 = $('#phone-tag1').val();
        const name2 = $('#name-tag2').val();
        const phone2 = $('#phone-tag2').val();
        const name3 = $('#name-tag3').val();
        const phone3 = $('#phone-tag3').val();
        const name4 = $('#name-tag4').val();
        const phone4 = $('#phone-tag4').val();

        db.collection('fest-data').add({
            event: event,
            team_size: num,
            Participant_1: name1,
            Phone_1: phone1,
            Participant_2: name2,
            Phone_2: phone2,
            Participant_3: name3,
            Phone_3: phone3,
            Participant_4: name4,
            Phone_4: phone4
        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            location.replace("thanks.html")
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }
});