const person = {
    greet() {
        console.log(`This is my name: ${this.name}`);
    },
    meet(age, punctuation) {
        console.log(`I am ${age} old${punctuation}`);
    }
}

const person2 = {
    name: 'Adrian'
}

// person.greet.call(person2)
// person.meet.call(null, 24, '.')
// person.meet.apply(null, [24, '.'])
const bound = person.greet.bind(person2)
const bound2 = person.meet.bind(null, 24, '.')

bound()
// bound2()
// bound2()
