var script = document.createElement('script');
var num = 3;
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


function $(x) {return document.getElementById(x);} 

function allowDrop(ev) {
    ev.preventDefault();
  }
  
function drag(ev) {
ev.dataTransfer.setData("text", ev.target.id);
}
  
function drop(ev) {
    ev.preventDefault();
    var targetId = ev.target.id;
    var data = ev.dataTransfer.getData("text");
    console.log(data);
    
    if (targetId.includes("div")){
        ev.target.appendChild(document.getElementById(data));
        console.log("yes");
     }
  }
	
function Delete(button){
	var parent = button.parentNode;
	var grand_father = parent.parentNode;
	grand_father.removeChild(parent);
    }


function additem() {
   // create a new div element 
  var newDiv = document.createElement("div_new"); 
  // and give it some content 
  var newContent = document.createTextNode("Hi there and greetings!"); 
  // add the text node to the newly created div
  newDiv.appendChild(newContent);  

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("div2"); 
  document.body.insertBefore(newDiv, currentDiv); 
  }

  function additem1()
{
    //var divItem = document.createElement("div");
    //divItem.className = "group";
    //divItem.ondrop = drop(this.event);
    //divItem.ondragover = allowDrop(this.event);
    ////var button = document.createElement("input");
    ////button.type = "button";
    ////button.value = "im a button";
    ////button.onclick = Delete(this);
    //document.body.appendChild(divItem);

      var str = '<div class="group gro"id="div' + num + '" ondrop="drop(event)" ondragover="allowDrop(event)">' +
          '<button type="button" onclick="Delete(this)" > Delete</button>'+
    '</div >';

      document.getElementById("adds").innerHTML += str;

      num++;
}