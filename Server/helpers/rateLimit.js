const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 menit
  max: 3, // batasi setiap IP ke 3 permintaan per windowMs
  keyGenerator: function (req) {
    return req.body.email; // atau gunakan `username` atau field lainnya
  },
  handler: function (req, res, next) {
    const err = new Error('banned');
    err.status = 429;

    next(err);
  },
});

module.exports = loginLimiter;
