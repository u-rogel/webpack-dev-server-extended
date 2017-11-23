
document.getElementById("get").addEventListener("click", function(){
    var url = "/get/some-data"
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
    xhr.addEventListener('load', function(e) {
        console.log(e.target.response);
    });
})

document.getElementById("post").addEventListener("click", function(){
    var url = "/post/some-data"
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({data: "sent from client"}));
    xhr.addEventListener('load', function(e) {
        console.log(e.target.response);
    });
})