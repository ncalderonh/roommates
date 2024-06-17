const express = require('express');
const router = express.Router();
const { getAllGastos, addGasto, updateGasto, deleteGasto } = require('../models/gastosQueries');

router.get('/', async (req, res) => {
    try {
        const gastos = await getAllGastos();
        res.json(gastos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newGasto = req.body;
        await addGasto(newGasto);
        res.json(newGasto);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/', async (req, res) => {
    try {
        const { id, roommate, descripcion, monto } = req.body;
        const updatedGasto = await updateGasto(id, roommate, descripcion, monto);
        res.json(updatedGasto);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/', async (req, res) => {
    try {
        const { id } = req.query;
        await deleteGasto(id);
        res.json({ message: 'Gasto eliminado' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
