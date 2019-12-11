function SearchMotor() {
	
}

SearchMotor.init = function() {
	this.data = new Map();
	this.technologies = new Map([["Tomcat",tomcat],["Jetty&Undertow",jettyUndertow],["Maven",maven],["Gradle",gradle],["Ant",ant],["ECMAScript",ECMAScript],["Testing",testing],["Loggin",loggin],["WebServices",webService],["DesignPattern",DP]]);
	let content = document.getElementById("content");
	this.technologies.forEach((function(value,key) {
		content.innerHTML = value;
		var titles = content.getElementsByTagName("H1");
		this.data.set(key,[value,Object.values(titles)]);
	}).bind(this));
	
}

SearchMotor.search = function(toSearch) {
	let searchResult = "<ul>";
	let count = 0;
	this.data.forEach(function(value,key){
		for (let i = 0; i < value[1].length; i++) {
			if((value[1][i].innerHTML.toLowerCase()).includes(toSearch) && count!=5){
				console.log(key);
				searchResult += "<li onclick=goTo('"+value[1][i].id+"','"+key+"')>" + value[1][i].innerHTML + " - " + key + "</li>";	
				count++;
			}
		}
	});
	searchResult += "</ul>";
	document.getElementById("search-result").innerHTML = searchResult;
}

