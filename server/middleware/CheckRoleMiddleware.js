const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  if (req.method === 'OPTIONS') next();

  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Пользователь не авторизован' });

    const decodedUserData = jwt.verify(token, process.env.SECRET_KEY);
    if (decodedUserData.role !== 'ADMIN') return res.status(403).json({ message: 'Отсутствует доступ' });

    req.user = decodedUserData;

    next();
  } catch (error) {
    res.status(401).json({ message: 'Пользователь не авторизован' });
  }
};
