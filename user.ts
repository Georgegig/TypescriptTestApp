interface IUser {
    firstname: string,
    lastname: string
}

class User {
    fullName: string;
    constructor(public firstname, public middleInitial, public lastname) {
        this.fullName = firstname + " " + middleInitial + " " + lastname;
    }
}

function greeter(person: IUser) {
    return "Hello, " + person.firstname + ' ' + person.lastname;
}

var user = new User('Georgi', 'I.', 'Georgiev');

document.getElementById('greeter').innerHTML = greeter(user);     
document.getElementById('fullname').innerHTML = user.fullName;      