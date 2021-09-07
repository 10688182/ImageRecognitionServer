"use strict";

const mobilenet = require('@tensorflow-models/mobilenet');
const tfnode = require('@tensorflow/tfjs-node');

class MobilenetClassification {
  model;

  async loadModel() {
    if (this.model) {
      return this.model;
    }
    
    this.model = await mobilenet.load({
      version: 2,
      alpha: 1.0,
      modelUrl: undefined,
    });
    return this.model;
  };

  async classify(imageBuffer, topk = 3) {
    if (!this.model) {
      await this.loadModel();
    };

    const tfimage = tfnode.node.decodeImage(imageBuffer);
    return this.model?.classify(tfimage, topk);
  };
};

module.exports = new MobilenetClassification();