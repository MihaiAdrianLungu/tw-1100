// const privateCounter = (() => {
//     let count = 0;

//     console.log(`initial value of the counter is ${count}`);

//     return () => {
//         count++;
//         console.log(`current value of the counter is ${count}`);
//     }
// })();

const privateCounter2 = (() => {
    let count = 0;

    console.log(`initial value of the counter is ${count}`);

    return {
        increment: function() {
            count++;
            console.log(`current value of the counter is ${count}`);
        },
        decrement: () => {
            count--;
            console.log(`current value of the counter is ${count}`);
        }
    }
})();

privateCounter2.decrement();
privateCounter2.increment();