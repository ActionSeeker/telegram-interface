const { app, BrowserWindow } = require('electron')
let mainWindow = null

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // on macOS it is common to re-create a window even after all windows have been closed
  if (mainWindow === null) {
    mainWindow = createMainWindow()
  }
})

app.on('ready', function () {
  mainWindow = new BrowserWindow({ width: 800, height: 600 })
  mainWindow.loadURL('file://' + __dirname + '/index.html')
  mainWindow.openDevTools()
  mainWindow.on('closed', function () {
    mainWindow = null
  })
})
