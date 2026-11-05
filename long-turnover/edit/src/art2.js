// ===== illustrated scenes part 2 =====
const CARD_COL='#b98a4e', HOOD_COL='#17284c';
function sideFigure(o){
  const {x=0,y=0,s=1,flip=0,who='C',pose='seat',lean=0,arm=[8,100,34,190],arm2=null,headDx=0,headTilt=0,col=who==='C'?CARD_COL:HOOD_COL,pants='#1b2238',rim='#ffa83a',smile=0,eye=1,rimOp=.6,shade=.45,hairCol,step=0,legPhase=0}=o;
  const skin=who==='C'?'#d9a681':'#a9704c';
  const L=lean*Math.PI/180, sh=[Math.sin(L)*150,-Math.cos(L)*150];
  const body=(cc,pp,sk)=>{
    let b='';
    // far arm
    const a2=arm2||[arm[0]-14,arm[1]+6,arm[2]-30,arm[3]+4];
    b+=P(`M${f(sh[0]-6)} ${f(sh[1]+10)} L${f(sh[0]+a2[0])} ${f(sh[1]+a2[1])} L${f(sh[0]+a2[2])} ${f(sh[1]+a2[3])}`,{stroke:cc===rim?cc:mix(cc,'#000000',.35),sw:30,op:1})+Cc(sh[0]+a2[2],sh[1]+a2[3],15,{fill:sk===rim?sk:mix(sk,'#000000',.3)});
    // legs
    if(pose==='seat'){
      b+=P('M0 0 L125 10 L140 150',{stroke:mix(pp,'#000000',.2),sw:42})+P('M140 150 L196 158',{stroke:'#07090f',sw:24});
    } else {
      const sp=step;
      b+=P(`M-10 0 L${f(-14-sp*20)} 205`,{stroke:mix(pp,'#000000',.25),sw:42})+P(`M${f(-14-sp*20)} 205 L${f(30-sp*20)} 212`,{stroke:'#07090f',sw:24});
      b+=P(`M10 0 L${f(14+sp*28)} 205`,{stroke:pp,sw:42})+P(`M${f(14+sp*28)} 205 L${f(58+sp*28)} 212`,{stroke:'#07090f',sw:24});
    }
    // torso
    b+=P(`M0 0 L${f(sh[0])} ${f(sh[1])}`,{stroke:cc,sw:84})+Cc(sh[0],sh[1],44,{fill:cc});
    b+=P(`M${f(sh[0]+8)} ${f(sh[1]-30)} L${f(sh[0]+10+headDx)} ${f(sh[1]-70)}`,{stroke:sk,sw:28});
    // near arm
    b+=P(`M${f(sh[0])} ${f(sh[1])} L${f(sh[0]+arm[0])} ${f(sh[1]+arm[1])} L${f(sh[0]+arm[2])} ${f(sh[1]+arm[3])}`,{stroke:cc,sw:36})+Cc(sh[0]+arm[2],sh[1]+arm[3],17,{fill:sk});
    return b;
  };
  let g=`<g transform="translate(${f(x)} ${f(y)}) scale(${f(flip?-s:s,4)} ${f(s,4)})">`;
  g+=`<g transform="translate(5 -4)" opacity=".75">${body(rim,rim,rim)}</g>`;
  g+=body(col,pants,skin);
  g+=head({x:sh[0]+10+headDx,y:sh[1]-96,s:.95,who,tilt:headTilt,smile,rim,rimOp,shade,eye,hairCol});
  return g+`</g>`;
}
function backFig(o){ // seen from behind, seated
  const {x=0,y=0,s=1,who='C',tilt=0,rim='#5ec8ff',rim2='#ffa83a'}=o;
  const cc=who==='C'?CARD_COL:HOOD_COL, hair=who==='C'?'#cdd1dc':'#14161f', sk=who==='C'?'#d9a681':'#a9704c';
  let g=`<g transform="translate(${f(x)} ${f(y)}) scale(${s})">`;
  g+=P('M-86 40 Q-130 100 -92 168 L-70 164 Q-96 110 -64 60 Z',{fill:mix(cc,'#000000',.45)})+P('M86 40 Q130 100 92 168 L70 164 Q96 110 64 60 Z',{fill:mix(cc,'#000000',.45)});
  g+=P('M-110 58 Q-110 -2 -56 -14 L56 -14 Q110 -2 110 58 L120 230 L-120 230 Z',{fill:cc});
  g+=P('M-110 58 Q-110 -2 -56 -14',{stroke:rim,sw:4,op:.7})+P('M110 58 Q110 -2 56 -14',{stroke:rim2,sw:4,op:.7});
  g+=R(-26,-30,52,28,{fill:mix(sk,'#000',.2)});
  g+=`<g transform="rotate(${f(tilt)} 0 -20)">`+El(0,-72,48,56,{fill:sk})+El(0,-78,47,58,{fill:hair})+(who==='C'?Cc(0,-132,26,{fill:hair})+P('M-30 -120 Q0 -98 30 -120',{stroke:'#9aa0b4',sw:3}):'')+El(-50,-66,9,16,{fill:mix(sk,'#000',.2)})+El(50,-66,9,16,{fill:mix(sk,'#000',.2)})+P('M-36 -112 Q0 -138 36 -112',{stroke:rim,sw:3.5,op:.55})+`</g>`;
  return g+`</g>`;
}
function dust(t,n,x0,y0,w,h,col='#fff2c8'){let s='';for(let i=0;i<n;i++){const px=x0+((i*173+t*(8+i%5*3))%w),py=y0+((i*91+t*(-5-i%4*2)+h*10)%h);s+=Cc(px,py,1.4+(i%3)*.7,{fill:col,op:.18+(i%4)*.06})}return s}
function dayRoom(t,o={}){
  let s=`<rect x="-200" y="-100" width="2000" height="1100" fill="url(#dayWall)"/>`;
  s+=R(-200,760,2000,300,{fill:'url(#dayFloor)'})+R(-200,752,2000,10,{fill:'#6e4a28'});
  // window
  s+=R(120,150,520,420,{fill:'#bfe3ff'})+`<linearGradient id="skyD" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8fd0ff"/><stop offset="1" stop-color="#fbe8b8"/></linearGradient>`+R(120,150,520,420,{fill:'url(#skyD)'})
   +P('M120 520 L220 470 L300 500 L400 440 L520 490 L640 450 V570 H120Z',{fill:'#9bb7c9',op:.8})+mullions(120,150,520,420,2,'#6e4a28',14);
  // rays
  s+=P('M130 160 L640 160 L1000 760 L420 760Z',{fill:'url(#rayG)',op:.55});
  s+=dust(t,26,200,160,800,600);
  return s;
}

// ======== ACT 1 ========
S.handover=(t,D,c)=>{
  let s=dayRoom(t);
  // wall clock showing 15 minutes: wedge from 12 to 3
  s+=R(0,0,0,0);
  const CX=1380;s+=Cc(CX,250,88,{fill:'#2a1f10'})+Cc(CX,250,80,{fill:'#f4ead0'})+P(`M${CX} 250 L${CX} 170 A80 80 0 0 1 ${CX+80} 250 Z`,{fill:C.amber,op:.7});
  for(let i=0;i<12;i++){const a=i*Math.PI/6;s+=Ln(CX+Math.sin(a)*64,250-Math.cos(a)*64,CX+Math.sin(a)*74,250-Math.cos(a)*74,{stroke:'#2a1f10',sw:3})}
  s+=Ln(CX,250,CX,186,{stroke:'#2a1f10',sw:5})+Ln(CX,250,(CX+60),250,{stroke:'#2a1f10',sw:4})+Cc(CX,250,6,{fill:C.red});
  s+=T(CX,376,'15 min',{size:30,fill:'#7a4a14',anchor:'middle',font:SERIF,style:'italic',weight:'700'});
  // desk behind
  s+=R(150,690,1300,24,{fill:'#7a5230'})+R(150,714,1300,70,{fill:'#5a3c20'});
  s+=mug(1340,690,.9,t,.7)+R(1180,640,120,50,{fill:'#c9a24b',rx:6,op:.7});
  // figures
  const ex=pr(t,.6,2.2,E.io);
  const watchX=lerp(700,830,ex),watchY=lerp(520,500,ex);
  s+=sideFigure({x:620,y:585,s:1.18,who:'C',pose:'stand',flip:0,rim:'#ffe2a0',arm:[40,95,lerp(60,150,ex)+60,lerp(120,70,ex)+10],lean:2,rimOp:.5,shade:.3});
  // receiver, facing left, navy uniform
  s+=sideFigure({x:1010,y:585,s:1.18,who:'T',pose:'stand',flip:1,col:'#1d3052',rim:'#ffe2a0',arm:[40,95,lerp(40,150,ex)+50,lerp(120,75,ex)+4],lean:-2,rimOp:.5,shade:.65,headTilt:0});
  // pocket watch on chain
  const wx=lerp(740,845,ex),wy=lerp(555,505,ex);
  s+=Cc(wx,wy,22,{fill:C.gold,stroke:C.brass,sw:4})+Cc(wx,wy,15,{fill:'#f6efd8'})+Ln(wx,wy,wx,wy-10,{stroke:'#2a1f10',sw:2})+Ln(wx,wy,wx+7,wy,{stroke:'#2a1f10',sw:2})+P(`M${f(wx)} ${f(wy-22)} q-20 -30 -52 -8`,{stroke:C.gold,sw:3})+glow(wx,wy,60,'W',.5);
  return letterbox(`<g transform="${cam([800,470,1.0],[820,510,1.42],pr(t,0,D,E.io))}">${s}</g>`,{vig:.35});
};
S.calendar=(t,D,c)=>{
  let s=dayRoom(t);
  const p=pr(t,.3,D-.6,E.io);
  const hair=mix('#3a2a22','#cdd1dc',p);
  // portrait
  s+=glow(560,520,420,'W',.3);
  s+=head({x:520,y:560,s:3.4,who:'C',hairCol:hair,rim:'#ffe2a0',rimOp:.7,shade:.5,smile:0});
  s+=P('M200 900 Q220 740 420 700 L760 700 Q900 740 920 900 Z',{fill:CARD_COL})+P('M420 700 Q560 790 700 700',{stroke:'#8a6234',sw:6,fill:'none'});
  // desk + mug
  s+=R(900,720,700,200,{fill:'#6e4a28'})+R(900,712,700,14,{fill:'#8a6234'})+mug(1010,716,1.1,t,.8);
  // wall calendar
  const cx=1180,cy=170,cw=380,ch=420;
  s+=R(cx-cw/2,cy,cw,ch,{fill:'#f8f1dc',rx:10,extra:'filter="url(#drop)"'})+R(cx-cw/2,cy,cw,70,{fill:'#a8281f',rx:10})+R(cx-cw/2,cy+40,cw,30,{fill:'#a8281f'});
  const MON=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  const rate=5.2,n=Math.floor(t*rate),fr=(t*rate)%1;
  const showPage=(k,fold)=>{const m=MON[k%12];let g=R(cx-cw/2,cy+70,cw,ch-70,{fill:'#f8f1dc'})+T(cx,cy+190,m,{size:92,fill:'#3a2a22',anchor:'middle',font:SERIF,weight:'700'});
    for(let r=0;r<4;r++)for(let q=0;q<7;q++)g+=Cc(cx-cw/2+36+q*48,cy+240+r*42,5,{fill:'#bcae88'});return g};
  s+=showPage(n+1,0);
  const fold=fr<.8?fr/.8:1;
  s+=`<g transform="translate(0 ${f(cy+70)}) scale(1 ${f(Math.max(.02,1-fold),3)}) translate(0 ${-(cy+70)})" opacity="${f(1-fold*.8,3)}">${showPage(n,0)}</g>`;
  // counter
  const yrs=Math.min(15,Math.floor(15*pr(t,.3,D-.8,E.io)));
  s+=Op(R(cx-cw/2,cy+ch+30,cw,120,{fill:'#0b1426',rx:12,stroke:C.brass,sw:3})+T(cx,cy+ch+112,yrs+' YEARS',{size:70,fill:C.gold,anchor:'middle',font:SERIF,weight:'700'}),pr(t,.2,.8));
  return letterbox(`<g transform="${cam([760,470,1.0],[700,480,1.08],pr(t,0,D))}">${s}</g>`,{vig:.4});
};
S.notehands=(t,D,c)=>{
  let s=`<rect x="-400" y="-300" width="2800" height="1600" fill="#1a120b"/>`;
  s+=glow(700,520,900,'A',.35);
  s+=R(-400,-100,2800,1200,{fill:'#6a4526',op:.55});
  for(let i=0;i<30;i++)s+=Ln(-400,-100+i*40+((i*13)%9),2400,-100+i*40+((i*7)%12),{stroke:'#4a2f18',sw:2,op:.35});
  const tuck=pr(t,6.0,7.6,E.io);
  // binder: big, thick
  const bx=1180,by=260;
  s+=`<g>`+R(bx-30,by+20,520,520,{fill:'#07142e',rx:10,op:.5})+R(bx-40,by,520,520,{fill:'#10285a',rx:10,stroke:'#09142e',sw:4});
  for(let i=0;i<22;i++)s+=R(bx+480-i*2,by+14+i*1.5,14,490,{fill:i%2?'#e6e0cc':'#cfc8b0',rx:2});
  s+=R(bx-40,by,60,520,{fill:'#0a1a3c',rx:6})+T(bx+462,by+270,'SOP',{size:34,fill:C.gold,font:SERIF,weight:'700',rot:90,extra:'',ls:6});
  for(let i=0;i<9;i++)s+=R(bx+484,by+30+i*52,34,38,{fill:['#c9a24b','#5ec8ff','#ff8a4a','#6fd39a','#e8c872','#c8d3e6','#c9a24b','#5ec8ff','#ff8a4a'][i],rx:4});
  s+=`</g>`;
  // paper and writing
  const pw=pr(t,.6,5.4,E.lin);
  const paperX=520,paperY=360,PWD=340,PHT=410;
  const nx=lerp(paperX+PWD/2,1180+120,tuck),ny=lerp(paperY+PHT/2,by+290,tuck),ns=lerp(1,.3,tuck);
  s+=`<g transform="translate(${f(nx)} ${f(ny)}) scale(${f(ns,3)}) rotate(${f(lerp(-4,8,tuck))})">`+R(-PWD/2,-PHT/2,PWD,PHT,{fill:'#f1e8cf',rx:4,extra:'filter="url(#drop)"'});
  const lines=3;let tip=[0,0];
  for(let i=0;i<lines;i++){
    const a=pr(pw,i/lines,(i+1)/lines,E.lin);
    let d='';const y0=-PHT/2+90+i*72;const N=34;
    for(let k=0;k<=N;k++){const xx=-PWD/2+36+(PWD-72)*(k/N)*(i===2?.6:(i===1?.85:1));d+=(k?' L':'M')+f(xx,1)+' '+f(y0+Math.sin(k*1.7+i)*7+Math.sin(k*.6)*3,1)}
    s+=Draw(d,a,{stroke:'#1a2a6a',sw:5});
    if(a>0&&a<1){const k=Math.floor(N*a);const xx=-PWD/2+36+(PWD-72)*(k/N)*(i===2?.6:(i===1?.85:1));tip=[xx,y0+Math.sin(k*1.7+i)*7]}
    if(a>=1)tip=[-PWD/2+36+(PWD-72)*(i===2?.6:(i===1?.85:1)),y0];
  }
  s+=`</g>`;
  // hand follows pen tip while writing
  const hv=1-pr(t,5.6,6.6);
  if(hv>0){
    const wx=paperX+PWD/2+tip[0]*1, wy=paperY+PHT/2+tip[1];
    const rot=-8; const lx=190*Math.cos(rot*Math.PI/180)+52*Math.sin(rot*Math.PI/180), ly=190*Math.sin(rot*Math.PI/180)-52*Math.cos(rot*Math.PI/180);
    s+=hand({x:wx-lx*1.0+ (1-hv)*200,y:wy-ly*1.0,s:1.35,rot,pen:1,rim:'#ffb04a'});
  } else {
    // hand pushes note into binder
    const hx=lerp(900,1180,tuck);
    s+=Op(hand({x:hx,y:ny-20,s:1.25,rot:0,rim:'#ffb04a'}),1-pr(t,7.8,8.6));
  }
  const cm=t<7.6?cam([620,520,1.0],[640,500,1.9],pr(t,0,6,E.io)):cam([640,500,1.9],[980,470,1.05],pr(t,7.6,D,E.io));
  return letterbox(`<g transform="${cm}">${s}</g>`,{vig:.5});
};
S.sticky=(t,D,c)=>{
  let s=`<rect x="-300" y="-200" width="2400" height="1400" fill="#16213f"/>`;
  s+=`<linearGradient id="dawnW" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ff9a6a" stop-opacity=".55"/><stop offset="1" stop-color="#ff9a6a" stop-opacity="0"/></linearGradient>`+P('M-100 100 L700 100 L1400 900 L300 900Z',{fill:'url(#dawnW)'});
  s+=R(-300,640,2400,400,{fill:'#2a2438'})+R(-300,632,2400,10,{fill:'#6a5a6a'});
  const rot=-3;
  s+=`<g transform="translate(800 470) rotate(${rot})">`+R(-190,-160,380,320,{fill:'#f2c24f',rx:6,extra:'filter="url(#drop)"'})+R(-190,-160,380,34,{fill:'#e3ae34',rx:6})
   +T(-150,-40,typed('Winter?',pr(t,.2,1.0,E.lin)),{size:58,fill:'#2a1f08',font:HAND})+T(-150,36,typed('Summer?',pr(t,1.0,1.8,E.lin)),{size:58,fill:'#2a1f08',font:HAND})+T(-150,114,typed('WHY?',pr(t,1.8,2.5,E.lin)),{size:64,fill:'#8a1d12',font:HAND,weight:'700'})+`</g>`;
  const wp=pr(t,0,2.6,E.lin);
  s+=Op(hand({x:880+ (1-pr(t,0,.5,E.out))*160+ (wp>0?Math.sin(t*14)*3:0),y:600-wp*0+(wp)*20,s:1.5,rot:-14,skin:'#a9704c',cuff:HOOD_COL,pen:1,rim:'#ff9a6a'}),1-pr(t,2.6,3.1));
  // cup
  const cp=pr(t,2.7,3.2,E.out),by=lerp(-120,0,cp)+Math.sin(pr(t,3.2,3.5)*Math.PI)*0;
  s+=Op(`<g transform="translate(1260 ${f(640+by)})"><ellipse cx="0" cy="6" rx="64" ry="12" fill="#000" opacity=".4"/><path d="M-58 -110 V-4 Q-58 8 -44 8 H44 Q58 8 58 -4 V-110Z" fill="#2c4a7a"/><path d="M58 -90 Q100 -86 96 -52 Q90 -28 58 -34" stroke="#2c4a7a" stroke-width="14" fill="none"/><ellipse cx="0" cy="-110" rx="58" ry="12" fill="#5a3a20"/></g>`,cp);
  s+=glow(1000,330,500,'W',.15);
  return letterbox(`<g transform="${cam([800,470,1.0],[800,470,1.12],pr(t,0,D))}">${s}</g>`,{vig:.5});
};

// ======== ACT 2 ========
S.office=(t,D,c)=>{
  let s=dayRoom(t);
  // plant + shelf
  s+=R(1250,230,300,12,{fill:'#6e4a28'})+R(1250,300,300,12,{fill:'#6e4a28'});
  for(let i=0;i<7;i++)s+=R(1270+i*40,180+((i*13)%20)-(i%2)*0,26,50-((i*13)%20),{fill:['#a8281f','#2a4a7a','#c9a24b','#3a6a4a'][i%4]});
  s+=P('M1470 780 Q1440 640 1500 560 M1470 780 Q1500 680 1420 600',{stroke:'#3a6a4a',sw:10})+R(1440,770,70,60,{fill:'#a85a3a',rx:6});
  // desk
  s+=R(380,650,980,22,{fill:'#8a6234'})+R(380,672,980,110,{fill:'#6e4a28'});
  // laptop
  const LX=470,LY=260,LW=600,LH=370;
  s+=P(`M${LX-30} 650 L${LX+LW+30} 650 L${LX+LW} 632 L${LX} 632Z`,{fill:'#c8cbd6'});
  s+=R(LX,LY,LW,LH,{fill:'#10131c',rx:14,extra:'filter="url(#drop)"'})+R(LX+12,LY+12,LW-24,LH-24,{fill:'#16305a'});
  s+=`<linearGradient id="desk1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1c4a8a"/><stop offset="1" stop-color="#0c1e3e"/></linearGradient>`+R(LX+12,LY+12,LW-24,LH-24,{fill:'url(#desk1)'});
  // dialog
  const dx=LX+80,dy=LY+78,dw=440,dh=220;
  s+=R(dx,dy,dw,dh,{fill:'#f4f1e8',rx:12,extra:'filter="url(#drop)"'})+R(dx,dy,dw,40,{fill:'#dfe3ee',rx:12})+R(dx,dy+26,dw,14,{fill:'#dfe3ee'})
   +Cc(dx+22,dy+20,7,{fill:'#6fd39a'})+T(dx+40,dy+27,'Capture',{size:20,fill:'#27304a',weight:'600'})
   +T(dx+24,dy+86,'Capture is ON for:',{size:26,fill:'#17203a',weight:'700'})+T(dx+24,dy+120,'email routing, ticket assignees, screen.',{size:22,fill:'#2a3350'});
  const cur=(()=>{ // cursor path
    const pausePos=[dx+90,dy+178],revPos=[dx+300,dy+178];
    const a=pr(t,3.6,5.6,E.io),b=pr(t,7.2,8.4,E.io);
    let px=lerp(dx+380,pausePos[0],a),py=lerp(dy+60,pausePos[1],a);
    px=lerp(px,revPos[0]-30,b);py=lerp(py,revPos[1]+10,b);
    return [px,py];})();
  const hov=pr(t,5.5,5.9)*(1-pr(t,7.0,7.4));
  s+=R(dx+24,dy+148,130,52,{fill:lerp(0,1,hov)>.3?'#dbe6ff':'#e9edf7',stroke:'#2a4a8a',sw:3,rx:10})+T(dx+89,dy+183,'Pause',{size:24,fill:'#17305a',anchor:'middle',weight:'700'});
  s+=R(dx+190,dy+148,230,52,{fill:'#2a5ab8',rx:10})+T(dx+305,dy+183,'Review this week',{size:22,fill:'#fff',anchor:'middle',weight:'700'});
  s+=G(P('M0 0 L0 34 L9 26 L16 42 L23 39 L16 23 L28 22 Z',{fill:'#fff',stroke:'#000',sw:2}),{tx:cur[0],ty:cur[1],s:1-.12*hov,op:pr(t,3.4,3.8)});
  s+=glow(LX+LW/2,LY+LH/2,520,'B',.15);
  // Sullivan seated right, facing left
  const lean=lerp(0,-4,pr(t,0,D));
  s+=sideFigure({x:1130,y:605,s:1.35,who:'C',pose:'seat',flip:1,rim:'#ffe2a0',rimOp:.5,shade:.3,arm:[50,95,150,175],lean:-2});
  s+=mug(1250,650,.85,t,.7);
  const p1=pr(t,3.2,5.2,E.io);
  return letterbox(`<g transform="${cam([800,470,1.0],[770,420,2.35],p1)}">${s}</g>`,{vig:.3});
};
S.hardnight=(t,D,c)=>{
  const sw=pr(t,3.8,4.5);
  // shot 1: wide with Sullivan
  let a=room(t,0,{alarm:0,tom:false,empty:false});
  a=a.replace(/<g transform="translate\(800 470\) rotate\(-1.2\)">[\s\S]*?<\/g>/,'');
  a+=backFig({x:800,y:720,s:1.12,who:'C'});
  a+=R(500,486,600,150,{fill:'#a8281f',op:.12+.1*Math.sin(t*3)});
  let s=letterbox(`<g transform="${cam([800,490,1.0],[800,560,1.3],pr(t,0,4.4))}">${a}</g>`,{vig:.6});
  // shot 2: close on her face
  let b=`<rect x="-300" y="-200" width="2400" height="1400" fill="#060a16"/>`;
  b+=glow(1250,420,800,'B',.5);
  b+=P('M1000 140 H1500 V740 H1000Z',{fill:'#0b2a4a',op:.6});
  for(let i=0;i<14;i++)b+=Ln(1040,190+i*38,1040+120+((i*53)%260),190+i*38,{stroke:i%5===0?'#ff6b5a':'#8fdcff',sw:5,op:.28+((i+Math.floor(t*2))%3)*.08});
  const lean=pr(t,6.6,8.0,E.io);
  b+=head({x:lerp(640,590,lean),y:lerp(470,500,lean),s:5.2,who:'C',tilt:lerp(0,-5,lean),rim:'#5ec8ff',rimOp:.9,shade:.55,eye:t>5.6&&t<6.6?0.6:1});
  b+=P('M180 900 Q220 720 420 690 L720 690 Q820 720 840 900Z',{fill:CARD_COL,op:.9});
  b+=R(0,0,1600,900,{fill:'#050a18',op:.0});
  const s2=letterbox(`<g transform="${cam([700,500,1.0],[720,500,1.06],pr(t,4,D))}">${b}</g>`,{vig:.7});
  s=Op(s,1-sw)+Op(s2,sw);
  // timeline strip in the lower letterbox bar with a gold marker
  const tp=pr(t,2.0,3.0);
  const mp=pr(t,5.6,6.2,E.back);
  let tl=Ln(200,846,1400,846,{stroke:'#4a5a80',sw:2})+[...Array(25)].map((_,i)=>Ln(200+i*50,838,200+i*50,854,{stroke:'#4a5a80',sw:1.5})).join('');
  tl+=T(200,884,'03:00',{size:20,fill:C.mute})+T(1400,884,'03:30',{size:20,fill:C.mute,anchor:'end'});
  const mx=200+1200*(12/30);
  tl+=G(P('M-12 -26 L12 -26 L0 -4Z',{fill:C.gold,stroke:C.goldL,sw:2})+Ln(0,-4,0,18,{stroke:C.gold,sw:3}),{tx:mx,ty:846+lerp(-70,0,mp),op:Math.min(1,mp*2)})+glow(mx,846,60,'W',.6*mp)+Op(T(mx,812,'03:12',{size:26,fill:C.gold,anchor:'middle',weight:'700'}),pr(t,6.0,6.5));
  s+=Op(tl,tp);
  return s;
};
S.morning=(t,D,c)=>{
  let s=dayRoom(t);
  s+=R(-200,0,2000,900,{fill:'#f0b070',op:.12});
  s+=R(120,640,1360,22,{fill:'#8a6234'})+R(120,662,1360,200,{fill:'#6e4a28'});
  // screen with the question
  const sx=140,sy=210,sw=720,sh=420;
  s+=R(sx,sy,sw,sh,{fill:'#10131c',rx:14,extra:'filter="url(#drop)"'})+R(sx+12,sy+12,sw-24,sh-24,{fill:'#0f2a50'})+P(`M${sx+240} 640 L${sx+sw-240} 640 L${sx+sw-200} 662 L${sx+200} 662Z`,{fill:'#9aa0b4'});
  s+=R(sx+40,sy+50,sw-80,170,{fill:'#f4f1e8',rx:12})+R(sx+40,sy+50,12,170,{fill:C.blue,rx:4})
   +T(sx+76,sy+104,'At 03:12 yesterday you paused on Loop 4.',{size:25,fill:'#17203a',font:SERIF,weight:'700'})+T(sx+76,sy+156,'What were you weighing?',{size:34,fill:'#0f4a8a',font:SERIF,weight:'700'});
  s+=R(sx+40,sy+246,sw-80,130,{fill:'#e7ecf7',rx:10});
  const tp=pr(t,1.8,6.5,E.lin);
  for(let i=0;i<4;i++){const a=pr(tp,i/4,(i+1)/4,E.lin);s+=Ln(sx+64,sy+276+i*28,sx+64+(sw-128-(i===3?160:0))*a,sy+276+i*28,{stroke:'#2a3a6a',sw:6,op:.8})}
  s+=glow(sx+sw/2,sy+sh/2,520,'B',.12);
  // Sullivan and tea
  const sm=pr(t,5.4,6.4,E.io);
  s+=sideFigure({x:1230,y:640,s:1.45,who:'C',pose:'seat',flip:1,rim:'#ffe2a0',rimOp:.7,shade:.35,arm:[40,80,150,90],smile:sm,eye:1-.5*sm,lean:-3});
  s+=`<g transform="translate(1000 650)">${El(0,6,50,10,{fill:'#000',op:.3})}${P('M-44 -66 V-6 Q-44 6 -30 6 H30 Q44 6 44 -6 V-66Z',{fill:'#f4f1e8'})}${P('M44 -52 Q74 -50 70 -28 Q64 -10 44 -14',{stroke:'#f4f1e8',sw:9,fill:'none'})}${El(0,-66,44,9,{fill:'#a8601a'})}${[0,1,2].map(i=>{const ph=(t*.3+i*.33)%1;return P(`M${-14+i*14} -76 q${f(10*Math.sin(ph*6+i),1)} -22 0 -40`,{stroke:'#fff',sw:5,op:.3*(1-ph),extra:`transform="translate(0 ${f(-ph*24)})"`})}).join('')}</g>`;
  return letterbox(`<g transform="${cam([760,450,1.0],[880,450,1.28],pr(t,0,D,E.io))}">${s}</g>`,{vig:.3});
};

// ======== ACT 5 ========
S.robot=(t,D,c)=>{
  let s=`<rect x="-300" y="-200" width="2400" height="1400" fill="#080d1c"/>`;
  s+=glow(1000,450,700,'B',.22)+glow(1100,250,400,'A',.15);
  s+=R(-300,660,2400,300,{fill:'#10162a'});
  s+=gaugeFace(1000,370,190,.5+.08*Math.sin(t));
  // valve handwheel
  const turn=pr(t,3.1,3.9,E.io)*40;
  s+=`<g transform="translate(1000 600)">${Ln(0,0,0,80,{stroke:'#3a4054',sw:22})}<g transform="rotate(${f(turn)})">${Cc(0,0,70,{stroke:'#a8281f',sw:14})}${[0,60,120].map(a=>Ln(-70*Math.cos(a*Math.PI/180),-70*Math.sin(a*Math.PI/180),70*Math.cos(a*Math.PI/180),70*Math.sin(a*Math.PI/180),{stroke:'#a8281f',sw:10})).join('')}${Cc(0,0,14,{fill:'#2a2d3a'})}</g></g>`;
  // robot hand from left: approach, pause, retreat
  const ap=pr(t,.3,1.5,E.io),rt=pr(t,2.3,3.1,E.io);
  const rx=lerp(-200,820,ap)-lerp(0,700,rt);
  s+=`<g transform="translate(${f(rx)} 560)">`+hand({x:0,y:0,s:1.5,rot:0,skin:'#e8edf5',cuff:'#8a94a8',rim:'#5ec8ff'})+Cc(-140,0,34,{stroke:C.blue,sw:5,op:.9,extra:'filter="url(#glowS)"'})+`</g>`;
  const pp=pr(t,1.5,1.8)*(1-pr(t,2.2,2.4));
  s+=Op(Cc(rx+160,540,40,{stroke:C.blue,sw:3})+T(rx+160,552,'?',{size:44,fill:C.blue,anchor:'middle',weight:'700'}),pp);
  // human hand enters from right
  const hp=pr(t,2.8,3.4,E.out);
  s+=hand({x:lerp(1900,1090,hp),y:560,s:1.5,rot:180,skin:'#a9704c',cuff:HOOD_COL,rim:'#ffa83a'});
  return letterbox(`<g transform="${cam([860,470,1.0],[900,480,1.12],pr(t,0,D))}">${s}</g>`,{vig:.55});
};

// ======== ACT 6 ========
function dawnRays(t){return P('M80 130 L460 130 L880 900 L300 900Z',{fill:'url(#rayG)',op:.4})+P('M520 130 L760 130 L1200 900 L860 900Z',{fill:'url(#rayG)',op:.3})}
S.sunrise=(t,D,c)=>{
  let s=room(t,1,{alarm:1,tom:false});
  s+=backFig({x:360,y:720,s:1.12,who:'T',tilt:lerp(0,2,pr(t,0,D)),rim:'#ffb070',rim2:'#5ec8ff'});
  s+=dawnRays(t);
  return letterbox(`<g transform="${cam([800,480,1.0],[470,560,1.4],pr(t,0,D,E.io))}">${s}</g>`,{vig:.5});
};
S.reliefcard=(t,D,c)=>{
  const c0=c[0]??1.5;
  let s=`<rect x="-300" y="-200" width="2400" height="1400" fill="#0a1020"/>`;
  s+=plantView(-300,-100,2200,400,1,t);
  s+=R(-300,300,2400,700,{fill:'#0c1426'});
  s+=glow(1100,440,800,'B',.25)+glow(300,300,500,'W',.2);
  // monitor with card
  const mx=760,my=190,mw=760,mh=470;
  s+=R(mx-14,my-14,mw+28,mh+28,{fill:'#07090f',rx:14})+R(mx,my,mw,mh,{fill:'#0b1d38',rx:6});
  const ap=pr(t,.3,1.0,E.out);
  let cd=R(0,0,mw-80,mh-90,{fill:'#0a1f3c',stroke:C.blue,sw:3.5,rx:14})+R(0,0,mw-80,54,{fill:C.blueD,rx:14})+R(0,30,mw-80,24,{fill:C.blueD})+T(22,38,'RELIEF  ·  Loop 4',{size:27,fill:C.blue,weight:'700',ls:3});
  cd+=Op(textBlock(24,112,'In winter, this alarm is a known false trigger.',34,{size:31,fill:'#eaf4ff',font:SERIF,weight:'700',lh:42}),pr(t,c0+.8,c0+1.4));
  cd+=Op(textBlock(24,226,'Confirmed by Chief Sullivan, last confirmed 11 months ago.',38,{size:25,fill:C.green,lh:34}),pr(t,c0+4.2,c0+4.8));
  cd+=Op(R(24,304,mw-128,50,{fill:C.amber,rx:8,op:.95})+T((mw-80)/2,339,'Verify before you ignore it.',{size:28,fill:'#2a1604',anchor:'middle',weight:'700'}),pr(t,c0+7.2,c0+7.8));
  s+=G(cd,{tx:mx+40,ty:my+22+(1-ap)*14,op:ap});
  s+=glow(mx+mw/2,my+mh/2,700,'B',.18);
  s+=R(mx-40,my+mh+16,mw+80,120,{fill:'#10162a'});
  // Reyes reading: profile, facing right
  const nod=Math.sin(pr(t,c0+8.6,c0+9.6)*Math.PI*2)*4;
  s+=sideFigure({x:280,y:760,s:1.7,who:'T',pose:'seat',flip:0,rim:'#8fdcff',rimOp:.9,shade:.5,arm:[60,60,200,50],lean:3,headTilt:nod,headDx:0,calm:1});
  return letterbox(`<g transform="${cam([620,470,1.0],[780,430,1.2],pr(t,0,D,E.io))}">${s}</g>`,{vig:.5});
};
S.mug=(t,D,c)=>{
  let s=`<rect x="-300" y="-200" width="2400" height="1400" fill="#0c1226"/>`;
  s+=plantView(60,80,1480,330,1,t);s+=mullions(60,80,1480,330,3,'#080e1c',16);
  s+=R(-300,410,2400,500,{fill:'#161c32'});s+=glow(700,330,700,'W',.18)+dawnRays(t);
  // desk side-on
  s+=R(560,600,880,26,{fill:'#4a3a2e'})+R(580,626,840,260,{fill:'#10152a'});
  // chair side-on with cardigan on the back
  s+=R(1120,640,170,24,{fill:'#141a2c',rx:10})+R(1270,430,36,230,{fill:'#141a2c',rx:16})+Ln(1200,664,1200,800,{stroke:'#0a0d17',sw:12})+P('M1130 800 H1270',{stroke:'#0a0d17',sw:12});
  const sx=pr(t,2.3,3.0,E.io);
  s+=cardigan(1272,444+0,.55,'#ffb070');
  // mug cycle: on desk -> lifted -> back
  const lift=pr(t,1.0,1.6,E.io)*(1-pr(t,1.9,2.5,E.io));
  const mx=lerp(920,930,lift),my=600-lift*70;
  s+=mug(mx,my,.9,t,.8*(1-lift*.3));
  // Reyes, standing
  const reach=pr(t,.2,1.0,E.io)*(1-pr(t,2.5,2.9,E.io));
  const toMug=pr(t,.2,1.0,E.io),back=pr(t,2.5,3.0,E.io);
  let armEnd,lean,xx;
  if(t<2.4){lean=lerp(0,12,toMug)*(1-pr(t,2.0,2.4));armEnd=[lerp(34,118,toMug),lerp(190,165,toMug)];xx=840}
  else{ xx=lerp(840,1020,pr(t,2.4,3.1,E.io));lean=lerp(0,8,pr(t,3.0,3.6));armEnd=[lerp(34,170,pr(t,3.0,3.6)),lerp(190,60,pr(t,3.0,3.6))]}
  s+=sideFigure({x:xx,y:585,s:1.25,who:'T',pose:'stand',flip:0,rim:'#ffb070',rimOp:.8,shade:.5,arm:[lerp(8,70,toMug),lerp(100,100,toMug),armEnd[0],armEnd[1]],lean,step:pr(t,2.4,3.1)*0});
  return letterbox(`<g transform="${cam([860,470,1.0],[1000,500,1.2],pr(t,0,D,E.io))}">${s}</g>`,{vig:.5});
};
S.pullback=(t,D,c)=>{
  const wx=700,wy=470,ww=360,wh=200;
  const p=pr(t,0,D,E.io);
  let s=`<rect x="-3000" y="-2000" width="7000" height="5000" fill="#10152a"/>`;
  s+=plantView(-1200,-200,4000,880,1,t*.5);
  s+=glow(1600,630,800,'W',.5);
  // building mass
  s+=R(400,330,960,520,{fill:'#0a0f1f'})+R(380,316,1000,30,{fill:'#161c34'})+R(-1200,740,4000,400,{fill:'#080c18'});
  for(let i=0;i<5;i++)s+=R(430+i*180,720,120,70,{fill:'#12192e'});
  // the lit window
  s+=R(wx-8,wy-8,ww+16,wh+16,{fill:'#050810'});
  s+=`<clipPath id="wclip"><rect x="${wx}" y="${wy}" width="${ww}" height="${wh}"/></clipPath><g clip-path="url(#wclip)">`;
  s+=R(wx,wy,ww,wh,{fill:'#2a2438'})+`<linearGradient id="inW" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ffb070" stop-opacity=".6"/><stop offset="1" stop-color="#ffb070" stop-opacity=".1"/></linearGradient>`+R(wx,wy,ww,wh,{fill:'url(#inW)'});
  s+=R(wx,wy+150,ww,50,{fill:'#161c32'})+R(wx+20,wy+110,200,10,{fill:'#4a3a2e'});
  s+=monitor(wx+30,wy+40,90,56,'t',t,{})+monitor(wx+130,wy+40,90,56,'t',t+1,{});
  s+=R(wx+250,wy+90,10,70,{fill:'#141a2c'})+R(wx+230,wy+130,60,8,{fill:'#141a2c',rx:3})+cardigan(wx+262,wy+92,.14,'#ffb070');
  s+=mug(wx+196,wy+110,.26,t,.7);
  // Reyes standing straight, lit by the window
  s+=sideFigure({x:wx+90,y:wy+150,s:.3,who:'T',pose:'stand',flip:0,rim:'#ffd0a0',rimOp:.9,shade:.4,arm:[8,100,34,190],lean:0});
  s+=`</g>`+mullions(wx,wy,ww,wh,2,'#05070d',6);
  s+=glow(wx+ww/2,wy+wh/2,420,'A',.35);
  return letterbox(`<g transform="${cam([wx+ww/2,wy+wh/2,3.9],[wx+ww/2+40,wy+wh/2-10,1.0],p)}">${s}</g>`,{vig:.5});
};
