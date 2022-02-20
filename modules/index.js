/**********************************************
 *  GH-StatsBot - A GitHub Analytics Tool
 * 
 *  Copyright ©2022 Greg Bulmash
 *  Licensed under MIT License
 * 
 *  This file is the command/control plane
 *  for the 5 included modules.
 *  micro-cloner, README-tracker, stats-reporter,
 *  stats-store, traffic-collector
 *  
 *  Drill down into each component's directory for
 *  instructions on how to implement them as a standalone
 *  service.
 * 
 *********************************************/
// REQUIRED COMPONENTS
 require('dotenv').config()
 const store = require('./stats-store/stats.js');

 //OPTIONAL (must have one - comment out the ones you do not want to use)
 const cloner = require('./micro-cloner/cloner.js');
 const tracker = require('./README-tracker/tracker.js');
 const traffic = require('./traffic-collector/traffic.js');

 //OPTIONAL
 const reporter = require('./stats-reporter/reporter.js');

