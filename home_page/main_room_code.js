console.log('Connected');
uname = localStorage.getItem('myUnAme');
document.getElementById('user_name_display').innerHTML = uname;

function logout() {
    localStorage.removeItem('myUnAme');
    window.location = 'C:\\Users\\Hamzah2030\\Desktop\\kwitter project\\index.html';
}

function addRoom() {
    messageval = document.getElementById('roomName').value;
    firebase.database().ref('/' + messageval).child('/').update({
        'Room Name': messageval
    });
}
function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML =
                "";
            snapshot.forEach(function (childSnapshot) {
                childKey =
                    childSnapshot.key;
                Room_names = childKey;
                //Start code
                console.log(Room_names)
                roomnamewithhash = "#" + Room_names;
                outputthing = "<div id=" + Room_names + " onclick='redirectToRoomname(this.id)'>" + roomnamewithhash + "</div><hr>"
                document.getElementById('output').innerHTML += outputthing;
                //End code
            });
        });
}
getData();
function redirectToRoomname(roomid){
    localStorage.setItem('chatRoomId', roomid)
}