console.log('Connected')
function addUser(){
    uname = document.getElementById('uname').value;
    localStorage.setItem('myUnAme', uname)
    window.location = 'C:\\Users\\Hamzah2030\\Desktop\\kwitter project\\home_page\\main_room_interface.html'
}