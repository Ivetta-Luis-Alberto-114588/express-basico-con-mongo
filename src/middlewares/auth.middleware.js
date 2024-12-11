const authAdmin = (req, res, next) => {
    
    if (!req.user || req.user.role !== "admin") {
        return res.status(403).send("No tienes permisos de administrador");
    }
    
    next();
}

module.exports = {
    authAdmin
}