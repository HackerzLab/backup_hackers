function Employee(firstName, lastName, department) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.department = department;
	this.hireDate = new Date();

	this.getName = function() {
		return this.firstName + ' ' + this.lastName;
	};

	this.toString = function() {
		return 'Name: ' + this.firstName + ' ' + this.lastName + '\nDepartment: ' + this.department;
	};
}