const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

// Enable electron-reload for hot reload
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
});

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1700,
        height: 900,
       // frame: false, // Add this line for a frameless window
        webPreferences: {
          nodeIntegration: true
        }
      });
    

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, '/view/index.html'),
      protocol: 'file:',
      slashes: true,
    }),
  );
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
