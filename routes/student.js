const express = require('express');
const Module = require('module');
const path = require('path');
const router = express.Router();

function serveAdmin(res, page) {
    res.sendfile(path.join(__dirname, '..', 'public','admin', page));
    }
function sreverAdminpage(res,page){
    res.sendFile(path.join(__dirname, '..', 'public', 'admin', 'pages', page));
}
router.get ('/signin',(req, res) = serveAdmin(res,'signin.html'));
router.get ('/signup',(req, res) = serveAdmin(res,'signup.html'));
router.get ('/forget_password',(req, res) = serveAdmin(res,'forget_password.html'));
router.get ('/layout',(req, res) = serveAdmin(res,'layout.html'));
Module.exports = Router;

