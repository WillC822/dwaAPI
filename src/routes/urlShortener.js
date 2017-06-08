const url = require ('../models/urlShort');
const path = require ('path');

module.exports = (express) => {
  const router = express.Router();

  //Create
  router.post('url', (req,res) => {
    url.create(req.body, (err) => {
            res.status(500).json(err);
        }, (data) => {
            res.status(200).json(data);
        })
    });
  //Read All
  router.get('/url', (req, res) => {
      user.findAll( (err) => {
          res.status(500).json(err);
      }, (data) => {
          res.status(200).json(data);
      })
  });

  //Read One(find only one user)
  router.get('/url/:id', (req, res) => {
      req.body.id = req.params.id;
      user.findAll(req.body, (err) => {
          res.status(500).json(err);
      }, (data) => {
          res.status(200).json(data);
      })
  });

  //Update
  router.post('/url/:id', (req, res) => {
      req.body.id = req.params.id;
      user.update(req.body, (err) => {
          res.status(500).json(err);
      }, (data) => {
          res.status(200).json(data);
      })
  });

  //Destroy(find only one user)
  router.delete('/url/:id', (req, res) => {
      req.body.id = req.params.id;
      user.destroy(req.body, (err) => {
          res.status(500).json(err);
      }, (data) => {
          res.status(200).json(data);
      });
  });
}
