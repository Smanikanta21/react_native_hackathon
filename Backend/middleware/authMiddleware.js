const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
  const { token } = req.cookies

  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const ourUser = await prisma.user.findUnique({
      where : {
        email : decoded.email
      }
    })
    req.user = ourUser
    next(); 
  } catch (err) {
    return res.status(403).json({ error: "Invalid or expired token." });
  }
};

module.exports = { authMiddleware }