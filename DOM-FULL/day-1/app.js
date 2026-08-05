/* 
DOM - > document object model

html -> manipulation 

html + css - > inteactivity -> js 

DOM ->html ko convert karta hai obj me or -> js ko de deta hai 

browser -> clg 
 -> dom -> document , event ,dom api

 -> bom  ->clg, history, navigator ,window , locations ...

 -> web api -> fetch , settimeOUt , webSoket , local-storage

 -> v8 engien gives js -> variabels, arrays , obj, promisses , functions , classes

( 
 DOM -> browser =(proposnal) server  221d

 "  <main> <h1>hello viewer</h1> </main>"
 (1)
 1>browser me html "string" formet me ata hai 
 2> then browser's html parse *parsing it  
 3> tree -> jo 2.parsing html ko convert karta hai tree me -> tree is DOM_TREE 
(2)
 now * styling -> css
  1>browser me css "string" formet me ata hai 
 2> then browser's css  parse *parsing it 
 3>CSSOM -> css obj mpdel me convert karta hai cssom parse 
(3)
DOMTREE +CSSOM = Render-tree
)

now above clear
(1)
DOMTREE -> html(string) -> parsing(convert) -> tree
(2)
css styling - > css(string) -> parsing(convert) ->tree(cssom)
(3)
domTree + CSSOM = reander tree

this hole above proccese called
html to browser pipeline

dom hi hai jo html ko letar hai parse karta hai or js me send karta hai in render tree

tokenization -> html string  -> pasing -> token(tokenization) -> tree -> Dom

Dom is used for manupilating your  html, gives the interactivity

above all are
1>dom piepline
2>dom architecture 
3>conversion and render tree
4> what is dom

5>Manupulation

selection of your elemetes
let allH1 = document.quaryselector('h1');
*/

const h1 = document.querySelector("h1");

// console.log(h1);
// console.dir(h1);
h1.textContent = "hello baccho";
h1.innerHTML = `  <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
        </ul>`;
