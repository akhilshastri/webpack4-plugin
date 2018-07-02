
import(/* webpackChunkName: "projects" */ './file2.js')
    .then(() => console.log('file2 loaded'));

const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;
console.log('h3');