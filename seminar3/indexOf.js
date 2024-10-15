const arr = [1,2,3,4];

const elIndex = arr.indexOf(5);
const indexOf = elIndex !== -1 ? elIndex : 'Not found';

// console.log(indexOf);

if (elIndex !== -1) {
    console.log(elIndex);
} else {
    console.log('Not found');
}