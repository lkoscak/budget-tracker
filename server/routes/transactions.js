const express = require('express');

const router = express.Router();

router.route('/')
    .get((req, res, next) => {
        res.status(200).json({
            success:true,
        });
    })
    .post((req, res, next) => {
        res.status(201).json({
            success:true
        });
    });

router.route('/:id')
    .delete((req, res, next) => {
        res.status(200).json({
            success:true
        });
    });

module.exports = router;