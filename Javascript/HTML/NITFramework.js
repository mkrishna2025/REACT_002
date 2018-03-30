var NIT = {
	version: 1.0,
	createLabel: function(options){
		var element = document.createElement('label');
		element.innerHTML = options.text;
		return element;
	},
	createTextBox: function (options){
		var element = document.createElement('input');
		element.type = 'text';
		return element;
	},
	createButton: function(options){
		var element = document.createElement('input');
		element.type = 'button';
		element.value = options.text;
		return element;
	},
	createElement: function(type, options){
		if(type == 'textbox'){
			return this.createTextBox();
		} else if(type == 'button'){
			return this.createButton(options);
		} else if(type == 'label'){
			return this.createLabel(options);
		}   
	}
}