const express = require('express');
const WeatherInfo = require('../models/weatherModel.js');


const router = express.Router();
router.get('/', async (req, res) => {
    try {
        const wholeData = await WeatherInfo.find();
        res.json(wholeData);
    } catch (err) {
        res.json({ message: err })
    }
});
router.get('/now', async (req, res) => {
    try {
        const wholeData = await WeatherInfo.find().limit(1).sort({$natural:-1});
        res.json(wholeData);
    } catch (err) {
        res.json({ message: err })
    }
});

router.post('/add', async (req, res) => {
    const weather = new WeatherInfo({
        dayCelsius: req.body.dayCelsius,
        date: Date.now()
    });
    try {
        const savedPost = await weather.save();
        res.json(savedPost);
    }
    catch (err) {
        res.json({ message: err })
    }
});

router.get('/id/:dayId', async (req, res) => {
    try {
        const search = await WeatherInfo.findById(req.params.dayId);
        res.json(search);
    } catch (err) {
        res.json({ message: err });
    }
});

router.delete('/delete/:dayId', async(req,res)=>{
    try{
        const dele = await WeatherInfo.remove({_id:req.params.dayId});
        res.json(dele);
    }catch(err){

    }
});
router.patch('');


module.exports = router;