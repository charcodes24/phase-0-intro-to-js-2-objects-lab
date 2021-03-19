// Write your solution in this file!
const employee = {
    name : 'Charlene Johnson', 
    streetAddress : '2146 S Johnson Ct, Visalia, CA, 93277', 
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};

function deleteFromEmployeeByKey(employee, key) {
    let newObject = Object.assign({}, employee);
    //console.log(newObject, key);
    delete newObject[key];
    return newObject;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
};
