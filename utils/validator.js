
module.exports = {
    user: (app, req, res) => {
        req.assert('name', 'Missing name parameter').notEmpty();
        req.assert('email', 'Wrong or missing email parameter').isEmail().notEmpty();

        let errors = req.validationErrors();

        if(errors) {
            app.utils.error.send(errors, req, res);
            return;
        }

        return true;
    }
}