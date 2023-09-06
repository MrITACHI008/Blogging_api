const jwt = require('jsonwebtoken');
const config = require('../config/config');

// Middleware to authenticate user
exports.authenticateUser = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, config.secretKey);
    req.user = { _id: decodedToken.userId };
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Authentication failed' });
  }
};
