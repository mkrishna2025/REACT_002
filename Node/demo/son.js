class Father {
	getName(){
		return "Venkat";
	}
	getGender(){
		return "M";
	}
}

class Son extends Father {
	getName(){
		return "Rakesh";
	}
	getCity() {
		return "Hyderabad";
	}
}

module.exports = Son;