//grabbing input

var input = prompt("What type of GIF's you wanna watch?");
//console.log(input);
var url = "https://api.giphy.com/v1/gifs/search?q="+ input +"&api_key=dc6zaTOxFJmzC";
//console.log(url)

var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();
//

GiphyAJAXCall.onreadystatechange = (e) => {
    console.log("HTTPS PASSED!")
}
//
GiphyAJAXCall.addEventListener('load',function (e) {
    var giphyData = e.target.response;
    pushToDom(giphyData); 
    console.log(input);
});

       

//Data
function pushToDom(input) {
    var response = JSON.parse(input);
    var f = document.querySelector(".js-container");
   
   
      
      var imageUrls = response.data;
      var i;
      
       for(i=0; i < 20; i++){
        setTimeout(function(){
        var src = imageUrls[i].images.fixed_height.url;
  
          clear(f);
          f.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
        
          i++;
          
    
        }, 3000*i);
       }
    // var gifyContainer = document.getElementsByClassName('gify-container');
    // gifyContainer[0].innerHTML = "<img src=\""+ gifUrl +"\" >";
}

function clear(input){
    input.innerHTML = "";
  }
          