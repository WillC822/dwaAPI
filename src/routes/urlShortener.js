const url = require('../../models/urlShort');
const path = require('path');
const urlGen = require('../src/urlRand')

mosule.exports = (express) => {
  const router = express.Router();

  //allows home page to load
  router.post('url', (req,res) => {
    url.create(new, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
  });
});
  //loads default page
  router.get('url', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
  });

  //allows id to return specicic info
  router.get('/url/:id', (req, res) =>{
    const reqParam = req;
    url.find(req,body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  //alloes access to update route
  router.post('/url/:id', (req, res) =>{
    const reqParam = req;
    url.update(req,body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  //alloes access to delete route
  router.delete('/url/:id', (req, res) =>{
    const reqParam = req;
    url.destroy(req,body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  router.get('/url/:id', (req, res) =>{
    const reqParam = req;
    url.find(req,body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });
  return router;
};
