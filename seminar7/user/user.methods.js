const users = require("../user");

const usersMethods = (() => {
    const dbUsers = [...users];

    return {
        findMany: async (filters = {}) => {
            return new Promise((resolve) => {
                let copyUsers = [...dbUsers];

                if (filters.age) {
                    copyUsers = dbUsers.filter(user => user.age === Number(filters.age));
                }

                if (filters.name) {
                    copyUsers = dbUsers.filter(user => user.name.toLowerCase().includes(filters.name.toLowerCase()));
                }

                resolve(copyUsers);
            })
        },
        create: async (body) => {
            return new Promise((resolve, reject) => {
                const newUser = {
                    id: dbUsers.length + 1,
                    ...body,
                }

                dbUsers.push(newUser);

                resolve(newUser);
            })
        },
        update: async (id, body) => {
            return new Promise((resolve, reject) => {
                const index = dbUsers.findIndex(user => user.id === id);

                if (index === -1) {
                    reject(new Error(`User with id ${id} not found.`))
                }

                dbUsers[index] = {
                    ...dbUsers[index],
                    ...body
                }

                resolve(dbUsers[index]);
            })
        },
        deleteOne: async (id) => {
            return new Promise((resolve, reject) => {
                const index = dbUsers.findIndex(user => user.id === id);

                if (index === -1) {
                    reject({ message: 'User not found' })
                } else {
                    dbUsers.splice(index, 1);
                    resolve({ message: 'User deleted successfully' })
                }
            })
        }
    }
})();

module.exports = usersMethods;