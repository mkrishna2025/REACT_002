var Person = function(){
	var name;
	return {
		setName: function(value){
			name = value;
		},
		getName: function(){
			return name;
		}
	}
}

module.exports = Person;