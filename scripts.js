function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".")
}

var iPhone6S = new Phone("Apple", 2250, "silver");
var Samsung = new Phone("Samsung", 1700, "black");
var OnePlus = new Phone("OnePlus One", 1500, "green");

iPhone6S.printInfo();
Samsung.printInfo();
OnePlus.printInfo();