const { ipcRenderer } = require('electron')
const Showdown = require('showdown')

// Since we disabled nodeIntegration we can reintroduce
// needed node functionality here
process.once('loaded', () => {
  global.ipcRenderer = ipcRenderer
  global.Showdown = Showdown
})
