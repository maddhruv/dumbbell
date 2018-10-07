#!/usr/bin/env node

const notifier = require('node-notifier')

notifier.notify({
  title: 'Dumbbell',
  message: 'Command completed!',
  sound: true
})

console.log("\007")
