module.exports = (app) => {

    const foo = require('../controllers/foo.controller');

    // router = ...router...

    app.get('/', foo.getBar);

}