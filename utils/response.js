export const apiResponse = {
  success: (res, data, statusCode = 200) => {
    return res.status(statusCode).json(data);
  },

  error: (res, message = 'Error occurred', statusCode = 500, errors = null) => {
    const response = {
      success: false,
      message,
    };

    if (errors) {
      response.errors = errors;
    }

    return res.status(statusCode).json(response);
  },
};
