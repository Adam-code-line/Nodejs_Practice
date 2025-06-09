var express = require('express');
var router = express.Router();
const {formidable} = require('formidable');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/portrait', function(req, res, next) {
  res.render('portrait');
});

router.post('/portrait', function(req, res, next) {
   const form = formidable({
    multiples: true,
    uploadDir:__dirname + '/../public/images', keepExtensions: true });

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }

    let url = '/images/' + files.portrait[0].newFilename;

    res.send(url)
  });
});

module.exports = router;
