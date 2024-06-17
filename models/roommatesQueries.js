const fs = require('fs');
const path = require('path');

const roommatesFilePath = path.join(__dirname, '../data/roommates.json');

const getRoommates = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(roommatesFilePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                const roommates = JSON.parse(data).roommates;
                resolve(roommates);
            }
        });
    });
};

const addRoommate = (roommate) => {
    return new Promise((resolve, reject) => {
        fs.readFile(roommatesFilePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                const roommatesData = JSON.parse(data);
                roommatesData.roommates.push(roommate);
                fs.writeFile(roommatesFilePath, JSON.stringify(roommatesData, null, 2), (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            }
        });
    });
};

module.exports = {
    getRoommates,
    addRoommate
};
