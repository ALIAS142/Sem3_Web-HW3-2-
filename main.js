function send() {

    let message = document.getElementById('message').value;  
    let name = document.getElementById('name').value;


    if (message=='') {
        document.getElementById('error').innerText = 'Enter message!'
    } 
    else{
        document.getElementById('result').innerText = name + ":" + message;

        document.getElementById('error').innerText = '' ;
        document.getElementById('message').value = '';
    }

}
