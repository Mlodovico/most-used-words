const { ipcMain } = require("electron");
const pathToRows = require("./pathToRows");

ipcMain.on("process-subtitles", (event, paths) => {
  console.log(paths);
  pathToRows(paths).then(rows => {
     console.log(rows)
     event.reply("process-subtitles", [

     ])
    });
});
