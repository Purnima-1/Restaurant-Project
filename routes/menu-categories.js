const express = require('express');
const router = express.Router();

router.get('/menu-categories', (req,res) => {
    res.render('menu-categories.ejs')
})


module.exports = router;