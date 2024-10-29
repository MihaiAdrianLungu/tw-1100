const promise = new Promise((resolve, reject) => {
    const status = false;

    setTimeout(() => {
        if (status) {
            resolve('Operation succeeded');
        } else {
            reject('Error')
        }
    }, 2000)
})

// console.log(promise);

promise.then((result) => console.log(result)).catch(error => console.log(error))