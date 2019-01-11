/* CONFIG ROUTES INDEX ALL OF ROUTES BEFORE IMPORT TO APP.JS */
/**
 * create all route for project
 */

const express = require('express');

const users = require('./modules/user.route');
const categories = require('./modules/category.route');
const tags = require('./modules/tag.route')

const router = express.Router();

router.use('/users', users)
router.use('/categories', categories)
router.use('/tags', tags)

module.exports = router;