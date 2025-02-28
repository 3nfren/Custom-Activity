const express = require("express");
const app = express();

app.use(express.json());

app.get("/config.json", (req, res) => {
    res.json({
        name: "Mi Custom Activity",
        description: "Ejemplo de Custom Activity en Marketing Cloud",
        category: "message",
        schema: {
            arguments: {
                execute: {
                    inArguments: [],
                    outArguments: []
                }
            }
        }
    });
});

app.post("/execute", (req, res) => {
    console.log("Datos recibidos:", req.body);
    res.json({ success: true });
});

// Reemplaza la última línea (app.listen) con:
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));