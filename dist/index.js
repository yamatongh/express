"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3001;
app.use(express_1.default.json());
app.get('/api/test', (req, res) => {
    res.json({ message: 'API is working!' });
});
app.post('/api/postest', (req, res) => {
    res.send(`Received POST data: ${JSON.stringify(req.body)}`);
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
