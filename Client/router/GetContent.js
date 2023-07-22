const express = require("express");
const router = express.Router();

require('../../db/conn');
const HTMLTOPIC = require('../../Admin/Models/htmlModel');
const CSSTOPIC = require('../../Admin/Models/cssModel');
const JAVASCRIPTTOPIC = require('../../Admin/Models/JavascriptModel');
const BOOTSSTRAPTOPIC = require('../../Admin/Models/BootStrapModel');
const PHPTOPIC = require('../../Admin/Models/PhpModel');
const PYTHONTOPIC = require('../../Admin/Models/PythonModel');

router.get('/gethtmlcontent', async (req, res) => {
        let success = flase;
        try {

                let findHtmlTitle = await HTMLTOPIC.find();
                res.send(findHtmlTitle)
        } catch (error) {
                success = true;
                res.status(400).json({ "error": "not send", success })
        }

})
router.get('/getcsscontent', async (req, res) => {
        let success = flase;
        try {

                let findCssTitle = await CSSTOPIC.find();
                res.send(findCssTitle)
        } catch (error) {
                success = true;
                res.status(400).json({ "error": "not send", success })
        }



})
router.get('/getjavascriptcontent', async (req, res) => {
        let success = flase;
        try {

                let findJavascriptTitle = await JAVASCRIPTTOPIC.find();
                res.send(findJavascriptTitle)
        } catch (error) {
                success = true;
                res.status(400).json({ "error": "not send", success })
        }

})
router.get('/getbootsstrapcontent', async (req, res) => {
        let success = flase;
        try {
                let findbootsstrapTitle = await BOOTSSTRAPTOPIC.find();
                res.send(findbootsstrapTitle)
        } catch (error) {
                success = true;
                res.status(400).json({ "error": "not send", success })
        }



})
router.get('/getphpcontent', async (req, res) => {
        let success = flase;
        try {
                let findphpTitle = await PHPTOPIC.find();
                res.send(findphpTitle)
        } catch (error) {
                success = true;
                res.status(400).json({ "error": "not send", success })
        }


})
router.get('/getpythoncontent', async (req, res) => {
        let success = flase;
        try {

                let findPythonTitle = await PYTHONTOPIC.find();
                res.send(findPythonTitle)
        } catch (error) {
                success = true;
                res.status(400).json({ "error": "not send", success })
        }

})

module.exports = router;