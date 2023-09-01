const { ipcMain } = require("electron");

ipcMain.on("files", (event, data) => {
  console.log(data);
  event.reply("files", "Receive with success");
});
