import { verifyToken } from "../utils/tokens.js";

const validateAccess = (req, res, next) => {
  try {
    const { cookiecine } = req.cookies;
    if (!cookiecine) throw new Error("Acceso denegado");
    const { payload } = verifyToken(cookiecine);
    if (!payload) throw new Error("Acceso denegado");
    req.usuario = payload;
    next();
  } catch (error) {
    next(error);
  }
};

export default validateAccess