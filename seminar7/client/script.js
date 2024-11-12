const getUsers = async () => {
    try {
        const response = await fetch('http://127.0.0.1:3000/users');
        const data = await response.json();

        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

const getUsers2 = () => {
    fetch('http://127.0.0.1:3000/users')
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
}

const form = document.getElementById('userForm');

form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    await createUser({ name, age });
})

const createUser = async (body) => {
    try {
        const response = await fetch('http://127.0.0.1:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        const data = await response.json();

        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

const updateUser = async (id) => {
    try {
        const newUser = {
            name: 'Andreea',
        }

        const response = await fetch(`http://127.0.0.1:3000/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })

        const data = await response.json();

        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

// createUser()
updateUser(3)