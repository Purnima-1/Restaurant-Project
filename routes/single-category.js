const express = require('express');
const router = express.Router();

router.get('/single-category', (req,res) => {
    res.render('single-category.ejs')
})


module.exports = router;