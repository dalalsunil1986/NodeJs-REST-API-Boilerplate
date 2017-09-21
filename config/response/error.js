'use script';

module.exports = (res, error) => {
    return res.status(500).send({
        'status': "failure",
        'name': error.name,
        'message': error.message,
        'stack': error.stack
    });
};
