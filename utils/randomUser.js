const { v4: uuidv4 } = require('uuid');

const randomUser = async () => {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];
    return {
        id: uuidv4(),
        nombre: `${user.name.first} ${user.name.last}`,
        debe: 0,
        recibe: 0
    };
};

module.exports = randomUser;