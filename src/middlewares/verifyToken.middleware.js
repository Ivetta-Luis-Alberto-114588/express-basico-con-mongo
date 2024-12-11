const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = async (req, res, next) => {
    const authHeader = req.header("Authorization");

    if (!authHeader) {
        return res.status(401).send("Token requerido");
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).send("Token requerido");
    }

    try {
        const decoded = await jwt.verify(token, process.env.JWT);
        req.user = decoded;
        next();
    } catch (err) {
        console.log("Error al verificar el token:", err.message);
        return res.status(401).send("Token no válido");
    }
};

module.exports = {
    verifyToken,
};