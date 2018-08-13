function Personp(namee,colore){

	this.name=namee;
	this.color=colore;
	this.greet=function(){
		console.log("hello I am "+this.name+" my fav color "+ this.color+".");
	}
}
console.log("Hello");

module.exports = Personp;