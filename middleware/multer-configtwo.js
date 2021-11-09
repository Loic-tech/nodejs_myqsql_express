const multer = require('multer');
const path = require('path');

const MIME_TYPES = {
  'fichier/pdf': 'pdf',
  'fichier/docx': 'docx'
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'fichierspdf');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  }
});

module.exports = multer({storage: storage}).single('file');