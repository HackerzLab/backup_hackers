window.onload = function(){
    'use strict';


    var e1 = new Employee('Jane', 'Doe', 'Accounting');
    var e2 = new Employee('John', 'Smith', 'Human Resources');

    // console.log(e1.firstName); // Jane
	// console.log(e2.getName()); // John Smith

	var hr = new Department('Human Resources');
	hr.addEmployee(e2); 
	//console.log(hr.employees[0].lastName); // Smith

	//console.log(hr.getEmployee(0).lastName);

	//console.log(e1.toString());

	Employee.prototype.getNameBackwards = function() { return this.lastName + ', ' + this.firstName; }

	// console.log(e1.getNameBackwards());

	if (typeof String.prototype.trim == 'undefined') {
		String.prototype.trim = function() {
			return this.replace(/^\s+|\s+$/g,'');
		};
	}

	var str = '   abc ';
	console.log(str.length);
	str = str.trim();
	console.log(str);
	console.log(str.length);

}

