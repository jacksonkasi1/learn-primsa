const HttpStatus = require('http-status-codes');
const authorHandler = require('../handlers/author');

exports.getAllauthors = async (req, res) => {
  try {
    const getAllauthors = await authorHandler.getAllauthors();
    res.status(HttpStatus.StatusCodes.OK).send(getAllauthors);
  } catch (error) {
    console.log(error.message);
    res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).send({
      success: false,
      message: error.message || 'Internal Server Error',
    });
  }
};
