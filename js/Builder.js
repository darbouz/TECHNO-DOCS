function DocumentBuilder() {
}
DocumentBuilder.prototype.firstTask = function(content,value) {
	content.innerHTML = value;
};
DocumentBuilder.prototype.secondTask = function(indexContent,titles) {
	var index = "<ul>";
	for (var i = 0; i < titles.length; i++) {
		index += "<li><a href='#title"+(i+1)+"'>"+titles[i].innerHTML+"</a></li>";
	}
	index += "</ul>"
	indexContent.innerHTML = index;
};
DocumentBuilder.build = function(value,content,indexContent) {
	this.prototype.firstTask(content, value);
	this.prototype.secondTask(indexContent, content.getElementsByTagName('H1'));
}


