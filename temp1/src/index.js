
[1,2].forEach(i=>{
    setTimeout(()=>{
    import(/* webpackChunkName: "projects" */ `./file${i}.js`)
        .then(() => console.log(`file${1} loaded`));
    },i* 2000)
});

const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;
console.log('h3');