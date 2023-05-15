"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = (app) => {
    app.use('/users', (req, res) => {
        res.json({ message: 'hi' });
    });
};
exports.default = router;
