require('dotenv').config();
const mongoose = require('mongoose');
const Module = require('../models/Module');
const Tool = require('../models/Tool');
const Scenario = require('../models/Scenario');
const modulesSeed = require('./modulesSeed');
const toolsSeed = require('./toolsSeed');
const scenariosSeed = require('./scenariosSeed');
const connectDB = require('../config/db');

const importData = async () => {
  try {
    await connectDB();
    await Module.deleteMany();
    await Tool.deleteMany();
    await Scenario.deleteMany();

    await Module.insertMany(modulesSeed);
    await Tool.insertMany(toolsSeed);
    await Scenario.insertMany(scenariosSeed);

    console.log('Database seeded successfully with ' + scenariosSeed.length + ' scenarios!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data: ' + error.message);
    process.exit(1);
  }
};

importData();
