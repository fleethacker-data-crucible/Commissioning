const S={}; // scene registry: name -> (t,D,c,B)=>svg string

function wrapText(str,n){const w=str.split(' ');const L=[];let cur='';for(const x of w){if((cur+' '+x).trim().length>n){L.push(cur.trim());cur=x}else cur+=' '+x}if(cur.trim())L.push(cur.trim());return L}
function textBlock(x,y,str,n,o={}){const lh=o.lh||(o.size||26)*1.28;return wrapText(str,n).map((l,i)=>T(x,y+i*lh,l,o)).join('')}
function drift(inner,t,D,s0=1,s1=1.04,cx=800,cy=450,dx=0,dy=0){const p=clamp(t/Math.max(D,1));const s=lerp(s0,s1,E.soft(p));return `<g transform="translate(${f(cx+dx*p)} ${f(cy+dy*p)}) scale(${f(s,5)}) translate(${-cx} ${-cy})">${inner}</g>`}

// ---------- ICEBERG (ship's chart) ----------
const ICE_UNDER='M690 360 L1010 360 L1100 460 L1075 570 L1130 670 L1055 770 L900 830 L740 815 L600 760 L545 660 L585 555 L610 450 Z';
const ICE_TIP='M690 360 L735 300 L790 248 L832 282 L882 205 L935 268 L988 328 L1012 360 Z';
function iceberg(t,D,c,mode){
  let s=chartBG({title:'FOUR LAYERS OF TRIBAL KNOWLEDGE',sub:mode===2?'WHAT PASSIVE CAPTURE REACHES':'WHAT THE BINDER NEVER HOLDS'});
  const wl=360;
  s+=R(40,wl,1520,860-wl,{fill:'#0a2342',op:.55});
  s+=R(40,40,1520,wl-40,{fill:'#16345e',op:.18});
  // waves
  let w='M40 '+wl;for(let x=40;x<=1560;x+=20)w+=` L${x} ${f(wl+3*Math.sin(x*0.03+t*1.1),2)}`;
  s+=P(w,{stroke:'#8fd4ff',sw:2.5,op:.8});
  const rows=[{y:285,n:'01',name:'EXPLICIT',txt:'The SOP, the runbook, the config file',meter:1.0,lab:'HIGH'},{y:420,n:'02',name:'PROCEDURAL',txt:'The real fourteen clicks',meter:.66,lab:'MEDIUM'},{y:550,n:'03',name:'RELATIONAL',txt:'Who actually fixes things',meter:.40,lab:'PARTIAL'},{y:715,n:'04',name:'JUDGMENT',txt:'Why the alarm is ignored',meter:.10,lab:'LOW: ASK FOR IT'}];
  const rv=mode===2?[0,0,0,0]:[0.6,1.2,2.8,4.4];
  const grow=mode===2?1:pr(t,0.9,5.8,E.io);
  const pTip=mode===2?1:pr(t,0.2,1.1,E.out);
  // tip
  s+=`<g opacity="${f(pTip,3)}" transform="translate(0 ${f((1-pTip)*30)})">${P(ICE_TIP,{fill:'#eaf6ff',stroke:'#bfe3ff',sw:2})}${P('M735 300 L790 248 L832 282 L860 360 L735 360 Z',{fill:'#cfe8fb',op:.8})}${P('M882 205 L935 268 L988 328 L1012 360 L900 360Z',{fill:'#a9cfee',op:.9})}</g>`;
  // underwater mass revealed from the top down
  const clipH=(830-wl)*grow;
  s+=`<clipPath id="icU"><path d="${ICE_UNDER}"/></clipPath><clipPath id="icR"><rect x="500" y="${wl}" width="700" height="${f(clipH)}"/></clipPath>`;
  s+=`<g clip-path="url(#icR)"><g clip-path="url(#icU)">`
   +R(500,360,700,120,{fill:'#9ccdf0'})+R(500,480,700,140,{fill:'#4f8cc0'})+R(500,620,700,220,{fill:'#1f4a7c'})
   +Cc(850,745,70,{fill:C.amber,op:mode===2?.10:.45,extra:'filter="url(#blur20)"'})
   +(mode===2?R(500,620,700,220,{fill:'#050a18',op:.45*pr(t,c[1]??1,(c[1]??1)+1.2)}):'')
   +`</g>`+P(ICE_UNDER,{stroke:'#bfe3ff',sw:2,op:.9})+`</g>`;
  s+=Ln(560,480,1140,480,{stroke:'#e8f4ff',sw:1.5,dash:'3 8',op:.6*pr(grow,.2,.5)})+Ln(540,620,1140,620,{stroke:'#e8f4ff',sw:1.5,dash:'3 8',op:.6*pr(grow,.5,.8)});
  // labels
  rows.forEach((r,i)=>{
    const a=mode===2?pr(t,0.1+i*0.1,0.7+i*0.1):(i===0?pr(t,0.5,1.2):pr(t,rv[i],rv[i]+0.9));
    const lit = (mode===2 && i===3)? (1-0.45*pr(t,c[1]??1,(c[1]??1)+1)) : 1;
    let g=Cc(105,r.y-20,28,{fill:C.navy,stroke:C.gold,sw:2.5})+T(105,r.y-9,r.n,{size:26,fill:C.gold,anchor:'middle',font:SERIF,weight:'700'});
    g+=T(155,r.y-18,r.name,{size:34,fill:C.gold,font:SERIF,weight:'700',ls:4});
    g+=T(155,r.y+22,r.txt,{size:27,fill:C.pale,op:lit});
    const ex = i===0?690:(i===1?600:(i===2?560:560));
    {const lx=155+Math.max(r.txt.length*13.6,r.name.length*24)+14; g+=Ln(lx,r.y+8,[790,640,590,590][i],r.y+8,{stroke:C.gold,sw:1.8,dash:'2 7',op:.8});}
    s+=Op(g,a);
    if(mode===2){
      const mp=pr(t,(i<3?(c[0]??.5)+i*0.35:(c[1]??2)),(i<3?(c[0]??.5)+i*0.35:(c[1]??2))+1.1,E.out);
      const bx=1170,bw=330;
      let m=R(bx,r.y-24,bw,34,{fill:'#0c1a33',stroke:C.mute,sw:1.5,rx:6});
      const fill=r.meter*bw*mp;
      m+=R(bx+2,r.y-22,Math.max(0,fill-4),30,{fill:i===3?C.blueD:C.blue,rx:5,op:i===3?.55:.95,extra:i<3?'filter="url(#glowS)"':''});
      m+=T(bx,r.y-38,r.lab,{size:24,fill:i===3?C.amber:C.blue,ls:3,weight:'600'});
      if(i===3)m+=R(bx,r.y-24,bw,34,{stroke:C.amber,sw:2,rx:6,op:.9*mp,extra:'stroke-dasharray="6 6"'});
      s+=Op(m,pr(t,0.2+i*.12,.8+i*.12));
    }
  });
  if(mode===2)s+=Op(T(1170,205,'PASSIVE CAPTURE',{size:26,fill:C.pale,ls:5,font:SERIF,weight:'700'}),pr(t,0,.6));
  return drift(s,t,D,1,1.035,800,500);
}
S.iceberg1=(t,D,c)=>iceberg(t,D,c,1);
S.iceberg2=(t,D,c)=>iceberg(t,D,c,2);

// ---------- VOYAGE CHART ----------
(function(){
  const PX0=170,PX1=1480,PY0=225,PY1=745,YEARS=30,CAR=15,HL=5,AT=.85,SUN=.35;
  const X=y=>PX0+(PX1-PX0)*y/YEARS, Y=v=>PY1-(PY1-PY0)*v;
  const K=y=>0.95*(1-Math.exp(-y/4.5)), ramp=y=>Math.min(1,y/3), Cap=y=>K(y)*AT*.9*ramp(y), capExit=Cap(CAR), Fresh=y=>capExit*Math.pow(.5,(y-CAR)/HL);
  const path=(fn,a,b)=>{let d='';for(let y=a;y<=b+1e-9;y+=.1)d+=(d?' L':'M')+f(X(y),1)+' '+f(Y(fn(y)),1);return d};
  const sunT=CAR+HL*Math.log(capExit/SUN)/Math.LN2;
  const pK=path(K,0,CAR),pC=path(Cap,0,CAR),pF=path(Fresh,CAR,YEARS);
  S.voyage=(t,D,c)=>{
    let s=chartBG({title:'THE VOYAGE CHART',sub:'KNOWLEDGE OVER A CAREER AND AFTER THE EXIT'});
    s+=Op(R(PX0,PY0,PX1-PX0,PY1-PY0,{fill:'#0a1630',op:.65,stroke:C.brassD,sw:1.5}),pr(t,0,.5));
    for(let v=0;v<=1.001;v+=.25)s+=Op(Ln(PX0,Y(v),PX1,Y(v),{stroke:'#5b78aa',sw:1,op:.35,dash:'2 7'})+T(PX0-14,Y(v)+8,Math.round(v*100)+'%',{size:22,fill:C.mute,anchor:'end'}),pr(t,.1,.7));
    for(let y=0;y<=YEARS;y+=5)s+=Op(Ln(X(y),PY1,X(y),PY1+10,{stroke:C.mute,sw:1.5})+T(X(y),PY1+38,'yr '+y,{size:22,fill:C.mute,anchor:'middle'}),pr(t,.1,.7));
    s+=Op(T(PX0+8,PY0-12,'knowledge',{size:22,fill:C.mute,style:'italic',font:SERIF}),pr(t,.1,.7));
    const tB=pr(t,.4,Math.max(c[0]+3.4,2.5),E.io), tC=pr(t,(c[1]??2)-.2,(c[3]??5)+2.2,E.io);
    const tx=c[4]??7; const tD=pr(t,Math.min(tx+2.4,D-5),Math.min(tx+2.4,D-5)+2.8,E.io);
    // legend
    s+=Op(Ln(80,160,130,160,{stroke:C.gold,sw:5})+T(142,168,'What she knows',{size:26,fill:C.gold})+Ln(430,160,480,160,{stroke:C.blue,sw:5})+T(492,168,'What the agent has captured and she has confirmed',{size:26,fill:C.blue}),pr(t,.3,.9));
    // exit marker & sunset
    const tE=pr(t,Math.min(tx+1.8,D-5.5),Math.min(tx+1.8,D-5.5)+.7,E.out);
    s+=Op(R(X(CAR),PY0,X(sunT)-X(CAR),PY1-PY0,{fill:C.blue,op:.10})+Ln(X(CAR),PY0-14,X(CAR),PY1,{stroke:C.pale,sw:2,dash:'4 6'})+T(X(CAR)+12,PY0+26,'Exit: change of watch',{size:24,fill:C.pale}),tE);
    s+=Op(T(X(7.5),PY0+26,'Career',{size:24,fill:C.pale,anchor:'middle'}),pr(t,.9,1.5));
    s+=Op(Ln(PX0,Y(SUN),PX1,Y(SUN),{stroke:C.red,sw:2.5,dash:'10 7'})+T(PX1-8,Y(SUN)-12,'sunset line',{size:24,fill:C.red,anchor:'end'}),tE);
    s+=Draw(pK,tB,{stroke:C.gold,sw:6,extra:'filter="url(#glowS)"'});
    s+=Draw(pC,tC,{stroke:C.blue,sw:6,extra:'filter="url(#glowS)"'});
    // confirmation ticks
    for(let i=0;i<5;i++){const yr=3+i*3;const a=pr(t,tx+i*.22,tx+i*.22+.35,E.back)*pr(tC,.99,1);if(a>0)s+=G(Cc(0,0,10,{fill:C.navy,stroke:C.goldL,sw:3})+P('M-5 0 L-1.5 4 L5.5 -4',{stroke:C.goldL,sw:3}),{tx:X(yr),ty:Y(Cap(yr)),s:a,op:Math.min(1,a)});}
    s+=Draw(pF,tD,{stroke:C.blue,sw:5,op:.7,extra:'stroke-dasharray="1.2 1.6" stroke-dashoffset="0" style="stroke-dasharray:none"'});
    // lost at exit bracket
    const tL=pr(t,Math.min(tx+4.6,D-3),Math.min(tx+4.6,D-3)+.8,E.out);
    s+=Op(Ln(X(CAR)-14,Y(K(CAR)),X(CAR)-14,Y(capExit),{stroke:C.red,sw:3})+T(X(CAR)-26,(Y(K(CAR))+Y(capExit))/2+8,'lost at exit',{size:24,fill:C.red,anchor:'end'})+Cc(X(CAR),Y(K(CAR)),8,{fill:C.gold})+Cc(X(CAR),Y(capExit),8,{fill:C.blue}),tL);
    // the required honesty label
    s+=Op(T(PX1,PY1+84,'Illustrative model, not measured data.',{size:28,fill:C.pale,anchor:'end',font:SERIF,style:'italic'}),pr(t,.8,1.6));
    return drift(s,t,D,1,1.02);
  }
})();

// ---------- FRIDAY REVIEW ----------
S.review=(t,D,c)=>{
  let s=chartBG({title:'THE FRIDAY REVIEW',sub:"HERE'S WHAT I THINK YOU TAUGHT ME THIS WEEK"});
  const cards=[
   {x:110,y:225,txt:'In winter, the Loop 4 alarm is a false trigger',src:'from the ticket on March 3'},
   {x:830,y:225,txt:'Escalations go to the night supervisor first',src:'from the email routing'},
   {x:110,y:515,txt:'Call Dana in supply, not the help desk',src:'from the ticket assignees'},
   {x:830,y:515,txt:'The 2019 workaround is still in place',src:'from the screen capture'}];
  const act=[2.3,3.4,2.9+1.3,5.3]; // times of cursor action per card
  const kind=['c','s','c','c'];
  const order=[0,1,2,3], at=[2.0,3.0,3.9,4.8];
  let cursorX=1420,cursorY=760;
  cards.forEach((cd,i)=>{
    const a=pr(t,0.15+i*.28,0.9+i*.28,E.out);
    const ta=at[i]+(c[0]?0:0), done=pr(t,ta,ta+.35,E.out);
    const strike=kind[i]==='s';
    let g=R(0,0,660,240,{fill:'#0d1b36',stroke:strike&&done>0?C.red:C.brass,sw:2.5,rx:16,extra:'filter="url(#drop)"'});
    g+=R(0,0,12,240,{fill:strike&&done>0?C.red:C.gold,rx:4,op:.9});
    g+=textBlock(38,68,cd.txt,34,{size:31,fill:strike&&done>0?C.mute:C.cream,font:SERIF,weight:'700'});
    if(strike&&done>0)g+=Ln(38,52,38+590*done,52,{stroke:C.red,sw:3})+Ln(38,92,38+420*done,92,{stroke:C.red,sw:3});
    g+=T(38,150,'↗ '+cd.src,{size:24,fill:C.blue})+Ln(62,156,62+cd.src.length*11.4,156,{stroke:C.blue,sw:1.5,op:.6});
    // buttons
    const conf=!strike&&done>0, strk=strike&&done>0;
    g+=R(38,176,170,46,{fill:conf?C.gold:'#16294d',stroke:C.gold,sw:2,rx:10})+T(123,208,conf?'Confirmed':'Confirm',{size:25,fill:conf?C.ink:C.gold,anchor:'middle',weight:'600'});
    g+=R(230,176,130,46,{fill:strk?C.red:'#16294d',stroke:C.red,sw:2,rx:10})+T(295,208,strk?'Struck':'Strike',{size:25,fill:strk?C.ink:C.red,anchor:'middle',weight:'600'});
    if(conf)g+=G(Cc(0,0,26,{fill:C.gold})+P('M-11 0 L-3 9 L12 -9',{stroke:C.ink,sw:5}),{tx:610,ty:195,s:E.back(done),op:1});
    const slide=(1-a)*60;
    s+=G(g,{tx:cd.x,ty:cd.y+slide,op:a});
  });
  // cursor travels
  let px=1300,py=860;const pts=[[1300,860]];
  const tgt=cards.map((cd,i)=>[cd.x+(kind[i]==='s'?295:123),cd.y+199]);
  let seqT=[1.2,...at.map(x=>x-.2)];
  let cx=1300,cy=860;
  for(let i=0;i<4;i++){const p=pr(t,at[i]-.9,at[i]-.15,E.io);const fromP=i===0?[1300,860]:tgt[i-1];cx=lerp(fromP[0],tgt[i][0],p);cy=lerp(fromP[1],tgt[i][1],p);if(t<at[i]+.4)break;}
  const press=Math.max(...at.map(a=>Math.exp(-Math.pow((t-a-.1)*10,2))));
  s+=G(P('M0 0 L0 34 L9 26 L16 42 L23 39 L16 23 L28 22 Z',{fill:'#fff',stroke:'#000',sw:2}),{tx:cx,ty:cy,s:1-.1*press,op:pr(t,1,1.5)});
  return drift(s,t,D,1,1.02);
};

// ---------- SERVICE RECORD ----------
S.service=(t,D,c)=>{
  let s=chartBG({title:'SIX STAGES, EACH WITH A GATE',sub:'THE AGENT SERVICE RECORD'});
  const st=[
   ['01','Shadow','Watches and drafts silently.'],
   ['02','Co-pilot','Suggests to its source person.'],
   ['03','Sea trials',"Replays the person's own past cases."],
   ['04','Relief','Covers the role while a successor ramps up. It advises; a human decides.'],
   ['05','Emeritus','Advisory only, with the date of its knowledge on every answer.'],
   ['06','Decommission','Archived as a course and a searchable log.']];
  const pa=pr(t,.1,1.1,E.out);
  s+=G(plaque(110,160,1380,650,{lit:0.12}),{op:pa,ty:(1-pa)*40});
  s+=Op(T(800,225,'SERVICE RECORD',{size:44,fill:C.gold,anchor:'middle',font:SERIF,weight:'700',ls:8})+Ln(380,248,1220,248,{stroke:C.brass,sw:2}),pa);
  const cw=410,ch=240;
  st.forEach((r,i)=>{
    const col=i%3,row=Math.floor(i/3);const x=150+col*(cw+30)+ (col*0),y=290+row*(ch+22);
    const appear=pr(t,.7+i*.12,1.4+i*.12,E.out);
    const lit=seg(t,c,i+1,.6,E.out);
    const lt=i===0?pr(t,(c[1]??2),(c[1]??2)+.6):lit; // stage 1 lights on 'It shadows'
    let g=R(0,0,cw,ch,{fill:lt>0?'url(#brassg2)':'#0b1730',rx:14,op:lt>0?.25+.75*lt:1,stroke:C.brass,sw:2});
    g=R(0,0,cw,ch,{fill:'#0b1730',rx:14,stroke:C.brass,sw:2,op:1})+R(0,0,cw,ch,{fill:'url(#brassg2)',rx:14,op:lt});
    if(lt>.1)g+=R(0,0,cw,ch,{stroke:C.goldL,sw:3,rx:14,op:lt,extra:'filter="url(#glowS)"'});
    const tc=lt>.5?C.ink:C.gold, dc=lt>.5?'#1d2742':C.pale;
    g+=Cc(46,48,26,{fill:lt>.5?C.ink:C.navy,stroke:lt>.5?C.ink:C.gold,sw:2.5})+T(46,58,r[0],{size:26,fill:lt>.5?C.gold:C.gold,anchor:'middle',font:SERIF,weight:'700'});
    g+=T(86,60,r[1],{size:38,fill:tc,font:SERIF,weight:'700'});
    g+=textBlock(26,110,r[2],25,{size:26,fill:dc,lh:33});
    g+=Ln(26,ch-34,cw-26,ch-34,{stroke:lt>.5?C.ink:C.brass,sw:1.5,op:.5})+T(26,ch-9,'gate · human signs off',{size:20,fill:lt>.5?C.ink:C.mute,ls:2,op:.85});
    s+=G(g,{tx:x,ty:y+(1-appear)*18,op:appear*(0.55+0.45*Math.max(lt,.0))});
  });
  // arrows between cells (progress)
  return drift(s,t,D,1,1.02);
};

// ---------- GUARDRAILS ----------
function icon(k,x,y,col){
  const o={stroke:col,sw:4,fill:'none'};
  let g='';
  if(k===0)g=R(-34,-16,68,32,{...o,rx:16})+Cc(16,0,11,{fill:col});
  if(k===1)g=P('M-34 18 A36 36 0 0 1 34 18',o)+Ln(0,18,18,-12,{stroke:col,sw:4})+Ln(-30,-30,30,30,{stroke:C.red,sw:5});
  if(k===2)g=R(-34,-26,68,44,{...o,rx:6})+Ln(-20,28,20,28,{stroke:col,sw:4})+Cc(0,-4,8,{fill:col});
  if(k===3)g=R(-40,-14,44,28,{...o,rx:14})+R(-4,-14,44,28,{...o,rx:14});
  if(k===4)g=Cc(0,-16,14,o)+P('M-30 30 Q-30 4 0 4 Q30 4 30 30',o)+P('M16 -2 L24 6 L38 -12',{stroke:C.green,sw:5});
  if(k===5)g=P('M0 -32 L9 -10 L33 -8 L14 8 L21 32 L0 18 L-21 32 L-14 8 L-33 -8 L-9 -10 Z',o);
  return `<g transform="translate(${x} ${y})">${g}</g>`}
S.guardrails=(t,D,c)=>{
  let s=`<rect width="1600" height="900" fill="#08101f"/>`;
  s+=`<rect width="1600" height="900" fill="url(#bgchart)" opacity=".8"/>`;
  for(let y=70;y<900;y+=120){for(let x=60;x<1600;x+=120)s+=Cc(x,y,4,{fill:'#24365a',stroke:'#0a1220',sw:1});}
  for(let x=0;x<1600;x+=200)s+=Ln(x,0,x,900,{stroke:'#0a1220',sw:3,op:.7});
  s+=chartBG({grid:false}).replace('<rect width="1600" height="900" fill="url(#bgchart)"/>','');
  s+=T(80,100,'GUARDRAILS',{size:32,fill:C.gold,font:SERIF,ls:5,weight:'700'})+T(80,136,'BOLTED TO THE BULKHEAD',{size:24,fill:C.mute,ls:3});
  const items=[['Opt-in and revocable','Opt-in. Revocable.'],['No performance scoring','Never used to rate or rank her.'],['Anonymized first','Raw capture stays on her machine.'],['Evidence-linked','Every claim traced to its source.'],['Human decides','A named human decides.'],['Credit to the source','Her name stays on what she taught it.']];
  const cu=[0,2,3,4,5,6];
  items.forEach((it,i)=>{
    const col=i%3,row=Math.floor(i/3),x=95+col*470,y=190+row*320,w=440,h=280;
    s+=R(x,y,w,h,{fill:'#050b17',stroke:'#25375d',sw:3,rx:12,op:.9});
    const p=seg(t,c,cu[i],.9,E.back);const from=(i%2?1:-1)*900;
    const inx=(1-p)*from;
    const lit=pr(t,(c[cu[i]]??9999)+.5,(c[cu[i]]??9999)+1.1);
    let g=plaque(0,0,w,h,{lit:.55+.45*lit,rx:14});
    g+=icon(i,w/2,92,C.brassD==='x'?C.ink:'#2a1f08');
    g+=T(w/2,168,it[0],{size:31,fill:'#2a1f08',anchor:'middle',font:SERIF,weight:'700'});
    g+=T(w/2,214,it[1],{size:23,fill:'#3d2d0c',anchor:'middle'});
    if(i===0)g=g.replace(it[1],it[1]);
    g+=R(24,238,w-48,2,{fill:'#5a4412',op:.5});
    s+=G(g,{tx:x+inx,ty:y,op:clamp(p*3)});
  });
  return drift(s,t,D,1,1.02);
};

// ---------- BOOKMARK ----------
S.bookmark=(t,D,c)=>{
  let s=chartBG({title:'THE DECISION BOOKMARK',sub:'SENSORS PICK THE MOMENT, NOT THE THOUGHT'});
  const tr=[['EEG',C.blue],['Pupil size',C.pale],['Skin conductance',C.pale],['Typing pause',C.gold]];
  const X0=150,X1=880,YS=[270,385,500,615];
  const tPin=c[3]??7, ts=(c[1]??3)-0.4;
  const v=(620-X0)/(tPin-ts);
  const cur=clamp(X0+v*(t-ts),X0,X1);
  const cx0=1240,cy0=440;
  const wave=(i,x)=>{
    const env=Math.exp(-Math.pow((x-610)/55,2));
    const a= i===0?10+34*env : i===1?8+10*env: i===2?6+4*env:0;
    const fr= i===0?0.12:i===1?0.05:0.03;
    return Math.sin(x*fr*(1+env*1.4)+i)*a*0.6+Math.sin(x*fr*2.3+i*2)*a*0.35;
  };
  YS.forEach((y,i)=>{
    const col=tr[i][1];
    s+=Op(T(X0,y-44,tr[i][0],{size:27,fill:i===0||i===3?col:C.pale,weight:'600'}),pr(t,.1+i*.1,.6+i*.1));
    s+=Ln(X0,y,X1,y,{stroke:'#3a5588',sw:1,op:.5*pr(t,.1,.6),dash:'2 6'});
    let d='';
    if(i<3){for(let x=X0;x<=X1;x+=4)d+=(d?' L':'M')+x+' '+f(y+wave(i,x),1);}
    else{ // typing ticks with a pause gap
      for(let x=X0;x<=X1;x+=14){const inGap=x>560&&x<690;if(inGap)continue;const h=10+((x*7)%13);d+=`M${x} ${y-h/2}V${y+h/2}`}
    }
    const base=Op(P(d,{stroke:col,sw:2.5,op:.4}),pr(t,.2+i*.1,.8+i*.1));
    s+=base;
    // lit portion up to cursor
    s+=`<clipPath id="cl${i}"><rect x="${X0}" y="${y-70}" width="${f(Math.max(0,cur-X0))}" height="140"/></clipPath>`;
    s+=`<g clip-path="url(#cl${i})">${P(d,{stroke:col,sw:4,op:.95,extra:'filter="url(#glowS)"'})}</g>`;
    // convergence line to clock
    const pe=pr(t,.6+i*.12,1.4+i*.12);
    s+=Draw(`M${X1} ${y} C${X1+120} ${y} ${cx0-260} ${cy0+(y-440)*.5} ${cx0-150} ${cy0+(y-440)*.35}`,pe,{stroke:i===0||i===3?col:'#6a85b8',sw:2,op:.7});
  });
  // gap marker
  const gp=pr(t,tPin-1.6,tPin-.8);
  s+=Op(P('M560 683 V693 H690 V683',{stroke:C.gold,sw:3})+T(625,725,'pause',{size:24,fill:C.gold,anchor:'middle'}),gp);
  s+=Op(P('M560 205 V195 H690 V205',{stroke:C.blue,sw:3})+T(625,182,'EEG rises',{size:24,fill:C.blue,anchor:'middle'}),gp);
  // scan cursor
  s+=Ln(cur,205,cur,690,{stroke:C.goldL,sw:2.5,op:.9*pr(t,ts-.3,ts+.2),extra:''});
  // clock
  let clk=Cc(0,0,160,{fill:'#0b1730',stroke:'url(#brassg)',sw:10})+Cc(0,0,146,{stroke:C.brassD,sw:2});
  for(let k=0;k<60;k++){const a=k*Math.PI/30,r1=k%5?136:124,r2=142;clk+=Ln(Math.sin(a)*r1,-Math.cos(a)*r1,Math.sin(a)*r2,-Math.cos(a)*r2,{stroke:C.gold,sw:k%5?1.2:3,op:.9})}
  const ang=(t*0.9)%(2*Math.PI);
  clk+=Ln(0,0,Math.sin(ang)*118,-Math.cos(ang)*118,{stroke:C.goldL,sw:3.5})+Ln(0,0,Math.sin(ang*.083+1)*76,-Math.cos(ang*.083+1)*76,{stroke:C.gold,sw:7})+Cc(0,0,9,{fill:C.gold});
  const pulse=pr(t,tPin,tPin+.9,E.out);
  clk+=Cc(0,0,160+pulse*40,{stroke:C.goldL,sw:3,op:(1-pulse)*pulse*3.5});
  s+=G(clk,{tx:cx0,ty:cy0,op:pr(t,.4,1.2,E.out)});
  s+=Op(T(cx0,cy0+222,'ONE CLOCK',{size:36,fill:C.gold,anchor:'middle',font:SERIF,weight:'700',ls:6})+T(cx0,cy0+258,'one local log, time-synced',{size:23,fill:C.mute,anchor:'middle'}),pr(t,.9,1.6));
  // bookmark pin
  const bp=pr(t,tPin,tPin+.55,E.back), by=lerp(130,190,bp);
  if(bp>0)s+=G(P('M-22 0 H22 V78 L0 58 L-22 78 Z',{fill:'url(#brassg)',stroke:C.goldL,sw:2.5,extra:'filter="url(#glowS)"'})+Cc(0,14,6,{fill:C.ink}),{tx:625,ty:by-80+80,op:Math.min(1,bp*2)});
  s+=Op(T(800,812,'A bookmark needs EEG and at least one other signal to agree.',{size:38,fill:C.gold,anchor:'middle',font:SERIF,style:'italic'}),pr(t,tPin+.4,tPin+1.2));
  return drift(s,t,D,1,1.02);
};

// ---------- STICKY -> TYPED CARD ----------
S.stickyfinal=(t,D,c)=>{
  let s=`<rect width="1600" height="900" fill="#070d1d"/><rect width="1600" height="900" fill="url(#bgchart)" opacity=".7"/>`;
  s+=R(0,640,1600,260,{fill:'#0d1830',op:.9})+Ln(0,640,1600,640,{stroke:C.brassD,sw:2});
  const m=pr(t,1.2,2.3,E.io);
  // sticky
  let st=R(-190,-150,380,300,{fill:'#f2c24f',rx:6,extra:'filter="url(#drop)"'})+R(-190,-150,380,34,{fill:'#e3ae34',rx:6});
  st+=T(0,-12,'Winter?',{size:56,fill:'#3b2a08',anchor:'middle',font:HAND})+T(0,52,'Summer?',{size:56,fill:'#3b2a08',anchor:'middle',font:HAND})+T(0,116,'WHY?',{size:60,fill:'#8a1d12',anchor:'middle',font:HAND,weight:'700'});
  s+=G(st,{tx:lerp(800,360,m),ty:lerp(430,420,m),rot:lerp(-3,-5,m),s:lerp(1.12,.88,m),op:1-0.55*m});
  // arrow
  s+=Draw('M590 430 C700 380 760 380 850 430',pr(t,1.4,2.2),{stroke:C.gold,sw:4,op:.9});
  // typed card
  const cp=pr(t,1.5,2.5,E.out);
  let cd=R(-440,-190,880,380,{fill:'#0b1a33',stroke:C.blue,sw:3,rx:14,extra:'filter="url(#drop)"'})+R(-440,-190,880,52,{fill:C.blueD,rx:14})+R(-440,-168,880,30,{fill:C.blueD});
  cd+=T(-414,-153,'RELIEF  ·  KNOWLEDGE CARD',{size:25,fill:C.blue,ls:3,weight:'600'});
  const l1='Loop 4 alarm: ignore in winter,',l2='never in summer.',l3='Reason: ...';
  const tp=pr(t,2.2,3.5,E.lin);
  const all=l1+l2+l3, n=Math.round(all.length*tp);
  const a1=all.slice(0,Math.min(n,l1.length)),a2=all.slice(l1.length,Math.max(l1.length,Math.min(n,l1.length+l2.length))),a3=all.slice(l1.length+l2.length,n);
  cd+=T(-414,-60,a1,{size:42,fill:C.cream,font:MONO})+T(-414,6,a2,{size:42,fill:C.cream,font:MONO})+T(-414,100,a3,{size:40,fill:C.blue,font:MONO});
  const cursor=(Math.floor(t*2)%2===0)?R(-414+ (n<=l1.length?n*25.4:(n<=l1.length+l2.length?(n-l1.length)*25.4:(n-l1.length-l2.length)*24)),(n<=l1.length?-98:(n<=l1.length+l2.length?-32:62)),16,48,{fill:C.cream}):'';
  cd+=cursor;
  cd+=Op(T(-414,160,'Confirmed by Chief Sullivan',{size:24,fill:C.green}),pr(t,3.4,3.9));
  s+=G(cd,{tx:1030,ty:440,op:cp,s:lerp(.96,1,cp)});
  return drift(s,t,D,1,1.03);
};
