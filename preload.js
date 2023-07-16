/**
 * The preload script runs before. It has access to web APIs
 * as well as Electron's renderer process modules and some
 * polyfilled Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */

const { ipcRenderer, contextBridge } = require('electron');
contextBridge.exposeInMainWorld(
  'electron', // window.electron
  {
    staticValues
  }
)

function staticValues() {
  let valueList = []

  valueList = valueList.concat(
    ['chrome', 'node', 'electron'].map(function (type) {
      return [type, process.versions[type]];
    })
  );

  return Object.fromEntries(valueList)
}