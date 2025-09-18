const { app, BrowserWindow } = require("electron");

app.whenReady().then(() => {
  const window = new BrowserWindow({
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
    },
    frame: false,
    transparent: true,
  });
  window.loadFile("index.html");
});
