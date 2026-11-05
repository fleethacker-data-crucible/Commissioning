// ===== photographic-style screen inserts (native UI, full frame, letterboxed) =====
function screenBG(t,hue='#0f2a50'){
  let s=`<rect width="1600" height="900" fill="#071226"/>`;
  s+=`<linearGradient id="scrD" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1c4a8a"/><stop offset="1" stop-color="#0a1a36"/></linearGradient>`+R(0,0,1600,900,{fill:'url(#scrD)'});
  s+=glow(800,450,900,'B',.25);
  // faint pixel-grid / scanline feel
  for(let y=0;y<900;y+=4)s+=Ln(0,y,1600,y,{stroke:'#000',sw:1,op:.06});
  return s;
}
function cursorG(x,y,press=0,op=1){return G(P('M0 0 L0 34 L9 26 L16 42 L23 39 L16 23 L28 22 Z',{fill:'#fff',stroke:'#000',sw:2}),{tx:x,ty:y,s:1-.12*press,op})}
S.dialogUI=(t,D,c)=>{
  let s=screenBG(t);
  const dx=480,dy=250,dw=640,dh=330;
  s+=R(dx,dy,dw,dh,{fill:'#f4f1e8',rx:16,extra:'filter="url(#drop)"'})+R(dx,dy,dw,56,{fill:'#dfe3ee',rx:16})+R(dx,dy+36,dw,20,{fill:'#dfe3ee'})
   +Cc(dx+30,dy+28,9,{fill:'#6fd39a'})+T(dx+52,dy+37,'Capture',{size:26,fill:'#27304a',weight:'600'})
   +T(dx+36,dy+126,'Capture is ON for:',{size:38,fill:'#17203a',weight:'700'})+T(dx+36,dy+176,'email routing, ticket assignees, screen.',{size:30,fill:'#2a3350'});
  const hov=pr(t,.6,1.0)*(1-pr(t,2.1,2.5));
  s+=R(dx+36,dy+226,190,70,{fill:hov>.3?'#dbe6ff':'#e9edf7',stroke:'#2a4a8a',sw:3,rx:12})+T(dx+131,dy+272,'Pause',{size:32,fill:'#17305a',anchor:'middle',weight:'700'});
  s+=R(dx+260,dy+226,340,70,{fill:'#2a5ab8',rx:12})+T(dx+430,dy+272,'Review this week',{size:30,fill:'#fff',anchor:'middle',weight:'700'});
  const a=pr(t,.1,.9,E.io),b=pr(t,2.2,2.9,E.io);
  let cx=lerp(dx+560,dx+140,a),cy=lerp(dy+120,dy+262,a);cx=lerp(cx,dx+430,b);cy=lerp(cy,dy+300,b);
  s+=cursorG(cx,cy,0,1);
  return letterbox(drift(s,t,D,1,1.03),{vig:.45});
};
S.questionUI=(t,D,c)=>{
  let s=screenBG(t);
  const sx=300,sy=200,sw=1000;
  s+=R(sx,sy,sw,210,{fill:'#f4f1e8',rx:16,extra:'filter="url(#drop)"'})+R(sx,sy,16,210,{fill:C.blue,rx:6})
   +T(sx+48,sy+78,'At 03:12 yesterday you paused on Loop 4.',{size:38,fill:'#17203a',font:SERIF,weight:'700'})+T(sx+48,sy+150,'What were you weighing?',{size:46,fill:'#0f4a8a',font:SERIF,weight:'700'});
  s+=R(sx,sy+240,sw,280,{fill:'#e7ecf7',rx:14})+T(sx+32,sy+290,'Your answer',{size:24,fill:'#7a86a8'});
  const blink=(Math.floor(t*2)%2===0);
  if(blink)s+=R(sx+32,sy+316,4,44,{fill:'#17203a'});
  s+=Op(T(sx+32,sy+350,typed('The winter false trigger: the inlet sensor ices and reads high.',pr(t,2.4,D,E.lin)),{size:30,fill:'#17203a',font:MONO}),pr(t,2.3,2.6));
  return letterbox(drift(s,t,D,1,1.03),{vig:.45});
};
S.reliefUI=(t,D,c)=>{
  let s=`<rect width="1600" height="900" fill="#061024"/>`+`<linearGradient id="scrR" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b1f3e"/><stop offset="1" stop-color="#050c1c"/></linearGradient>`+R(0,0,1600,900,{fill:'url(#scrR)'});
  for(let y=0;y<900;y+=4)s+=Ln(0,y,1600,y,{stroke:'#000',sw:1,op:.06});
  s+=glow(800,440,900,'B',.3);
  const cw=1180,ch=520,cx=(1600-cw)/2,cy=190;
  const ap=pr(t,0,.6,E.out);
  let cd=R(0,0,cw,ch,{fill:'#0a1f3c',stroke:C.blue,sw:4,rx:18,extra:'filter="url(#drop)"'})+R(0,0,cw,70,{fill:C.blueD,rx:18})+R(0,40,cw,30,{fill:C.blueD})+T(34,48,'RELIEF  ·  Loop 4',{size:32,fill:C.blue,weight:'700',ls:4})+T(cw-34,48,'knowledge as of 11 months ago',{size:24,fill:'#8fd0ff',anchor:'end'});
  cd+=Op(T(40,150,typed('In winter, this alarm is a known false trigger.',pr(t,.2,1.6,E.lin)),{size:44,fill:'#eaf4ff',font:SERIF,weight:'700'}),pr(t,.1,.3));
  cd+=Op(T(40,250,'Confirmed by Chief Sullivan, last confirmed 11 months ago.',{size:34,fill:C.green}),pr(t,3.0,3.6));
  cd+=Op(R(40,330,cw-80,86,{fill:C.amber,rx:12})+T(cw/2,386,'Verify before you ignore it.',{size:40,fill:'#2a1604',anchor:'middle',weight:'700'}),pr(t,6.0,6.6));
  cd+=Op(T(40,470,'Source: ticket 2019-03-03  ·  confirmed in the Friday review',{size:24,fill:'#8fa9d0'}),pr(t,3.6,4.2));
  s+=G(cd,{tx:cx,ty:cy+(1-ap)*14,op:ap});
  return letterbox(drift(s,t,D,1,1.025),{vig:.45});
};
S.endcard=(t,D,c)=>{
  let s=`<rect width="1600" height="900" fill="#050a18"/><rect width="1600" height="900" fill="url(#bgchart)" opacity=".6"/>`;
  s+=Op(Ln(420,350,1180,350,{stroke:C.brass,sw:1.5})+Ln(420,520,1180,520,{stroke:C.brass,sw:1.5}),pr(t,0,.8));
  s+=Op(T(800,448,'THE LONG TURNOVER',{size:88,fill:C.gold,anchor:'middle',font:SERIF,weight:'700',ls:10,extra:'filter="url(#glowS)"'}),pr(t,.2,1.4));
  s+=Op(T(800,590,'A moonshot R&D proposal',{size:34,fill:C.pale,anchor:'middle',ls:3}),pr(t,1.4,2.4));
  s+=Op(T(800,650,'The scenes are a dramatization: the people and events are invented. The proposal is real.',{size:26,fill:C.mute,anchor:'middle',font:SERIF,style:'italic'}),pr(t,2,3));
  const sn=c[0]??1.6;s+=Op(T(800,760,"Let's start now.",{size:44,fill:C.goldL,anchor:'middle',font:SERIF,weight:'700',ls:2}),pr(t,sn+.1,sn+.7));
  s+=Op(Cc(800,230,56,{stroke:C.gold,sw:2.5})+Cc(800,230,8,{fill:C.gold})+P('M800 174V190M800 270V286M744 230H760M840 230H856',{stroke:C.gold,sw:3})+P('M800 230 L826 204',{stroke:C.goldL,sw:3}),pr(t,.1,1));
  return s;
};
