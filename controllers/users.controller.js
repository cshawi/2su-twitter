const queries = require('../queries/users.queries');
const multer = require('multer');
const path = require('path');


const upload = multer({ 
  storage : multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, path.join( __dirname, "../public/images/avatars" ));
    },
    filename: (req, file, callback) => {
      callback(null, `${ Date.now() }-${ file.originalname }`  );
    }
  })
})

exports.viewSignUpForm = (req, res, next) => {
  res.render('users/user-form', {errors: null, isAuthenticated: false, currentUser: null});
}

exports.signUp = async (req, res, next) => {
  try {
    const user = await queries.create(req.body);
    res.redirect('/');
  } catch (e) {
    res.render('users/user-form', {errors: [ e.message ]});
  }
}

exports.uploadImage =  [
  upload.single('avatar'),
  async (req, res, next) => {
    try {
      const user = req.user;
      user.avatar = `/images/avatars/${req.file.filename}`;
      await user.save();
      res.redirect('/');
    } catch (e) {
      next(e);
    }
  }
]