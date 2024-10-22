const person = {
    name: 'Adrian',
    greet() {
        console.log(`This is my name: ${this.name}`);
    }
}

function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function () {
    this.online = true;
    console.log('User is logged in.');
}

User.prototype.logout = function () {
    this.online = false;
    console.log('User is logged out.');
}

const user = new User('test@email.com', 'Adrian');

console.log(user);