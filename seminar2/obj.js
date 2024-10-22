const student = {
    name: 'Mihai Adrian',
    email : "email@email.com",
    yearsOld: 25,
    meet: function () {
        console.log(this.name);
    },
    // meet2: () => {
    //     console.log(this.name)
    // }
}

// console.log(student.email);
// console.log(student['email']);

// student.meet();

function test1 (name) {
    console.log(name);
}

const arrTest1 = (name) => {
    console.log(name);
}

const arrTest2 = name => console.log(name);

test1('Adrian')
arrTest1('Adrian')