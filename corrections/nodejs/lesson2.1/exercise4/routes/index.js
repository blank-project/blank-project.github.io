var express = require('express');
var router = express.Router();

const os = require('os');

const GIGABYTES_TO_BYTES = 1000 * 1000 * 1000;


/* GET home page. */
router.get('*', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    host : req.hostname,
    ip : req.ip,
    path : req.path,
    headers : {
      'Host' : req.get('Host'),
      'Accept' : req.get('Accept'),
      'User-Agent' : req.get('User-Agent'),
      'Referer' : req.get('Referer'),
      'Date' : req.get('Date')
    },
    cpus : os.cpus(),
    platform : os.platform(),
    memory : [(os.totalmem() - os.freemem()) / GIGABYTES_TO_BYTES, os.totalmem() / GIGABYTES_TO_BYTES],
    uptime : os.uptime()
  });
});

module.exports = router;
