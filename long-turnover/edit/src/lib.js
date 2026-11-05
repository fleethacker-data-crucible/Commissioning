const W=1600,H=900;
const C={navy:'#050a18',navy2:'#0a1630',navy3:'#13264a',navy4:'#1d3560',amber:'#ffa83a',amber2:'#ff8a1f',amberD:'#a85a12',brass:'#c9a24b',brassD:'#7a5f22',gold:'#e8c872',goldL:'#f6e2a4',blue:'#5ec8ff',blue2:'#2f8fe0',blueD:'#16507f',cream:'#f4e6c2',paper:'#e9dfc4',ink:'#141a2a',red:'#ff6b5a',pale:'#c8d3e6',mute:'#8a9bb8',green:'#6fd39a'};
const clamp=(x,a=0,b=1)=>Math.min(b,Math.max(a,x));
const E={lin:x=>x,io:x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2,out:x=>1-Math.pow(1-x,3),out2:x=>1-Math.pow(1-x,2),in:x=>x*x*x,soft:x=>x*x*(3-2*x),back:x=>{const c=1.4;return 1+(c+1)*Math.pow(x-1,3)+c*Math.pow(x-1,2)}};
const pr=(t,a,b,e=E.io)=>e(clamp((t-a)/(b-a)));
const lerp=(a,b,k)=>a+(b-a)*k;
const f=(n,d=2)=>(+n).toFixed(d);
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const SERIF='Georgia, "Palatino Linotype", serif', SANS='Bahnschrift, "Segoe UI", sans-serif', MONO='Consolas, monospace', HAND='"Segoe Print","Segoe Script",cursive';
function T(x,y,s,o={}){
  const {size=28,fill=C.gold,anchor='start',font=SANS,weight='400',ls=0,op=1,style='',rot=0,extra=''}=o;
  if(op<=0.002)return'';
  return `<text x="${f(x)}" y="${f(y)}" font-family='${font}' font-size="${size}" fill="${fill}" text-anchor="${anchor}" font-weight="${weight}" letter-spacing="${ls}" opacity="${f(op,3)}"${style?` font-style="${style}"`:''}${rot?` transform="rotate(${rot} ${f(x)} ${f(y)})"`:''} ${extra}>${esc(s)}</text>`;
}
function typed(s,p){return s.slice(0,Math.round(s.length*clamp(p)))}
function R(x,y,w,h,o={}){const {fill='none',stroke='none',sw=1,rx=0,op=1,extra=''}=o;return `<rect x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h)}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" opacity="${f(op,3)}" ${extra}/>`}
function P(d,o={}){const {fill='none',stroke='none',sw=1,op=1,extra='',cap='round',join='round'}=o;return `<path d="${d}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" opacity="${f(op,3)}" stroke-linecap="${cap}" stroke-linejoin="${join}" ${extra}/>`}
function Cc(x,y,r,o={}){const {fill='none',stroke='none',sw=1,op=1,extra=''}=o;return `<circle cx="${f(x)}" cy="${f(y)}" r="${f(r)}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" opacity="${f(op,3)}" ${extra}/>`}
function El(x,y,rx,ry,o={}){const {fill='none',stroke='none',sw=1,op=1,extra=''}=o;return `<ellipse cx="${f(x)}" cy="${f(y)}" rx="${f(rx)}" ry="${f(ry)}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" opacity="${f(op,3)}" ${extra}/>`}
function Ln(x1,y1,x2,y2,o={}){const {stroke=C.gold,sw=2,op=1,dash='',cap='round'}=o;return `<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" stroke="${stroke}" stroke-width="${sw}" opacity="${f(op,3)}" stroke-linecap="${cap}"${dash?` stroke-dasharray="${dash}"`:''}/>`}
function Draw(d,p,o={}){if(p<=0)return'';const {stroke=C.gold,sw=3,op=1,fill='none',extra=''}=o;return `<path d="${d}" pathLength="1" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" opacity="${f(op,3)}" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1 1" stroke-dashoffset="${f(1-p,4)}" ${extra}/>`}
function G(inner,o={}){const {tx=0,ty=0,s=1,rot=0,op=1,extra='',ox=0,oy=0}=o;if(op<=0.002)return'';return `<g transform="translate(${f(tx)} ${f(ty)}) rotate(${f(rot)}) scale(${f(s,4)}) translate(${f(-ox)} ${f(-oy)})" opacity="${f(op,3)}" ${extra}>${inner}</g>`}
function Op(inner,op,extra=''){return op<=0.002?'':`<g opacity="${f(op,3)}" ${extra}>${inner}</g>`}
function cam(a,b,p){const cx=lerp(a[0],b[0],p),cy=lerp(a[1],b[1],p),s=lerp(a[2],b[2],p);return `translate(800 450) scale(${f(s,5)}) translate(${f(-cx,3)} ${f(-cy,3)})`}
const LB_T=100,LB_H=700;
function letterbox(inner,o={}){const {vig=0.6}=o;return `<g clip-path="url(#lbclip)">${inner}<rect x="0" y="0" width="1600" height="900" fill="url(#vig)" opacity="${vig}"/></g><rect x="0" y="0" width="1600" height="${LB_T}" fill="#02040a"/><rect x="0" y="${LB_T+LB_H}" width="1600" height="${900-LB_T-LB_H}" fill="#02040a"/>`}
const DEFS=`<defs>
<clipPath id="lbclip"><rect x="0" y="${LB_T}" width="1600" height="${LB_H}"/></clipPath>
<radialGradient id="vig" cx="50%" cy="50%" r="75%"><stop offset="55%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="1"/></radialGradient>
<radialGradient id="bgchart" cx="50%" cy="40%" r="80%"><stop offset="0%" stop-color="#10213f"/><stop offset="100%" stop-color="#050a18"/></radialGradient>
<linearGradient id="brassg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f1d98f"/><stop offset=".45" stop-color="#c9a24b"/><stop offset="1" stop-color="#7a5f22"/></linearGradient>
<linearGradient id="brassg2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e9cf86"/><stop offset=".5" stop-color="#b78f3a"/><stop offset="1" stop-color="#6a501a"/></linearGradient>
<filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
<filter id="glowS" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
<filter id="blur8" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="8"/></filter>
<filter id="blur20" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="20"/></filter>
<filter id="blur3"><feGaussianBlur stdDeviation="3"/></filter>
<filter id="drop" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#000" flood-opacity=".6"/></filter>
</defs>`;
function chartBG(o={}){
  const {title='',sub='',grid=true}=o;let s=`<rect width="1600" height="900" fill="url(#bgchart)"/>`;
  if(grid){for(let x=100;x<1600;x+=100)s+=Ln(x,0,x,900,{stroke:'#4a6aa0',sw:1,op:.10});for(let y=100;y<900;y+=100)s+=Ln(0,y,1600,y,{stroke:'#4a6aa0',sw:1,op:.10});}
  s+=R(26,26,1548,848,{stroke:C.brass,sw:2.5,op:.8})+R(38,38,1524,824,{stroke:C.brass,sw:1,op:.45});
  let tk='';for(let x=62;x<1550;x+=24)tk+=`M${x} 26v8M${x} 866v8`;for(let y=62;y<860;y+=24)tk+=`M26 ${y}h8M1566 ${y}h8`;
  s+=P(tk,{stroke:C.brass,sw:1.2,op:.6});
  for(const [x,y] of [[26,26],[1574,26],[26,874],[1574,874]])s+=Cc(x,y,7,{fill:C.navy,stroke:C.gold,sw:2});
  if(title)s+=T(80,100,title,{size:32,fill:C.gold,font:SERIF,ls:5,weight:'700'});
  if(sub)s+=T(80,136,sub,{size:24,fill:C.mute,font:SANS,ls:3});
  return s;
}
function plaque(x,y,w,h,o={}){const {lit=0,rx=14,rivets=true}=o;
  let s=R(x,y,w,h,{fill:'#0b1426',rx:rx+4,extra:'filter="url(#drop)"'});
  s+=R(x,y,w,h,{fill:'url(#brassg2)',rx:rx,op:.14+.86*lit});
  s+=R(x+3,y+3,w-6,h-6,{stroke:lit>0.5?C.goldL:C.brass,sw:2,rx:rx-2,op:.95});
  if(rivets)for(const [a,b] of [[x+16,y+16],[x+w-16,y+16],[x+16,y+h-16],[x+w-16,y+h-16]])s+=Cc(a,b,4.5,{fill:lit>.5?'#7a5f22':'#2a3752',stroke:C.brassD,sw:1});
  return s}
function seg(t,cues,i,dur=.6,e=E.out){const c=(cues&&cues[i]!==undefined)?cues[i]:9999;return pr(t,c,c+dur,e)}
