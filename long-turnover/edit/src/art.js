// ===== Illustrated storyboard frames: shared pieces =====
const DEFS2=`<defs>
<radialGradient id="gA"><stop offset="0" stop-color="#ffb04a" stop-opacity=".95"/><stop offset=".4" stop-color="#ff8a1f" stop-opacity=".35"/><stop offset="1" stop-color="#ff8a1f" stop-opacity="0"/></radialGradient>
<radialGradient id="gB"><stop offset="0" stop-color="#8fdcff" stop-opacity=".9"/><stop offset=".4" stop-color="#3aa0ff" stop-opacity=".3"/><stop offset="1" stop-color="#3aa0ff" stop-opacity="0"/></radialGradient>
<radialGradient id="gW"><stop offset="0" stop-color="#fff2cf" stop-opacity=".95"/><stop offset=".45" stop-color="#ffd58a" stop-opacity=".3"/><stop offset="1" stop-color="#ffd58a" stop-opacity="0"/></radialGradient>
<linearGradient id="faceShade" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#050a18" stop-opacity="1"/><stop offset=".7" stop-color="#050a18" stop-opacity="0"/></linearGradient>
<linearGradient id="deskTop" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a2f44"/><stop offset="1" stop-color="#0c1020"/></linearGradient>
<linearGradient id="scrB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1b4a78"/><stop offset="1" stop-color="#0c2440"/></linearGradient>
<linearGradient id="dayWall" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f7e3b4"/><stop offset="1" stop-color="#d9b77c"/></linearGradient>
<linearGradient id="dayFloor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b98a54"/><stop offset="1" stop-color="#6e4a28"/></linearGradient>
<linearGradient id="rayG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff2c8" stop-opacity=".55"/><stop offset="1" stop-color="#fff2c8" stop-opacity="0"/></linearGradient>
</defs>`;

function glow(x,y,r,kind='A',op=1){return `<circle cx="${f(x)}" cy="${f(y)}" r="${f(r)}" fill="url(#g${kind})" opacity="${f(op,3)}"/>`}
function mix(a,b,k){const pa=[1,3,5].map(i=>parseInt(a.slice(i,i+2),16)),pb=[1,3,5].map(i=>parseInt(b.slice(i,i+2),16));return '#'+pa.map((v,i)=>Math.round(lerp(v,pb[i],k)).toString(16).padStart(2,'0')).join('')}

// ---- head in profile (faces right unless flip) ----
function head(o){
  const {x=0,y=0,s=1,flip=0,who='T',tilt=0,smile=0,rim=C.blue,rimOp=.6,shade=.45,eye=1,hairCol}=o;
  const skin=who==='C'?'#d9a681':'#a9704c',skinD=who==='C'?'#a8734f':'#7a4a30';
  const face='M-38 -8 C-42 -50 -10 -66 22 -58 C38 -52 44 -34 44 -22 L46 -10 L57 6 L46 11 L47 19 L44 25 L46 31 C44 43 34 52 20 54 L6 50 C-10 52 -22 40 -30 26 C-38 14 -38 2 -38 -8 Z';
  let g=`<path d="M-26 30 L-20 100 L28 100 L24 42 Z" fill="${skinD}"/><path d="${face}" fill="${skin}"/>`;
  g+=`<path d="${face}" fill="url(#faceShade)" opacity="${shade}"/>`;
  g+=`<path d="M22 -58 C38 -52 44 -34 44 -22 L46 -10 L57 6 L46 11 L47 19 L44 25 L46 31 C44 43 34 52 20 54" fill="none" stroke="${rim}" stroke-width="3.2" opacity="${rimOp}" stroke-linecap="round" stroke-linejoin="round"/>`;
  g+=`<ellipse cx="-10" cy="0" rx="8" ry="14" fill="${skinD}"/>`;
  if(who==='C'){
    const hc=hairCol||'#cdd1dc';
    g+=`<path d="M-42 -4 C-48 -54 -8 -74 26 -62 C36 -58 42 -50 44 -40 C22 -52 2 -44 -10 -24 C-14 -12 -20 6 -26 26 C-38 14 -42 4 -42 -4 Z" fill="${hc}"/><circle cx="-40" cy="-46" r="22" fill="${hc}"/><path d="M-40 -66 C-30 -60 -26 -50 -28 -36" stroke="#9aa0b4" stroke-width="3" fill="none"/>`;
  } else {
    g+=`<path d="M-42 -6 C-46 -56 -6 -72 26 -62 C38 -58 44 -46 44 -32 C30 -46 6 -44 -8 -32 C-20 -24 -24 -6 -30 8 C-38 2 -42 -2 -42 -6 Z" fill="#14161f"/>`;
  }
  // eye, brow, mouth
  if(eye>.3)g+=`<ellipse cx="28" cy="-14" rx="3.6" ry="${f(2.6*eye)}" fill="#0b0d14"/>`;else g+=`<path d="M24 -13 Q28 -10 33 -13" stroke="#0b0d14" stroke-width="2.4" fill="none"/>`;
  g+=`<path d="M20 -24 Q30 -28 40 -22" stroke="${who==='C'?'#8e939f':'#14161f'}" stroke-width="3.4" fill="none" stroke-linecap="round"/>`;
  g+=smile>0?`<path d="M34 30 Q42 ${f(30+8*smile)} 47 ${f(26-3*smile)}" stroke="#7a3a30" stroke-width="2.6" fill="none" stroke-linecap="round"/>`:`<path d="M35 31 L45 30" stroke="#6a3a30" stroke-width="2.4" stroke-linecap="round"/>`;
  if(who==='C')g+=`<circle cx="30" cy="-12" r="14" fill="#cfe8ff" fill-opacity=".10" stroke="${C.brass}" stroke-width="3"/><path d="M16 -14 L-8 -12" stroke="${C.brass}" stroke-width="3"/>`;
  return `<g transform="translate(${f(x)} ${f(y)}) rotate(${f(tilt)}) scale(${f(flip?-s:s,4)} ${f(s,4)})">${g}</g>`;
}

// ---- hand (top-down-ish), pen optional ----
function hand(o){
  const {x=0,y=0,s=1,rot=0,skin='#d9a681',cuff='#b98a4e',pen=0,fingers=0,rim=null}=o;
  let g=`<path d="M-120 -26 L-40 -34 L-40 34 L-120 28 Z" fill="${cuff}"/>`;
  g+=`<path d="M-44 -34 C-10 -44 40 -38 70 -26 C98 -20 108 -4 90 6 C100 12 96 28 76 28 C84 40 66 50 46 42 C30 52 -10 44 -44 36 Z" fill="${skin}"/>`;
  g+=`<path d="M70 -26 C96 -30 126 -22 130 -10 C128 -2 98 0 80 -4" fill="${skin}"/>`;
  g+=`<path d="M-44 -34 C-10 -44 40 -38 70 -26" fill="none" stroke="rgba(0,0,0,.25)" stroke-width="3"/>`;
  if(pen)g+=`<path d="M60 -10 L190 -52" stroke="#1a1f2e" stroke-width="12" stroke-linecap="round"/><path d="M60 -10 L82 -17" stroke="${C.brass}" stroke-width="12" stroke-linecap="round"/>`;
  if(rim)g+=`<path d="M-44 -34 C-10 -44 40 -38 70 -26 C96 -30 126 -22 130 -10" fill="none" stroke="${rim}" stroke-width="3" opacity=".7"/>`;
  return `<g transform="translate(${f(x)} ${f(y)}) rotate(${f(rot)}) scale(${f(s,4)})">${g}</g>`;
}

// ---- window onto the plant (night -> dawn via d 0..1) ----
function plantView(x,y,w,h,d,t,o={}){
  const sky0=mix('#070d22','#2a3a6e',d),sky1=mix('#18284a','#f6a566',d),sky2=mix('#3a2a40','#ffe0a0',d);
  let s=`<clipPath id="pv${x|0}_${y|0}"><rect x="${x}" y="${y}" width="${w}" height="${h}"/></clipPath><g clip-path="url(#pv${x|0}_${y|0})">`;
  s+=`<linearGradient id="skyg${x|0}${y|0}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${sky0}"/><stop offset=".62" stop-color="${sky1}"/><stop offset="1" stop-color="${sky2}"/></linearGradient><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#skyg${x|0}${y|0})"/>`;
  const hy=y+h*.74;
  if(d>.3)s+=glow(x+w*.72,hy,w*.28,'W',d*.9);
  if(d<.6)for(let i=0;i<40;i++)s+=Cc(x+((i*97)%w),y+((i*53)%(h*.5)),1+(i%3)*.4,{fill:'#dfe8ff',op:(1-d)*(.2+((i*31)%60)/100)});
  // far hills
  s+=P(`M${x} ${hy} L${x+w*.12} ${hy-18} L${x+w*.3} ${hy-8} L${x+w*.5} ${hy-24} L${x+w*.7} ${hy-6} L${x+w*.9} ${hy-20} L${x+w} ${hy-8} L${x+w} ${y+h} L${x} ${y+h} Z`,{fill:mix('#0a1226','#3a3050',d)});
  // plant: tanks, stacks, racks
  const dark=mix('#070c1c','#2b2a45',d);
  const tank=(cx,wd,ht)=>P(`M${cx-wd/2} ${hy+4} V${hy-ht} Q${cx} ${hy-ht-wd*.18} ${cx+wd/2} ${hy-ht} V${hy+4} Z`,{fill:dark})+Ln(cx-wd/2+4,hy-ht+8,cx-wd/2+4,hy,{stroke:mix('#2b3a62','#ffcf8a',d),sw:3,op:.5});
  s+=tank(x+w*.1,w*.07,h*.15)+tank(x+w*.19,w*.06,h*.2)+tank(x+w*.33,w*.09,h*.12);
  // stacks with flare
  s+=R(x+w*.5,hy-h*.42,w*.016,h*.46,{fill:dark})+R(x+w*.56,hy-h*.30,w*.012,h*.34,{fill:dark});
  const fl=0.85+0.15*Math.sin(t*7)+0.07*Math.sin(t*13.3);
  s+=glow(x+w*.5+w*.008,hy-h*.44,60*fl*(1-d*.5),'A',(1-d*.7));
  s+=P(`M${f(x+w*.508)} ${f(hy-h*.44)} q-8 -20 0 -36 q10 14 0 36`,{fill:'#ffb04a',op:(1-d*.6)*.95});
  // pipe rack + towers
  s+=R(x+w*.62,hy-h*.12,w*.3,6,{fill:dark})+Ln(x+w*.64,hy-h*.12,x+w*.64,hy+4,{stroke:dark,sw:5})+Ln(x+w*.76,hy-h*.12,x+w*.76,hy+4,{stroke:dark,sw:5})+Ln(x+w*.9,hy-h*.12,x+w*.9,hy+4,{stroke:dark,sw:5});
  s+=P(`M${x+w*.7} ${hy+4} V${hy-h*.3} L${x+w*.74} ${hy-h*.34} V${hy+4} Z`,{fill:dark});
  // lights
  const lamp=(lx,ly,c,r=3,ph=0)=>Cc(lx,ly,r,{fill:c,op:(.65+.35*Math.sin(t*2+ph))*(1-d*.55)})+glow(lx,ly,r*5,c===C.red?'A':'W',.5*(1-d*.6));
  [[.08,.06],[.22,.14],[.34,.22],[.5,.48],[.56,.34],[.7,.34],[.74,.12],[.88,.1]].forEach((p,i)=>{s+=lamp(x+w*p[0]*1.0,hy-h*p[1]*1.9+(i%2)*4,i%3===0?C.red:'#ffd9a0',3,i)});
  // ground glow
  s+=R(x,hy+2,w,h*.28,{fill:mix('#0a1020','#3a2c40',d)})+R(x,hy+2,w,6,{fill:'#ffb04a',op:.25*(1-d)});
  s+=`</g>`;
  return s;
}
function mullions(x,y,w,h,n,col='#07101e',sw=14){let s=R(x-sw/2,y-sw/2,w+sw,sw,{fill:col})+R(x-sw/2,y+h-sw/2,w+sw,sw,{fill:col})+R(x-sw/2,y,sw,h,{fill:col})+R(x+w-sw/2,y,sw,h,{fill:col});for(let i=1;i<n;i++)s+=R(x+w*i/n-sw/2,y,sw,h,{fill:col});return s}

function wallClock(x,y,r,hh,mm,o={}){
  const {face='#d9d4c0',ink='#14161f',rim='#2a2f44',lit=0}=o;
  let g=Cc(x,y,r+8,{fill:rim})+Cc(x,y,r,{fill:face});
  for(let i=0;i<12;i++){const a=i*Math.PI/6;g+=Ln(x+Math.sin(a)*r*.82,y-Math.cos(a)*r*.82,x+Math.sin(a)*r*.93,y-Math.cos(a)*r*.93,{stroke:ink,sw:r*.04})}
  const ah=((hh%12)+mm/60)*Math.PI/6,am=mm*Math.PI/30;
  g+=Ln(x,y,x+Math.sin(ah)*r*.5,y-Math.cos(ah)*r*.5,{stroke:ink,sw:r*.075})+Ln(x,y,x+Math.sin(am)*r*.78,y-Math.cos(am)*r*.78,{stroke:ink,sw:r*.05})+Cc(x,y,r*.06,{fill:C.red});
  if(lit)g+=glow(x,y,r*2.2,'W',lit);
  return g;
}
function gaugeFace(x,y,r,val,o={}){
  let g=Cc(x,y,r+22,{fill:'#10131f',stroke:'#3a4054',sw:6})+Cc(x,y,r+8,{fill:'#07090f'})+Cc(x,y,r,{fill:'#d9d3bd'});
  g+=P(`M${x+Math.cos(Math.PI*.75+Math.PI*1.5*.78)*r*.86} ${y+Math.sin(Math.PI*.75+Math.PI*1.5*.78)*r*.86} A${r*.86} ${r*.86} 0 0 1 ${x+Math.cos(Math.PI*2.25)*r*.86} ${y+Math.sin(Math.PI*2.25)*r*.86}`,{stroke:C.red,sw:r*.09});
  for(let i=0;i<=40;i++){const a=Math.PI*.75+Math.PI*1.5*i/40;const l=i%5===0;g+=Ln(x+Math.cos(a)*r*(l?.74:.8),y+Math.sin(a)*r*(l?.74:.8),x+Math.cos(a)*r*.9,y+Math.sin(a)*r*.9,{stroke:'#1a1d28',sw:l?r*.03:r*.015})}
  g+=T(x,y+r*.52,'PRESSURE',{size:r*.13,fill:'#2a2d3a',anchor:'middle',weight:'700',ls:2})+T(x,y+r*.66,'LOOP 4  bar',{size:r*.1,fill:'#4a4d5a',anchor:'middle'});
  const a=Math.PI*.75+Math.PI*1.5*val;
  g+=Ln(x-Math.cos(a)*r*.15+3,y-Math.sin(a)*r*.15+5,x+Math.cos(a)*r*.8+3,y+Math.sin(a)*r*.8+5,{stroke:'#000',sw:r*.04,op:.3})+Ln(x-Math.cos(a)*r*.15,y-Math.sin(a)*r*.15,x+Math.cos(a)*r*.8,y+Math.sin(a)*r*.8,{stroke:'#a8281f',sw:r*.035})+Cc(x,y,r*.07,{fill:'#1a1d28'});
  g+=P(`M${x-r*.9} ${y-r*.1} A${r} ${r} 0 0 1 ${x+r*.2} ${y-r*.95}`,{stroke:'#fff',sw:r*.06,op:.18});
  return g;
}
function mug(x,y,s,t,steam=1){
  let g=`<g transform="translate(${f(x)} ${f(y)}) scale(${s})">`+El(0,0,46,10,{fill:'#000',op:.35})+P('M-40 -78 V-6 Q-40 6 -28 6 H28 Q40 6 40 -6 V-78 Z',{fill:'#c9c3b0'})+P('M40 -64 Q74 -62 70 -34 Q66 -14 40 -16',{stroke:'#c9c3b0',sw:11,fill:'none'})+El(0,-78,40,9,{fill:'#7a5a30'})+P('M-40 -60 H40',{stroke:'#a59e8a',sw:2})+P('M-36 -78 l5 8 l-3 4',{stroke:'#3b3a38',sw:3,fill:'#3b3a38'});
  g+=T(-12,-34,'WATCH',{size:11,fill:'#5a5448',weight:'700',ls:1});
  if(steam>0)for(let i=0;i<3;i++){const ph=(t*.35+i*.33)%1;g+=P(`M${-14+i*14} -86 q${f(10*Math.sin(ph*6+i),1)} -22 0 -44`,{stroke:'#cfe0ff',sw:5,op:steam*.28*(1-ph),extra:`transform="translate(0 ${f(-ph*26)})"`})}
  return g+`</g>`;
}
function cardigan(x,y,s,rim){
  let g=`<g transform="translate(${f(x)} ${f(y)}) scale(${s})">`;
  g+=P('M-110 0 C-120 40 -112 140 -104 220 L-62 224 L-58 70 L58 70 L62 224 L104 220 C112 140 120 40 110 0 C60 -22 -60 -22 -110 0 Z',{fill:'#b98a4e'});
  g+=P('M-110 0 C-60 -22 60 -22 110 0 C60 -4 -60 -4 -110 0 Z',{fill:'#d6aa6c'});
  g+=P('M-30 -8 L0 50 L30 -8',{fill:'#8a6234'})+P('M-58 70 L58 70',{stroke:'#8a6234',sw:5})+P('M-90 40 C-96 100 -92 170 -86 214 M90 40 C96 100 92 170 86 214',{stroke:'#8a6234',sw:3,op:.7});
  for(let i=0;i<4;i++)g+=Cc(0,10+i*14,3.5,{fill:'#5a3e1e'});
  if(rim)g+=P('M-110 0 C-60 -22 60 -22 110 0',{stroke:rim,sw:3,op:.6});
  return g+`</g>`;
}
function chairBack(x,y,s,rim='#ffa83a',o={}){
  let g=`<g transform="translate(${f(x)} ${f(y)}) scale(${s})">`;
  g+=P('M-8 150 H8 V300 H-8 Z',{fill:'#0a0d17'})+P('M-80 300 L80 300 L60 316 L-60 316 Z',{fill:'#0a0d17'});
  g+=R(-92,-110,184,280,{fill:'#141a2c',rx:46})+R(-76,-96,152,248,{fill:'#1b2338',rx:36});
  g+=P('M-92 -50 Q-92 -110 -40 -110 H40 Q92 -110 92 -50',{stroke:rim,sw:4,op:.6})+P('M92 -50 V120',{stroke:rim,sw:3,op:.35});
  return g+`</g>`;
}
function monitor(x,y,w,h,kind,t,o={}){
  const {alarm=0,idle=0,bright=1}=o;
  let g=R(x-8,y-8,w+16,h+16,{fill:'#0a0e19',rx:8})+R(x,y,w,h,{fill:idle?'#0b1b30':'url(#scrB)',rx:3,op:idle?.9:bright});
  if(!idle){
    for(let i=1;i<6;i++)g+=Ln(x+10,y+h*i/6,x+w-10,y+h*i/6,{stroke:'#5ec8ff',sw:1,op:.10});
    // trend lines
    let d1='',d2='';for(let k=0;k<=24;k++){const px=x+14+(w-28)*k/24;d1+=(k?' L':'M')+f(px,1)+' '+f(y+h*.62+Math.sin(k*.5+t*.8)*h*.07+Math.sin(k*1.3)*h*.03,1);d2+=(k?' L':'M')+f(px,1)+' '+f(y+h*.38+Math.cos(k*.4+t*.5)*h*.06,1)}
    g+=P(d1,{stroke:'#8fdcff',sw:2.5,op:.9})+P(d2,{stroke:'#ffd58a',sw:2,op:.8});
    g+=R(x+12,y+10,w*.32,10,{fill:'#5ec8ff',op:.5,rx:2})+R(x+12,y+26,w*.2,7,{fill:'#5ec8ff',op:.3,rx:2});
    g+=glow(x+w/2,y+h/2,w*.9,'B',.22*bright);
  }
  if(alarm>0){const on=(Math.floor(t*1.6)%2===0)?1:.35;g+=R(x,y+h*.78,w,h*.22,{fill:'#a8281f',op:.92*alarm*on})+T(x+w/2,y+h*.93,'PRESSURE HIGH  ·  Loop 4',{size:h*.11,fill:'#fff2e0',anchor:'middle',weight:'700',font:MONO,op:alarm})}
  return g;
}
function consoleDesk(x,y,w,t,o={}){
  // desk top strip seen slightly from above + front edge
  let g=P(`M${x-w/2} ${y} H${x+w/2} L${x+w/2+40} ${y+90} H${x-w/2-40} Z`,{fill:'url(#deskTop)'})+R(x-w/2-40,y+90,w+80,26,{fill:'#0a0d17'})+Ln(x-w/2-30,y+92,x+w/2+30,y+92,{stroke:'#ffa83a',sw:2,op:.35});
  return g;
}
function lampBlink(x,y,r,t,on){const k=on===undefined?((Math.floor(t*1.7)%2===0)?1:.15):on;return glow(x,y,r*5,'A',.9*k)+Cc(x,y,r+6,{fill:'#2a1a0a'})+Cc(x,y,r,{fill:mix('#6a3a10','#ffb04a',k)})+Cc(x-r*.3,y-r*.3,r*.3,{fill:'#fff',op:.35*k+.1})}

// Tomas from behind (seated). o: tilt (head turn amount deg), headDy
function tomasBack(x,y,s,o={}){
  const {tilt=0,rim='#5ec8ff',rim2='#ffa83a',armsUp=0,calm=0}=o;
  let g=`<g transform="translate(${f(x)} ${f(y)}) scale(${s})">`;
  const hood='#17284c';
  // arms to keyboard
  g+=P('M-86 40 Q-130 100 -92 168 L-70 164 Q-96 110 -64 60 Z',{fill:'#101d3a'})+P('M86 40 Q130 100 92 168 L70 164 Q96 110 64 60 Z',{fill:'#101d3a'});
  g+=P('M-110 58 Q-110 -2 -56 -14 L56 -14 Q110 -2 110 58 L120 230 L-120 230 Z',{fill:hood});
  g+=P('M-110 58 Q-110 -2 -56 -14',{stroke:rim,sw:4,op:.7})+P('M110 58 Q110 -2 56 -14',{stroke:rim2,sw:4,op:.7});
  g+=P('M-34 -14 Q0 14 34 -14 Q0 -2 -34 -14Z',{fill:'#0d1830'})+Ln(0,10,0,200,{stroke:'#0d1830',sw:3,op:.7});
  g+=`<g transform="rotate(${f(tilt)} 0 -20)">`+El(-47,-62,9,16,{fill:'#8e5c3e'})+El(47,-62,9,16,{fill:'#8e5c3e'})+El(0,-76,47,58,{fill:'#14161f'})+P('M-36 -112 Q0 -138 36 -112',{stroke:rim,sw:3.5,op:.55})+R(-26,-30,52,28,{fill:'#8e5c3e'})+`</g>`;
  return g+`</g>`;
}

// ---- the night control room wide set ----
function room(t,d,o={}){
  const {alarm=1,tom=true,tomTilt=0,empty=true,lampOn,clockMin=3}=o;
  let s=`<rect x="-200" y="-100" width="2000" height="1100" fill="#070b18"/>`;
  // wall + window
  s+=R(-200,0,2000,560,{fill:mix('#0a1224','#2a2540',d)});
  s+=plantView(60,110,1480,330,d,t);
  s+=mullions(60,110,1480,330,4,'#080e1c',16);
  // window sill, reflections
  s+=R(40,436,1520,22,{fill:'#0c1426'});
  s+=P('M120 130 L260 130 L190 430 L60 430 Z',{fill:'#fff',op:.025+.03*d})+P('M900 130 L980 130 L910 430 L830 430Z',{fill:'#fff',op:.02+.02*d});
  // clock on wall pillar between window panes
  s+=wallClock(1300,262,64,3,clockMin,{lit:.10});
  s+=T(1300,372,'03:03',{size:26,fill:'#ff8a4a',anchor:'middle',font:MONO,op:d<.5?.9:0});
  // lower wall + cable trays
  s+=R(-200,458,2000,110,{fill:mix('#0d1528','#34304a',d)})+R(-200,458,2000,4,{fill:'#1c2848'});
  // consoles: three stations
  const ST=[360,800,1240];
  ST.forEach((cx,i)=>{
    s+=monitor(cx-250,486,240,150,'t',t+i,{alarm:i===0?alarm:0,idle:i===2});
    s+=monitor(cx+10,486,240,150,'t',t+i*2,{idle:i===2});
    s+=consoleDesk(cx,640,520,t);
  });
  // label on station 2 monitor bezel
  const lbl=`<g transform="translate(800 470) rotate(-1.2)">${R(-330,-24,660,44,{fill:'#e9d9a8',rx:2,op:.96})}${T(0,6,'IGNORE LOOP 4 IN WINTER. NEVER IN SUMMER. ASK ME.',{size:22,fill:'#2a2012',anchor:'middle',font:HAND,weight:'700'})}</g>`;
  s+=lbl;
  // mug on station 2 desk
  s+=mug(940,725,1.0,t,empty?1:0);
  // phone on station 2
  // chairs
  s+=chairBack(360,684,1.1,'#5ec8ff');
  s+=chairBack(800,684,1.1,'#ffa83a');
  s+=chairBack(1240,716,1.0,'#5ec8ff',{});
  // cardigan on chair 2
  s+=cardigan(800,742,.9,'#ffa83a');
  if(tom)s+=tomasBack(360,720,1.12,{tilt:tomTilt});
  s+=lampBlink(1480,540,16,t,lampOn);
  // floor
  s+=R(-200,860,2000,200,{fill:'#050810'});
  return s;
}

// ======= ACT 0 =======
S.blackcard=(t,D,c,B)=>{
  let s=`<rect width="1600" height="900" fill="#02040a"/>`;
  if(B.id==='b00'){
    const a=pr(t,.5,1.3)*(1-pr(t,3.1,3.9));
    s+=Op(T(80,792,'A fictional dramatization. People and events are invented.',{size:30,fill:C.pale,font:SERIF,style:'italic'})+T(80,834,'The proposal that follows is real.',{size:26,fill:C.mute,font:SERIF,style:'italic'}),a);
  }
  return s;
};
S.macro=(t,D,c)=>{
  let s=`<rect x="-200" y="-100" width="2000" height="1200" fill="#070b18"/>`;
  s+=R(-200,0,2000,900,{fill:'#0b1426'});
  // dark window with reflections
  s+=R(980,150,640,560,{fill:'#050914'})+mullions(980,150,640,560,1,'#10182c',20);
  s+=plantView(990,160,620,540,0,t,{});
  s+=R(990,160,620,540,{fill:'#02040a',op:.55});
  const on=(Math.floor(t*1.7)%2===0)?1:.15;
  // reflection of lamp in window
  s+=glow(1180,400,150,'A',.35*on)+Cc(1180,400,28,{fill:'#ffb04a',op:.35*on});
  s+=P('M1000 170 L1100 170 L1020 700 L990 700Z',{fill:'#fff',op:.04});
  // clock on wall + its reflection
  s+=wallClock(1330,300,95,3,3,{lit:.1})+Cc(1330,300,95,{fill:'#000',op:0});
  s+=T(1330,430,'03:03',{size:34,fill:'#ff8a4a',anchor:'middle',font:MONO});
  // gauge
  const val=0.78+0.06*Math.sin(t*1.3)+0.015*Math.sin(t*9);
  s+=glow(560,450,420,'B',.18);
  s+=gaugeFace(540,440,230,val);
  // lamp panel
  s+=R(780,520,150,200,{fill:'#10162a',rx:12,stroke:'#2a3350',sw:3})+lampBlink(855,585,36,t,on)+T(855,680,'ALARM',{size:22,fill:'#7f8fb0',anchor:'middle',weight:'700',ls:3});
  s+=glow(855,585,380,'A',.18*on);
  const p=pr(t,0,D,E.soft);
  return letterbox(`<g transform="${cam([560,440,1.05],[900,470,1.5],p)}">${s}</g>`);
};
S.overshoulder=(t,D,c)=>{
  // monitors in front, Tomas back left foreground
  let s=`<rect x="-300" y="-100" width="2200" height="1200" fill="#060a16"/>`;
  s+=R(-300,0,2200,640,{fill:'#0a1224'});
  s+=plantView(400,60,1000,300,0,t);s+=mullions(400,60,1000,300,2,'#080e1c',18);
  s+=monitor(560,330,560,330,'t',t,{alarm:1})+monitor(1150,330,360,330,'t',t+1,{idle:0});
  s+=glow(840,500,700,'B',.25);
  s+=consoleDesk(1000,690,1500,t);
  // SOP binder on the desk (right foreground)
  const flip=pr(t,3.6,4.6,E.io);
  s+=`<g transform="translate(1300 790) rotate(-4)">`+R(-250,-90,500,200,{fill:'#10285a',rx:8,stroke:'#09142e',sw:3})+R(-240,-80,240,180,{fill:'#e8e2cf',rx:4})+R(0,-80,240,180,{fill:'#efe9d6',rx:4})
   +R(-6,-92,12,206,{fill:'#0a1a3c'})
   +[0,1,2,3,4,5].map(i=>R(246,-80+i*30,26,24,{fill:['#c9a24b','#5ec8ff','#ff8a4a','#6fd39a','#e8c872','#c8d3e6'][i],rx:3})+T(259,-62+i*30,[1,2,3,4,5,6][i]+'',{size:16,fill:'#1a1f2e',anchor:'middle',weight:'700'})).join('')
   +Ln(-220,-40,-30,-40,{stroke:'#8a8f9e',sw:3})+Ln(-220,-10,-60,-10,{stroke:'#8a8f9e',sw:3})+Ln(-220,20,-40,20,{stroke:'#8a8f9e',sw:3})
   +T(20,-30,'LOOP 4',{size:28,fill:'#14213a',weight:'700',font:SERIF})+T(20,6,'PRESSURE HIGH:',{size:19,fill:'#2a3350'})+T(20,36,'Acknowledge alarm.',{size:19,fill:'#2a3350'})+T(20,66,'Refer to Appendix C.',{size:19,fill:'#2a3350'})
   +`<g transform="translate(${f(lerp(0,-250,flip))} 0) scale(${f(1-flip*.0,3)} 1)" opacity="${f(1-flip,3)}">${R(0,-80,240,180,{fill:'#dcd5c0',rx:4})}${Ln(24,-40,200,-40,{stroke:'#a9a28c',sw:3})}${Ln(24,-10,170,-10,{stroke:'#a9a28c',sw:3})}${Ln(24,20,190,20,{stroke:'#a9a28c',sw:3})}</g>`
   +`</g>`;
  // Tomas, back, left; he looks up at screen then down at the binder
  const down=pr(t,2.6,3.6,E.io);
  s+=tomasBack(320,760,2.0,{tilt:lerp(0,-9,down)});
  const cp=pr(t,0,D,E.soft);
  return letterbox(`<g transform="${cam([760,470,1.12],[1000,560,1.5],pr(t,2.2,D,E.io))}">${s}</g>`);
};
S.emptychair=(t,D,c)=>{
  const p=pr(t,0,D,E.io);
  const s=room(t,0,{alarm:1,tomTilt:lerp(0,6,p)});
  return letterbox(`<g transform="${cam([800,470,1.0],[800,540,1.9],p)}">${s}</g>`);
};
S.phone=(t,D,c)=>{
  let s=`<rect x="-200" y="-100" width="2000" height="1200" fill="#060912"/>`;
  s+=glow(800,450,700,'B',.25);
  const tr=Math.sin(t*1.7)*3;
  // phone
  s+=`<g transform="translate(800 470) rotate(-8)">`+R(-170,-270,340,540,{fill:'#0a0d17',rx:36,stroke:'#2a3350',sw:4,extra:'filter="url(#drop)"'})+R(-154,-254,308,508,{fill:'#0b1730',rx:26})
   +T(0,-206,'3:04',{size:26,fill:'#8fa0c4',anchor:'middle',weight:'600'})
   +Cc(0,-100,44,{fill:'#2a3f6a'})+T(0,-86,'IS',{size:36,fill:'#cfe0ff',anchor:'middle',font:SERIF,weight:'700'})
   +T(0,-18,'Chief Sullivan',{size:36,fill:'#eaf0ff',anchor:'middle',weight:'600'})+T(0,26,'mobile',{size:24,fill:'#7f90ad',anchor:'middle'})
   +Cc(0,150,52,{fill:'#2ca85a',op:.95})+P('M-16 160 Q-22 138 -10 132 L-2 144 L-8 150 Q-4 158 8 164 L14 158 L24 166 Q22 178 8 178 Q-10 176 -16 160Z',{fill:'#fff'})
   +`</g>`;
  // thumb hovering, slow breathing
  const hv=Math.sin(t*1.4)*6, ap=pr(t,.3,1.6,E.out);
  s+=`<g transform="translate(${f(960+tr)} ${f(600+hv-(1-ap)*60)}) rotate(-38)">`
   +P('M-60 40 C-70 -40 60 -40 56 40 L110 420 L-120 420 Z',{fill:'#a9704c'})
   +P('M-60 40 C-70 -40 60 -40 56 40',{fill:'#c08a66'})
   +El(0,-8,30,38,{fill:'#d9ab8c'})+El(0,-4,22,28,{fill:'#f0cdb4',op:.7})
   +P('M-64 150 Q0 168 60 150',{stroke:'#7a4a30',sw:4,op:.6})
   +P('M-60 40 C-70 -40 60 -40 56 40 L110 420 L-120 420 Z',{fill:'url(#faceShade)',op:.45})
   +`</g>`;
  s+=glow(900,630,160,'W',.18);
  s+=T(800,820,'03:04',{size:1,fill:'#000',op:0});
  return letterbox(`<g transform="${cam([800,450,1.0],[830,480,1.18],pr(t,0,D))}">${s}</g>`);
};
