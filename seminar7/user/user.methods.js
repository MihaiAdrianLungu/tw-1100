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
        deleteOne: async(id) => {
            return new Promise((resolve, reject) => {
                const index = dbUsers.findIndex(user => user.id === id);

                if (index === -1) {
                    reject({message: 'User not found'})
                } else {
                    dbUsers.splice(index,1);
                    resolve({message: 'User deleted successfully'})
                }
            })
        }
    }
})();

module.exports = usersMethods;