var current = document.getElementById("home");
function create(element,value) {
	if(value==undefined){
		document.getElementById("document").style.display = "none";
		document.getElementById("homePage").style.display = "block";
	}else{
		document.getElementById("document").style.display = "block";
		document.getElementById("homePage").style.display = "none";
		var content = document.getElementById("content");
		var indexContent = document.getElementById("index");
		DocumentBuilder.build(value,content,indexContent);
	}
	selectClicked(element);
}

function search(input){
	if(input.value == "")document.getElementById("search-result").innerHTML = "";
	else SearchMotor.search(input.value);
}

function goTo(id,key){
	create(document.getElementById(key),SearchMotor.technologies.get(key));
	window.scrollTo(0,document.getElementById(id).offsetTop);
	document.getElementById("search-result").innerHTML = "";
}

function selectClicked(element) {
	current.style.border = "none";
	current.style.color = "black";
	element.style.borderBottom = "2px solid rgb(0,119,137)";
	element.style.color = "rgb(0,119,137)";
	current = element;
}
