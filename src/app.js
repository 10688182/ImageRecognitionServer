"use strict";

const express = require('express');
const fileUpload = require('express-fileupload');
const mobilenetClassifier = require("./classifier");

const app = express();
app.use(fileUpload());
app.post('/classify', async function(req, res) {
  const imageObject = req.files.image;
  try {
    if(!imageObject) throw new Error("No image provide");
    const predictions = await mobilenetClassifier.classify(
      imageObject.data,
    );
    res.json(predictions);
  } catch (error) {
    res.json({ message: error.message });
  };
});

module.exports = app;