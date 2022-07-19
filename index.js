// Write your solution in this file!
const employee = {
    name: 'Jamie',
    streetAddress: 'East 6th Street'
}
function updateEmployeeWithKeyAndValue(Object, key, value){
    const holder = {...Object};
    holder[key] = value;
    return holder;
}
function destructivelyUpdateEmployeeWithKeyAndValue(Object, key, value){
    Object[key]=value;
    return Object;
}
function deleteFromEmployeeByKey(Object, key){
    const holder = {...Object};
    delete holder[key];
    return holder;
}
function destructivelyDeleteFromEmployeeByKey(Object, key){
    delete Object[key];
    return Object;
}