function Department(name) {
	this.name = name;
	this.employees = [];
	this.addEmployee = function(emp) {
		this.employees.push(emp);
		emp.department = this.name;
	};
	this.getEmployee = function(index) {
		return this.employees[index];
	}
}