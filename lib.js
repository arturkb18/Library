var userlist = [];

var btn = document.getElementById("find");
var div = document.getElementById("option");
var render = document.getElementById('renderBookList');

var data = [
	 {title: "The catcher in the rye", author: "JD Salinger", genre:"romance"},
	 {title: "Lord of The Rings - The Fellowship of the Ring" , author: "JRR Tolkien", genre: "adventure"},
	 {title: "How Grinch Stole Christmas", author: "Dr Seuss", genre:"children"},
	 {title: "The Old Man and The Sea", author:"Ernest Hemingway", genre:"romance"},
	 {title: "The Sun also Rises", author:"Ernest Hemingway", genre:"romance"},
	 {title: "It", author:"Stephen King", genre:"terror"},
	 {title: "I Robot", author:"Isaac Asimov", genre: "sci-fi"},
	 {title: "Mind Transfer", author: "Janet Asimov", genre:"sci-fi"}
	];

btn.addEventListener("click", function(){
	document.getElementById('renderBookList').innerHTML="";
	var opt = saveOpt();
	find(data, opt );
});

function saveOpt(){
	let op = [];
	let c = div.childNodes
	for(i =0; i < c.length; i++){
		if(c[i].nodeName ==="INPUT"){
			op.push(c[i]);
		}
	}
	return selected(op)
}

function selected(arr){
	for(j =0; j< arr.length; j++){
		let element = arr[j];
		if(element.value==="1" && element.checked){
			return 1;
		}else if(element.value==="2" && element.checked){
			return 2;
		}else if(element.value==="3" && element.checked){
			return 3;
		}
	}
}


function find(data, opt){
	let param = document.getElementById("param").value.toLowerCase();

	let pattern = new RegExp(param);

	let outPut=[];
	data.forEach(function(elm){
		let na;
		switch(opt){
			case 1:			
				na = elm.title;
				if (na.toLowerCase().match(pattern)){
					outPut.push(elm);
	 			}
				break;
			case 2:
				na = elm.author;
				if (na.toLowerCase().match(pattern)){
					outPut.push(elm);
	 			}
				break;
			case 3:
				na = elm.genre;
				if (na.toLowerCase().match(pattern)){
					outPut.push(elm);
	 			}
				break;
			default:
		}
	 });
	
    
    let ul = document.createElement('ul');
    ul.setAttribute('id', 'bookList');
    let t;
    document.getElementById("renderBookList").style.display;
    document.getElementById("renderBookList").appendChild(ul);
    
    outPut.forEach(renderList);

    function renderList(element, index, arr) {
        var li = document.createElement('li');
        
        ul.appendChild(li);
        li.setAttribute('class', 'item');
        t = document.createTextNode(element);
        
        li.innerHTML=li.innerHTML + "<strong>Author Name:</strong> "+ element.author +"; <strong>Book Name:</strong> "+ element.title;
	}
}

function showAddForm(){
    document.getElementById("addForm").classList.remove("hidden");
    document.getElementById("addForm").style.display;
    console.log("oi");
}

function generateLBCard() {
	return Math.round(Math.random() * 50000);
}

function addNewUser() {
    document.getElementById("message").innerHTML="";
	let name = newUserForm.username.value;
	let age = newUserForm.userage.value;
	let card = generateLBCard();

    if(name!==undefined && age!==undefined && name!=="" && age!==""){
        var myUser = {
		"name": name,
		"age": age,
		"librarycard": card
	   };

 	  userlist.push(myUser);

        messageSuccess(myUser);
    }else{
        messageError();
    }
	
}

function messageError(){
    var p = document.createElement(p);
    
    p.setAttribute("id", "mgs_success");
    
    document.getElementById("message").appendChild(p);
    p.style.color = "red";
    p.style.fontWeight= "bold";
    p.innerHTML+="Name and/or age cannot be null."
}
function messageSuccess(obj){
    
    var p = document.createElement(p);
    
    p.setAttribute("id", "mgs_success");
    
   document.getElementById("message").appendChild(p);
    
    p.innerHTML += "User: "+obj.name+ " added with success. Card Number: "+ obj.librarycard;  
    
    clearForm();
}

var clear = document.getElementById("clear");

clear.addEventListener("click", function(){
    document.getElementById("renderBookList").innerHTML=" ";
});

function clearForm(){
    newUserForm.username.value="";
    newUserForm.userage.value ="";
}
function listUsers(){
    document.getElementById("addForm").classList.add("hidden");
    document.getElementById("userlist").innerHTML="";
    let t;
    let ul = document.createElement("ul");
    document.getElementById("userlist").style.display;
    document.getElementById("userlist").appendChild(ul);
    
    let li = document.createElement("li");
    
    ul.appendChild(li); 
   
    
    for(let i =0; i< userlist.length; i++){
         t = document.createTextNode(userlist[i]);
        li.innerHTML+="User name: "+userlist[i].name +". Library card: "+ userlist[i].librarycard;
    }
}

