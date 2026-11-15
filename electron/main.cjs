const { app, BrowserWindow, shell, session } = require('electron');
const path = require('node:path');
function createWindow(){
  const win = new BrowserWindow({
    width:1440,height:940,minWidth:900,minHeight:640,
    backgroundColor:'#050b07',
    title:'Lua 2 Gui',
    autoHideMenuBar:true,
    webPreferences:{contextIsolation:true,nodeIntegration:false,sandbox:true}
  });
  win.loadFile(path.join(__dirname,'..','www','index.html'));
  win.webContents.setWindowOpenHandler(({url})=>{
    if(url.startsWith('https://')||url.startsWith('http://')) shell.openExternal(url);
    return {action:'deny'};
  });
  win.webContents.on('will-navigate',(event,url)=>{
    if(!url.startsWith('file://')){event.preventDefault();if(url.startsWith('https://')||url.startsWith('http://'))shell.openExternal(url);}
  });
}
app.whenReady().then(()=>{
  session.defaultSession.setPermissionRequestHandler((_wc,permission,callback)=>callback(['clipboard-read','clipboard-sanitized-write'].includes(permission)));
  createWindow();
  app.on('activate',()=>{if(BrowserWindow.getAllWindows().length===0)createWindow()});
});
app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit()});
