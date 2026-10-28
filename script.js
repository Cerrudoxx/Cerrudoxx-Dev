let _={t:"PRE",o:function(o,n){var i=o.i.element;i.style.backgroundColor=o.i.background,i.style.color=o.i.color,i.style.fontWeight=o.i.weight,o.rows==e&&o.cols==p||(p=o.cols,e=o.rows,d.length=0);for(;i.childElementCount<e;){var t=document.createElement("span");t.style.display="block",i.appendChild(t)}for(;i.childElementCount>e;)i.removeChild(i.lastChild);for(let t=0;t<e;t++){var l=t*p;let e=!1;for(let t=0;t<p;t++){var a=t+l,r=n[a],u=d[a];((t,e)=>"object"==typeof t&&"object"==typeof e&&t.char===e.char&&t.weight===e.weight&&t.color===e.color&&t.background===e.background)(r,u)||(e=!0,d[a]={...r})}if(0!=e){let e="",a={},r=!1;for(let t=0;t<p;t++){var f=n[t+l];if(f.l&&(r&&(e+="</span>",a={},r=!1),e+=f.l),!((t,e)=>t.weight===e.weight&&t.color===e.color&&t.background===e.background)(f,a)){r&&(e+="</span>");var s=f.color===o.i.color?null:f.color,c=f.background===o.i.background?null:f.background,h=f.weight===o.i.weight?null:f.weight;let t="";s&&(t+="color:"+s+";"),c&&(t+="background:"+c+";"),h&&(t+="font-weight:"+h+";"),t=t&&' style="'+t+'"',e+="<span"+t+">",r=!0}e+=f.char,(a=f).u&&(r&&(e+="</span>",a={},r=!1),e+=f.u)}r&&(e+="</span>"),(i.children[t]||i.childNodes[t]).innerHTML=e}}}},d=[],p,e;class D{constructor(){this.frames=0,this.h=0,this.p=0}update(t){return this.frames++,t>=this.h+1e3&&(this.p=1e3*this.frames/(t-this.h),this.h=t,this.frames=0),this.p}}var I={store:function(t,e){return!0},restore:function(t,e={}){t=JSON.parse(localStorage.getItem(t));return Object.assign(e,t),e},clear:function(t){localStorage.removeItem(t)}};let a={canvas:{t:"CANVAS",o:function(t,a){var e=t.i.element,r=devicePixelRatio,o=t.cols,n=t.rows,i=t.m,l=i.g,u=Math.round(i.lineHeight),f=t.i;f.canvasSize?(e.width=f.canvasSize.width*r,e.height=f.canvasSize.height*r,e.style.width=f.canvasSize.width+"px",e.style.height=f.canvasSize.height+"px"):(e.width=t.width*r,e.height=t.height*r);var s=" "+i.fontSize+"px "+i.fontFamily,c=f&&f.background?f.background:"white",h=f&&f.color?f.color:"black",d=f&&f.weight?f.color:"400",p=(e.style.backgroundColor=f.background||"white",e.getContext("2d"));p.fillStyle=c,p.fillRect(0,0,e.width,e.height),p.save(),p.scale(r,r),f.canvasOffset&&(t=f.canvasOffset,i=Math.round("auto"==t.x?(e.width/r-o*l)/2:t.x),f=Math.round("auto"==t.y?(e.height/r-n*u)/2:t.y),p.translate(i,f));p.fillStyle=h,p.textBaseline="top";for(let e=0;e<n;e++)for(let t=0;t<o;t++){var m=a[e*o+t],w=t*l,y=e*u;m.background&&m.background!=c&&(p.fillStyle=m.background||c,p.fillRect(Math.round(w),y,Math.ceil(l),u)),p.font=(m.weight||d)+s,p.fillStyle=m.color||h,p.fillText(m.char,w,y)}p.restore()}},text:_},T={element:null,cols:0,rows:0,once:!1,p:30,v:"text",background:"",color:"",weight:"",M:!1,A:!1};function W(S,e,N={}){new Promise(function(u){let f={...T,...e,...S.i},s={time:0,frame:0,j:0},c="currentState";f.A&&(I.restore(c,s),s.j++);let h,d=(f.element?"canvas"==f.v?"CANVAS"==f.element.nodeName?h=a[f.v]:console.warn("This renderer expects a canvas target element."):"CANVAS"!=f.element.nodeName?h=a[f.v]:console.warn("This renderer expects a text target element."):(h=a[f.v]||a.text,f.element=document.createElement(h.t),document.body.appendChild(f.element)),[]),p={x:0,y:0,pressed:!1,px:0,k:0,S:!1};var t;window.addEventListener("pointermove",t=>{var e=f.element.getBoundingClientRect();p.x=t.clientX-e.left,p.y=t.clientY-e.top,d.push("pointerMove")}),window.addEventListener("pointerdown",t=>{p.pressed=!0,d.push("pointerDown")}),window.addEventListener("pointerup",t=>{p.pressed=!1,d.push("pointerUp")}),f.element.style.N="normal",f.M||((t=f.element).style.userSelect="none",t.style.webkitUserSelect="none",t.style.C="none",t.dataset.F="false"),document.fonts.ready.then(t=>{let a=3;!function t(){var e;0<--a?requestAnimationFrame(t):(b=function a(r){let t=getComputedStyle(r);let e=t.getPropertyValue("font-family");let o=parseFloat(t.getPropertyValue("line-height"));let n=parseFloat(t.getPropertyValue("font-size"));let i="CANVAS"==r.nodeName?r:document.createElement("canvas");let l=i.getContext("2d");l.font=n+"px "+e;let u=l.measureText("".padEnd(10,"x")).width/10;let f=u/o;let s={B:f,g:u,lineHeight:o,fontFamily:e,fontSize:n,O:function(){let t=a(r);for(var e in t)"number"!=typeof t[e]&&"string"!=typeof t[e]||(s[e]=t[e])}};return s}(f.element),e=$(s,f,b,m),"function"==typeof S.V&&S.V(e,g,N),requestAnimationFrame(k))}()});let m=new D,w=" ",y=Object.freeze({color:f.color,background:f.background,weight:f.weight}),g=[],b;let v=0,M=1e3/f.p,x=s.time,A,j;function k(t){
    try{
        var e=t-v;
        if(e<M){if(!f.once)requestAnimationFrame(k);return}
        var a=$(s,f,b,m),r=(m.update(t),v=t-e%M,s.time=t+x,s.frame++,{x:p.x/b.g,y:p.y/b.lineHeight,pressed:p.pressed,q:{x:p.px/b.g,y:p.k/b.lineHeight,pressed:p.S}});
        if(p.px=p.x,p.k=p.y,p.S=p.pressed,A!=a.cols||j!=a.rows){
            A=a.cols,j=a.rows,g.length=a.cols*a.rows;
            for(let t=0;t<g.length;t++)g[t]={...y,char:w}
        }
        if("function"==typeof S.P&&S.P(a,r,g,N),"function"==typeof S.R)
            for(let e=0;e<a.rows;e++){
                var o=e*a.cols;
                for(let t=0;t<a.cols;t++){
                    var n=t+o,i=S.R({x:t,y:e,index:n},a,r,g,N);
                    g[n]="object"==typeof i&&null!==i?{...g[n],...i}:{...g[n],char:i},Boolean(g[n].char)||0===g[n].char||(g[n].char=w)
                }
            }
        for("function"==typeof S._&&S._(a,r,g,N),h.o(a,g,f);0<d.length;){
            var l=d.shift();
            l&&"function"==typeof S[l]&&S[l](a,r,g)
        }
        if(!f.once)requestAnimationFrame(k);
        u(a);
    }catch(err){
        console.warn("Loop recovery:",err);
        if(!f.once)requestAnimationFrame(k);
    }
}})}function $(t,e,a,r){var o=e.element.getBoundingClientRect(),n=e.cols||Math.floor(o.width/a.g),i=e.rows||Math.floor(o.height/a.lineHeight);return Object.freeze({frame:t.frame,time:t.time,cols:n,rows:i,m:a,width:o.width,height:o.height,i:e,runtime:Object.freeze({j:t.j,p:r.p})})}class J{constructor(t){this.D=t}I(){var t=this.D.getBoundingClientRect();this.T={left:t.left+window.scrollX,top:t.top+window.scrollY,width:t.width,height:t.height}}W(t){return getComputedStyle(this.D).getPropertyValue(t).trim()}width(t){return Math.round(this.T.width/t.g)}height(t){return Math.round(this.T.height/t.lineHeight)}x(t){return Math.round(this.T.left/t.g)}y(t){return Math.round(this.T.top/t.lineHeight)}background(){return getComputedStyle(this.D).backgroundColor}update(t){return{x:x(t),y:y(t),width:width(t),height:height(t)}}}function L(t,e,a){return t<e?e:a<t?a:t}function M(t,e,a){return t*(1-a)+e*a}function H(t,e,a){a=L((a-t)/(e-t),0,1);return a*a*(3-2*a)}function K(t,e,a,r,o){return t<0||r<=t||e<0||o<=e?{}:a[t+e*r]}function U(t,e,a,r,o,n){e<0||o<=e||a<0||n<=a||(e="object"==typeof r[n=e+a*o]?r[n]:{char:r[n]},r[n]={...e,...t})}function X(a,r,t,o,n,i,l,u){for(let e=t;e<t+n;e++)for(let t=r;t<r+o;t++)U(a,t,e,i,l,u)}function Y(t,r,e,o,n,i){let a,l,u=("object"==typeof t?(a=t.text,delete(l={...t}).text):a=t,r),f=e,s=[];return a.split("\n").forEach((t,e)=>{t.split("").forEach((t,e)=>{u=r+e,U({char:t,...l},u,f,o,n,i)});var a=K(r,f,o,n,i),t=K(r+t.length-1,f,o,n,i);s.push({first:a,$:t}),f++}),f=Math.max(e,f-1),{offset:{J:u,L:f},H:s}}function Z(t,o=0){if(0==o){var n=t;let e=0,a=0,r=0;for(let t=0;t<n.length;t++)"\n"==n[t]?(r=0,e++):(r++,a=Math.max(a,r));return{text:n,K:e,maxWidth:a}}{var i,l;let e="",a=0,r=0;for(i of t.split("\n")){let t=0;for(l of i.split(" "))0==t?(e+=l,t=l.length,a=Math.max(a,t)):t+1+l.length<=o?(e+=" "+l,t+=l.length+1,a=Math.max(a,t)):(e+="\n"+l,t=l.length+1,r++);e+="\n",r++}return"\n"==(e=e.slice(0,-1)).charAt(e.length-1)&&r--,{text:e,K:r,maxWidth:a}}}class r{constructor(t,e){this.width=t,this.height=e,this.data=new Array(t*e).fill(0)}U(a,r,o){for(let e=0;e<a.height;e++)for(let t=0;t<a.width;t++){var n=r+t+(e+o)*this.width;this.data[n]=a.get(t,e)}}get(t,e){return t<0||t>=this.width||e<0||e>=this.height?0:this.data[t+e*this.width]}sample(t,e){var t=t*this.width-.5,e=e*this.height-.5,a=Math.floor(t),r=Math.floor(e),o=a+1,n=r+1,t=t-a,e=e-r,r=M(this.get(a,r),this.get(o,r),t),a=M(this.get(a,n),this.get(o,n),t);return M(r,a,e)}print(){let a="";for(let e=0;e<this.height;e++){for(let t=0;t<this.width;t++)a+=this.get(t,e)<.5?"K":"T";a+="\n"}return a}X(){var t=[],e=Math.ceil(this.data.length/32);for(let a=0;a<e;a++){let e=0;for(let t=0;t<32;t++).5<this.data[t+32*a]&&(e|=1<<t);t.push(e)}return t}Y(e,a){for(let t=0;t<a;t++){var r=e[Math.floor(t/32)],o=t%32;this.data[t]=(r>>o)%2!=0?1:0}}}var t="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";let G=new r(8,11),Q={};var tt=[1667446300,1667465059,25443,1667457855,1667457855,16227,50553662,50529027,15971,1667445535,1667457891,7987,50529151,50529087,32515,50529151,50529087,771,50553662,1667457915,32355,1667457891,1667457919,25443,202116159,202116108,16140,808464504,858796080,7731,456352611,857411343,25443,50529027,50529027,32515,2138530659,1667984235,25443,1734828899,1936948079,25443,1667457854,1667457891,15971,1667457855,50544483,771,1667457854,1868784483,6305371,1667457855,858987327,25443,100885310,1613764620,15971,404232447,404232216,6168,1667457891,1667457891,15971,1667457891,912483171,2076,1801675619,2137746283,13878,912483171,1664490524,25443,858993459,202120755,3084,811622527,50727960,32515,1801675582,1667984235,15971,404626456,404232216,32280,1616929598,101455920,32515,1616929598,1616928828,15971,1010315296,813642550,12336,50529151,1616928831,15971,50529852,1667457855,15971,1616929663,202119216,3084,1667457854,1667457854,15971,-471604290,-522125597,8429232],et=8,at=11,rt=t,ot=et*at,nt=Math.ceil(ot/32);for(let t=0;t<rt.length;t++){var it=new r(et,at),o=t*nt,o=(it.Y(tt.slice(o,o+nt),ot),rt[t]);Q[o]=it}var n={width:8,height:11,char:function(t){return Q[t]||G},Z:t};let i=["JCH","HPC","QPU","VQE","MPI","LUS","CUN","UEX"];l=3,u=0,lt=0,f=" "+n.Z;
let c=["J","C","H"].map(x=>f.indexOf(x)),ft=[...c],st=new Array(l).fill(0),ct=0;
var h,t=n.width*l+lt*(l-1),ht=n.height;let g=new r(t,ht);
for(let _k=0;_k<l;_k++)g.U(n.char(f[c[_k]]), (n.width+lt)*_k, 0);var _lstW="";function dt(t,e){
    let period=480;
    let frameInPeriod=t.frame%period;
    if(t.frame>0&&frameInPeriod===0){
        ct=(ct+1)%i.length;
        var nxt=i[ct];
        for(let k=0;k<l;k++){ft[k]=f.indexOf(nxt[k]);st[k]=3*k;}
    }
    if(frameInPeriod<45&&t.frame%2===1){
        for(let k=0;k<l;k++){
            if(st[k]>0)st[k]--;
            else if(c[k]!==ft[k])c[k]=(c[k]+1)%f.length;
        }
        for(let k=0;k<l;k++){
            var posX=(n.width+lt)*k;
            g.U(n.char(f[c[k]]||" "),posX,0);
        }
    }else if(frameInPeriod>=45){
        let needsDraw=false;
        for(let k=0;k<l;k++){
            if(c[k]!==ft[k]){c[k]=ft[k];needsDraw=true;}
        }
        if(needsDraw||frameInPeriod===45){
            for(let k=0;k<l;k++){
                var posX=(n.width+lt)*k;
                g.U(n.char(f[ft[k]]||" "),posX,0);
            }
        }
    }
}let{min:pt,max:b,cos:mt,floor:v,random:wt}=Math,A=[],j=(A.push("  "),A.push("+ "),A.push(" ."),A.push("+ "),A.push(" ,"),A.push("· "),A.push(": "),A.push("• ")," .,·-•─~+:;=*π’“”┐┌┘└┼├┤┴┬│╗╔╝╚╬╠╣╩╦║░▒▓█▄▀▌▐■!?&#$@aàbcdefghijklmnoòpqrstuüvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789%()[]{}/\\_<>|áéíóúñÁÉÍÓÚÑ,.\"'–—".split("")),k=" .·•-+=:;*ABC0123!*".split(""),S=" ·-•~+:*abcXYZ*".split(""),N=v(wt()*A.length);k[k.length-1]=A[N][0],S[S.length-1]=A[N][1];for(h of A)-1==j.indexOf(h[0])&&j.push(h[0]),-1==j.indexOf(h[1])&&j.push(h[1]);let C=j.reduce((t,e,a)=>(t[e]=a,t),{});function F(t){var e=null==t?0:t.length;return e?t[Math.floor(Math.random()*e)]:void 0}function B(t,e,a){return m(M(t.r,e.r,a),M(t.G,e.G,a),M(t.b,e.b,a))}function m(t,e,a,r=1){return{r:t,G:e,b:a,a:r}}function O(t){var e=Math.round(t.r).toString(16).padStart(2,"0"),a=Math.round(t.G).toString(16).padStart(2,"0"),r=Math.round(t.b).toString(16).padStart(2,"0");return void 0===t.a?"#"+e+a+r:"#"+e+a+r+Math.round(255*t.a).toString(16).padStart(2,"0")}function w(t){return{a:1,r:t>>16&255,G:t>>8&255,b:255&t}}let z=[w(43690),w(11141120),w(11162880),w(5592575),w(5635925),w(5636095),w(16733525),w(16733695),w(16777215)],V={a:w(5635925),b:w(5636095)},q={...V},yt=(()=>{let a=256,r=new Array(a),o=new Array(512);for(let t=0;t<a;t++)r[t]=Math.random(),o[t]=t;for(let t=0;t<a;t++){var e=Math.floor(Math.random()*a);[o[t],o[e]]=[o[e],o[t]],o[t+a]=o[t]}let n,i,l,u,f,s,c,h,d,p,m,w,y,g,b,v;return function(t,e){return n=Math.floor(t),i=Math.floor(e),l=t-n,u=e-i,f=(n+a)%a,s=(1+f+a)%a,c=(i+a)%a,h=(1+c+a)%a,d=r[o[o[f]+c]],p=r[o[o[s]+c]],m=r[o[o[f]+h]],w=r[o[o[s]+h]],y=H(0,1,l),g=H(0,1,u),b=M(d,p,y),v=M(m,w,y),M(b,v,g)}})(),E={tt:0,et:0,rt:0,ot:0,scale:0,data:[]};var gt=[],bt=null,vt=1,P,R;"ontouchstart"in window?document.addEventListener("touchstart",function(t){if(t.target.href&&!t.target.href.startsWith("javascript:")&&!t.target.id?.startsWith("tui-")){t.preventDefault();location.href=t.target.href}}):document.addEventListener("mousedown",function(t){if(0===t.button&&t.target.href&&!t.target.href.startsWith("javascript:")&&!t.target.id?.startsWith("tui-")){t.preventDefault();"_blank"==t.target.target?window.open(t.target.href):location.href=t.target.href}});var Mt=Object.freeze({__proto__:null,V:function(t,e,a){P=t.cols,R=t.rows;var r=P*R;for(let t=0;t<r;t++){var o=Math.floor(t/P),n=t%P;E.data[t]={nt:0,it:Math.floor(n/3+2*o)+2,lt:0}}},R:function(t,e,a,r,o){var n=t.index,i=b(E.data[n].ut,E.data[n].nt);return(e=(e=(t.x-a.x)*e.m.B)*e+(a=t.y-a.y)*a)<E.rt&&(a=C[0]+v(E.rt-e),E.data[n].lt=a,E.data[n].it=1),E.data[n].nt=.95*i,{char:(e=(t.x+t.y)%2?k:S)[v(i*(e.length-1))],color:.99<=i?E.tt:E.et}},_:function(r,t,e,a){if("screensaver"!=a.mode){var o=r.m,n=[];let a=0;var i,l,u=bt.W("--display-mode");for(i of gt){
    if(i.D.offsetParent===null||i.D.classList.contains("hidden"))continue;
    i.I();
    var c=i.x(o),h=i.y(o),d=i.width(o),ht=i.height(o);
    if(i.D.dataset.raw){
        let isDesktop=r.cols>=72&&d>=70;
        let lines=isDesktop?[
            "       __            __          ______                         __",
            "      / /__  _______/_/______   / ____/__  ____________  ______/ /___",
            " __  / / _ \\/ ___/ / / / ___/  / /   / _ \\/ ___/ ___/ / / / __  / __ \\",
            "/ /_/ /  __(__  ) /_/ (__  )  / /___/  __/ /  / /  / /_/ / /_/ / /_/ /",
            "\\____/\\___/____/\\__,_/____/   \\____/\\___/_/  /_/   \\__,_/\\__,_/\\____/"
        ]:[
            "       __            __",
            "      / /__  _______/_/______",
            " __  / / _ \\/ ___/ / / / ___/",
            "/ /_/ /  __(__  ) /_/ (__  )",
            "\\____/\\___/____/\\__,_/____/",
            "  ______                         __",
            " / ____/__  ____________  ______/ /___",
            "/ /   / _ \\/ ___/ ___/ / / / __  / __ \\",
            "/ /___/  __/ /  / /  / /_/ / /_/ / /_/ /",
            "\\____/\\___/_/  /_/   \\__,_/\\__,_/\\____/"
        ];
        let maxW=isDesktop?70:40;
        let startX=Math.max(c,Math.floor(c+(d-maxW)/2));
        let startY=h;
        for(let row=0;row<lines.length;row++){
            let lineStr=lines[row];
            for(let col=0;col<lineStr.length;col++){
                let ch=lineStr[col];
                if(ch&&ch!==" "){
                    U({char:ch,color:"rgb(250, 250, 250)"},startX+col,startY+row,E.data,r.cols,r.rows);
                }
            }
        }
        continue;
    }
    var f,s=[];
    (!function t(e,a){for(var o of e.childNodes)if(0==o.childNodes.length){if(o.nodeType==Node.TEXT_NODE){let e=o.textContent.trim();if(e){let t=o.parentNode.tagName,r={text:e,tag:t};if(Object.keys(o.parentNode.dataset)&&(r.data=o.parentNode.dataset),"A"==t){let t=o.parentNode.attributes,e=t.target?` target=\'${t.target.nodeValue}\'`:"",a=t.href?` href=\'${t.href.nodeValue}\'`:"",id=t.id?` id=\'${t.id.nodeValue}\'`:"";r.l=`<a${id}${a}${e}>`,r.u="</a>"}a.push(r)}}else if(o.nodeType==Node.ELEMENT_NODE){let t=o.tagName,e={tag:t};a.push(e)}}else t(o,a)}(i.D,s));
    let isBox=!!i.D.dataset.box;
    let padX=isBox?2:0,padY=isBox?1:0;
    let innerW=isBox?Math.max(10,d-4):d;
    let t=c+padX,e=h+padY;
    for(let f of s){
        if("BR"==f.tag){e+=1;t=c+padX;a=b(a,e);}
        else if("DIV"==f.tag||("A"==f.tag&&f.text)){
            let remW = isBox ? (c + d - 2 - t) : (r.cols - t);
            if(remW < 12 && t > c + padX){
                e += 1;
                t = c + padX;
                a = b(a, e);
            }
            let availW = isBox ? Math.max(10, c + d - 2 - t) : innerW;
            let p = Z(f.text, availW);
            let m;
            if("A"==f.tag){
                m = Y({text:p.text,ft:f.data?.flap?1:0},t,e,E.data,r.cols,r.rows);
                for(let w of m.H){w.first.l=f.l;w.$.u=f.u;}
            } else {
                m = Y(p.text,t,e,E.data,r.cols,r.rows);
            }
            t = m.offset.J + 1;
            e = m.offset.L;
            a = b(a, p.K);
        }
    }
    if(isBox&&d>4){
        let boxH=Math.max(ht,e-h+2);
        let title=i.D.dataset.title||"";
        U({char:"┌"},c,h,E.data,r.cols,r.rows);
        U({char:"┐"},c+d-1,h,E.data,r.cols,r.rows);
        U({char:"└"},c,h+boxH-1,E.data,r.cols,r.rows);
        U({char:"┘"},c+d-1,h+boxH-1,E.data,r.cols,r.rows);
        for(let col=c+1;col<c+d-1;col++){
            U({char:"─"},col,h,E.data,r.cols,r.rows);
            U({char:"─"},col,h+boxH-1,E.data,r.cols,r.rows);
        }
        for(let row=h+1;row<h+boxH-1;row++){
            U({char:"│"},c,row,E.data,r.cols,r.rows);
            U({char:"│"},c+d-1,row,E.data,r.cols,r.rows);
        }
        if(title){
            let tStr=" "+title+" ";
            for(let k=0;k<tStr.length&&c+2+k<c+d-2;k++){
                U({char:tStr[k]},c+2+k,h,E.data,r.cols,r.rows);
            }
        }
    }else{
        n.push({x:c,y:h,st:u,width:d});
    }
}for(l of n)"rows"==l.st?X({char:"─"},l.x,l.y-1,l.width,1,E.data,r.cols,r.rows):"cols"==l.st&&X({char:"│"},l.x-1,0,1,a,E.data,r.cols,r.rows);for(let t=0;t<e.length;t++){var y=E.data[t];y.char&&(y.it=Math.max(y.it,y.ft||0),1==y.it?y.lt!=C[y.char]?(y.char=j[y.lt],y.lt=(y.lt+1)%j.length):y.it=0:1<y.it&&(y.it--,y.char=j[y.lt]),e[t]={...y},delete E.data[t].char,delete E.data[t].l,delete E.data[t].u,delete E.data[t].color)}}},P:function(t,e,a,r){var o=bt.W("--font-size-change");if(vt!=o&&(t.m.O(),vt=o),P!=t.cols||R!=t.rows){t.m.O();P=t.cols,R=t.rows;var n=P*R;for(let t=0;t<n;t++)E.data[t]={nt:0,it:0,lt:0}}var _pq=e.q,_pdx=e.x-_pq.x,_pdy=e.y-_pq.y;
var _pspeed=Math.sqrt(_pdx*_pdx+_pdy*_pdy);
E.rt=pt(E.rt*.75+.4*_pspeed,20);
if("white"==r.color){E.tt="lightgray";E.et="white"}
else{
    if(t.frame%300==0){V.a=F(z);V.b=F(z);while(V.b==V.a)V.b=F(z);}
    q.a=B(q.a,V.a,.015);q.b=B(q.b,V.b,.015);
    E.tt=O(q.a);E.et=O(q.b);
}if("screensaver"==r.mode){if(t.frame%3e3==0)N=v(wt()*A.length);if((o=k[k.length-1])!=A[N][0]){let t=(C[o]+1)%j.length;k[k.length-1]=j[t]}if((i=S[S.length-1])!=A[N][1]){let t=(C[i]+1)%j.length;S[S.length-1]=j[t]}}E.ot=b(E.ot-.003,0);let _vh=window.innerHeight/t.m.lineHeight,_sR=window.scrollY/t.m.lineHeight;let _vCenterY=_sR+Math.min(t.rows,_vh)*0.5;let _effRows=Math.min(t.rows,_vh);var e=t.cols<80?1.3:.8,o=(E.scale+=.01*(e-E.scale),t.m.B),e=g.width/g.height/o;let l,u;u=e<t.cols/_effRows?(o=_effRows,l=1/o/e/E.scale,1/o/E.scale):(o=t.cols,l=1/o/E.scale,1/o*e/E.scale);var f=4e-4*t.time,s=(dt(t,r&&r.word?r.word:""),o=mt(f),(e=1.2)+(o-(t=-1))/(1-t)*(.5-e));let c,h,d,p,m,w,y;for(let e=0;e<R;e++)for(let t=0;t<P;t++)c=l*(t-.5*P)+.5,h=u*(e-_vCenterY)+.5,d=c+.5*(yt(c*s+f,h*s)-.5),p=h+1.8*(yt(c*s,h*s+f)-.5),m=Math.floor(d*g.width),w=Math.floor(p*g.height),y=t+e*P,E.data[y].ut=b(g.sample(d,p),g.get(m,w))},ct:m,ht:O});function xt(n){gt=Array.from(document.querySelectorAll("main div")).map(t=>new J(t));bt=new J(document.body);vt=bt.W("--font-size-change");let i=document.querySelector("PRE"),l=document.querySelector("MAIN");function t(){let t=window.innerWidth,e=window.innerHeight;var a,r,o;"screensaver"!=n.mode&&(a=parseFloat(getComputedStyle(document.body).lineHeight),r=parseFloat(getComputedStyle(l).left)||0,o=l.getBoundingClientRect(),t=Math.max(t,o.right+window.scrollX+r),e=Math.max(e,o.bottom+window.scrollY+a)),i.style.width=Math.ceil(t)+"px",i.style.height=Math.ceil(e)+"px"}t(),window.addEventListener("resize",t),window.addEventListener("scroll",t),document.fonts&&document.fonts.ready.then(t),W(Mt,{element:i,p:60,M:!1},n),document.addEventListener("keydown",t=>{"f"==t.key&&document.body.requestFullscreen&&document.body.requestFullscreen().catch(t=>console.warn(t))})}window.boot=xt;