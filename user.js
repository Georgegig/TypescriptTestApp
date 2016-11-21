var User = (function () {
    function User(firstname, middleInitial, lastname) {
        this.firstname = firstname;
        this.middleInitial = middleInitial;
        this.lastname = lastname;
        this.fullName = firstname + " " + middleInitial + " " + lastname;
    }
    return User;
}());
function greeter(person) {
    return "Hello, " + person.firstname + ' ' + person.lastname;
}
var user = new User('Georgi', 'I.', 'Georgiev');
document.getElementById('greeter').innerHTML = greeter(user);
document.getElementById('fullname').innerHTML = user.fullName;
