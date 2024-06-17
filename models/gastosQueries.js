const fs = require('fs');
const path = require('path');

const gastosFilePath = path.join(__dirname, '../data/gastos.json');

const getAllGastos = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(gastosFilePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                const gastos = JSON.parse(data).gastos;
                resolve(gastos);
            }
        });
    });
};

const addGasto = (gasto) => {
    return new Promise((resolve, reject) => {
        fs.readFile(gastosFilePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                const gastosData = JSON.parse(data);
                gastosData.gastos.push(gasto);
                fs.writeFile(gastosFilePath, JSON.stringify(gastosData, null, 2), (err) => {
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

const updateGasto = (id, roommate, descripcion, monto) => {
    return new Promise((resolve, reject) => {
        fs.readFile(gastosFilePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                let gastosData = JSON.parse(data);
                const gastoIndex = gastosData.gastos.findIndex((g) => g.id === id);

                if (gastoIndex === -1) {
                    reject(new Error('Gasto no encontrado'));
                    return;
                }

                // Update gasto
                gastosData.gastos[gastoIndex].roommate = roommate;
                gastosData.gastos[gastoIndex].descripcion = descripcion;
                gastosData.gastos[gastoIndex].monto = monto;

                fs.writeFile(gastosFilePath, JSON.stringify(gastosData, null, 2), (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(gastosData.gastos[gastoIndex]);
                    }
                });
            }
        });
    });
};

const deleteGasto = (id) => {
    return new Promise((resolve, reject) => {
        fs.readFile(gastosFilePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                let gastosData = JSON.parse(data);
                const initialLength = gastosData.gastos.length;
                gastosData.gastos = gastosData.gastos.filter((g) => g.id !== id);

                if (gastosData.gastos.length === initialLength) {
                    reject(new Error('Gasto no encontrado'));
                    return;
                }

                fs.writeFile(gastosFilePath, JSON.stringify(gastosData, null, 2), (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(true);
                    }
                });
            }
        });
    });
};

module.exports = {
    getAllGastos,
    addGasto,
    updateGasto,
    deleteGasto
};