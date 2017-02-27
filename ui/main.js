// Counter code
var button = document.getElementById('counter');

button.onclick = function(){
   
   // Create a request object
   var request = new XMLHttpRequest();
   
   
   // Capture the response and store it in a variable
   request.onreadystate = function() {
       if (request.readyState === XMLHttpRequest.Done){
           // Take some action
           if (request.status === 200) {
               var counter = request.responseText;
           }
       }
       // Not done yet
   };
   
  
    // Make the request
    request.open('GET', 'http://vidyadesicrew.imad.hasura-app.io/counter', true);
    request.send(null);
};