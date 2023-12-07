const errorHandler = (error, req, res, next) => {
  let statusCode = 500;
  let message = 'Internal Server Error';

  if (error.message === 'not_event_found') {
    statusCode = 404;
    message = 'No event available';
  }

  if (error.message === 'banned') {
    statusCode = 429; // Too Many Requests
    message =
      'Too much attempt login with invalid password/username, try again in 5 minutes';
  }

  if (error.message === 'user_is_verified') {
    statusCode = 400;
    message = 'Your account already activated, login to continue';
  }

  if (error.message === 'not_found_category') {
    statusCode = 404;
    message = 'There is none category found';
  }

  if (error.message === 'verify_not_found') {
    statusCode = 401;
    message = 'Failed, token not valid';
  }

  if (error.message === 'verified_false') {
    statusCode = 403;
    message = 'Please check your email and verify your account';
  }

  if (
    error.message === 'user_not_found' ||
    error.message === 'invalid_password'
  ) {
    statusCode = 401;
    message = 'Invalid Username/Password';
  }

  if (
    error.name === 'SequelizeValidationError' ||
    error.name === 'SequelizeUniqueConstraintError' ||
    error.name === 'SequelizeDatabaseError'
  ) {
    statusCode = 400;
    message = error.errors[0].message;
  }

  if (error.message === 'Unauthorized' || error.name === 'JsonWebTokenError') {
    statusCode = 401;
    message = 'Please login first to your account';
  }

  if (error.message === 'Forbidden') {
    statusCode = 403;
    message = 'You dont have access to this action';
  }

  res.status(statusCode).json({
    message,
  });
};

module.exports = errorHandler;
