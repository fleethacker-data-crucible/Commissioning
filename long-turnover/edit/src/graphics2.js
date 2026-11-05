// ---------- TITLE / END ----------
S.title=(t,D,c)=>{
  let s=`<rect width="1600" height="900" fill="#050a18"/><rect width="1600" height="900" fill="url(#bgchart)" opacity=".6"/>`;
  const p=pr(t,.1,1.2,E.lin);
  const str='THE LONG TURNOVER';
  s+=Op(Ln(420,380,1180,380,{stroke:C.brass,sw:1.5})+Ln(420,520,1180,520,{stroke:C.brass,sw:1.5}),pr(t,0,.6));
  s+=T(800,478,typed(str,p),{size:88,fill:C.gold,anchor:'middle',font:SERIF,weight:'700',ls:10,extra:'filter="url(#glowS)"'});
  return s;
};
S.endcard=(t,D,c)=>{
  let s=`<rect width="1600" height="900" fill="#050a18"/><rect width="1600" height="900" fill="url(#bgchart)" opacity=".6"/>`;
  s+=Op(Ln(420,350,1180,350,{stroke:C.brass,sw:1.5})+Ln(420,520,1180,520,{stroke:C.brass,sw:1.5}),pr(t,0,.8));
  s+=Op(T(800,448,'THE LONG TURNOVER',{size:88,fill:C.gold,anchor:'middle',font:SERIF,weight:'700',ls:10,extra:'filter="url(#glowS)"'}),pr(t,.2,1.4));
  s+=Op(T(800,590,'A proposal from FleetHacker Data Crucible',{size:34,fill:C.pale,anchor:'middle',ls:3}),pr(t,1.4,2.4));
  s+=Op(T(800,650,'The scenes are a dramatization: the people and events are invented. The proposal is real.',{size:26,fill:C.mute,anchor:'middle',font:SERIF,style:'italic'}),pr(t,2,3));
  s+=Op(Cc(800,230,56,{stroke:C.gold,sw:2.5})+Cc(800,230,8,{fill:C.gold})+P('M800 174V190M800 270V286M744 230H760M840 230H856',{stroke:C.gold,sw:3})+P('M800 230 L826 204',{stroke:C.goldL,sw:3}),pr(t,.1,1));
  return s;
};

// ---------- NINETY DAYS ----------
function person(x,y,s,vet,col){
  const hair=vet?'#c8ccd6':'#12151f';
  return `<g transform="translate(${x} ${y}) scale(${s})">`+P('M-52 110 Q-52 56 0 52 Q52 56 52 110 Z',{fill:col})+El(0,22,28,34,{fill:'#d2a07e'})+(vet?P('M-30 18 Q-30 -22 0 -22 Q30 -22 30 18 Q22 -2 0 -4 Q-22 -2 -30 18Z',{fill:hair})+Cc(0,-26,12,{fill:hair}):P('M-29 14 Q-30 -20 0 -20 Q30 -20 29 14 Q18 -4 0 -2 Q-18 -4 -29 14Z',{fill:hair}))+`</g>`}
S.ninety=(t,D,c)=>{
  let s=chartBG({title:'PHASE 1 OF 3',sub:'A SMALL PILOT, ON PURPOSE'});
  const cols=13,rows=7,cs=50,gp=8,gx=110,gy=290;
  const sweep=pr(t,c[1]??1.8,(c[1]??1.8)+2.6,E.io);
  const total=90;
  const k=Math.floor(sweep*total);
  s+=Op(T(gx,236,'90 DAYS',{size:68,fill:C.gold,font:SERIF,weight:'700',ls:6}),pr(t,.2,.9));
  for(let i=0;i<cols*rows;i++){const cc=Math.floor(i/rows),rr=i%rows;const x=gx+cc*(cs+gp),y=gy+rr*(cs+gp);const lit=i<k;const isDay=i<total;
    s+=Op(R(x,y,cs,cs,{fill:lit?C.gold:'#0f1f3d',stroke:lit?C.goldL:'#2b4272',sw:1.5,rx:6,op:isDay?1:.35}),pr(t,.3+cc*.04,.8+cc*.04));}
  s+=Op(T(gx,gy+rows*(cs+gp)+34,'13 weeks',{size:26,fill:C.mute,ls:3}),pr(t,.8,1.4));
  // lab box
  const lx=960,ly=250,lw=580,lh=500;
  const lb=pr(t,c[3]??4,(c[3]??4)+1.0);
  s+=Op(R(lx,ly,lw,lh,{stroke:C.blue,sw:3,rx:20,extra:'stroke-dasharray="14 10"'})+T(lx+24,ly+44,'ISOLATED LAB',{size:26,fill:C.blue,ls:5,weight:'600'}),lb);
  const pos=[[1040,500,1],[1160,500,0],[1340,500,1],[1460,500,0]];
  pos.forEach((p,i)=>{const a=pr(t,(c[2]??3)+i*.25,(c[2]??3)+.7+i*.25,E.back);s+=G(person(0,0,1.18,p[2],p[2]?C.navy4:C.blue2),{tx:p[0],ty:p[1]+(1-a)*40-60,op:Math.min(1,a*1.6)});});
  const pb=pr(t,(c[3]??4)+.2,(c[3]??4)+1);
  s+=Op(P('M980 590 Q980 620 1000 620 H1200 Q1220 620 1220 590',{stroke:C.gold,sw:3})+T(1100,660,'Pair 1',{size:26,fill:C.gold,anchor:'middle'})+P('M1280 590 Q1280 620 1300 620 H1500 Q1520 620 1520 590',{stroke:C.gold,sw:3})+T(1400,660,'Pair 2',{size:26,fill:C.gold,anchor:'middle'}),pb);
  s+=Op(T(1250,356,'4 developer volunteers',{size:32,fill:C.cream,anchor:'middle',font:SERIF,weight:'700'}),pr(t,(c[2]??3),(c[2]??3)+.8));
  s+=Op(T(1250,694,'veteran + successor',{size:24,fill:C.mute,anchor:'middle',style:'italic'}),pb);
  // nothing leaves
  const nl=pr(t,c[4]??6,(c[4]??6)+.9);
  for(let i=0;i<3;i++){const y=330+i*150;const r=pr(t,(c[4]??6)+i*.2,(c[4]??6)+.9+i*.2);s+=Op(Ln(lx+lw-30,y,lx+lw+lerp(0,28,r),y,{stroke:C.red,sw:5,op:.95})+Ln(lx+lw+30,y-14,lx+lw+54,y+14,{stroke:C.red,sw:5})+Ln(lx+lw+54,y-14,lx+lw+30,y+14,{stroke:C.red,sw:5}),r*.0+nl);}
  // one thing does leave: anonymized data, to the models
  s+=Op(Ln(1080,ly+lh+2,1080,ly+lh+22,{stroke:C.blue,sw:5})+P(`M1080 ${ly+lh+30} l-12 -14 h24 Z`,{fill:C.blue})+T(1100,ly+lh+24,'anonymized data only, to the models',{size:20,fill:C.blue,ls:1}),pr(t,(c[4]??6)+.6,(c[4]??6)+1.4));
  s+=Op(T(800,826,'Nothing identifiable leaves the building.',{size:40,fill:C.gold,anchor:'middle',font:SERIF,style:'italic'}),nl);
  return drift(s,t,D,1,1.02);
};

// ---------- SESSIONS ----------
S.sessions=(t,D,c)=>{
  let s=chartBG({title:'FOUR SESSION TYPES',sub:'EACH VETERAN-AND-SUCCESSOR PAIR RUNS ALL FOUR'});
  const P4=[
   ['A','Setup check','Eyes closed and open, then deliberate blinks, jaw clenching, talking and movement. Confirms signal quality.'],
   ['B','Calibration','n-back and NASA MATB-II tasks.'],
   ['C','Real work','Half the sessions use sensor-timed questions. Half use questions on a schedule.'],
   ['D','Successor test',"Can the next person finish the veteran's task using only what was captured?"]];
  const pw=350,gap=28,x0=(1600-4*pw-3*gap)/2;
  P4.forEach((p,i)=>{
    const x=x0+i*(pw+gap),y=190,h=620;
    const ap=pr(t,.2+i*.12,.9+i*.12,E.out);
    const lit=seg(t,c,i,.7,E.out);
    let g=R(0,0,pw,h,{fill:'#0b1730',stroke:C.brass,sw:2.5,rx:16})+R(0,0,pw,h,{fill:'url(#brassg2)',rx:16,op:lit*.95});
    if(lit>.1)g+=R(0,0,pw,h,{stroke:C.goldL,sw:3,rx:16,op:lit,extra:'filter="url(#glowS)"'});
    const tc=lit>.5?C.ink:C.gold,dc=lit>.5?'#1d2742':C.pale;
    g+=T(28,62,'SESSION '+p[0],{size:24,fill:lit>.5?'#4a3811':C.mute,ls:4,weight:'600'});
    g+=T(28,116,p[1],{size:40,fill:tc,font:SERIF,weight:'700'});
    // pictograms
    const py=250,pc=lit>.5?C.ink:C.blue;
    let ic='';
    if(i===0){ic=P('M0 0 H60 L72 -34 L88 40 L102 0 H150 L162 -18 L176 24 L190 0 H260',{stroke:pc,sw:4})}
    if(i===1){for(let r=0;r<3;r++)for(let q=0;q<3;q++){const on=(r*3+q)===((Math.floor(t*1.5))%9);ic+=R(40+q*66,-60+r*58,52,48,{fill:on?pc:'none',stroke:pc,sw:3,rx:6,op:on?1:.7})}}
    if(i===2){ic=Ln(0,-26,270,-26,{stroke:pc,sw:2,op:.6})+Ln(0,34,270,34,{stroke:pc,sw:2,op:.6});for(const x of [50,90,175,230])ic+=P('M'+x+' -26 l-9 -22 h18 z',{fill:pc});for(const x of [30,90,150,210,270])ic+=Cc(x,34,8,{fill:'none',stroke:pc,sw:3});ic+=T(0,-72,'sensor-timed',{size:21,fill:pc})+T(0,86,'scheduled',{size:21,fill:pc})}
    if(i===3){ic=Cc(60,-10,26,{stroke:pc,sw:4})+P('M20 50 Q20 20 60 20 Q100 20 100 50',{stroke:pc,sw:4})+P('M120 10 H200',{stroke:pc,sw:4})+P('M186 -6 L204 10 L186 26',{stroke:pc,sw:4})+Cc(240,-10,26,{stroke:pc,sw:4})+P('M200 50 Q200 20 240 20 Q280 20 280 50',{stroke:pc,sw:4})+P('M226 -10 L238 2 L258 -22',{stroke:C.green,sw:5})}
    g+=`<g transform="translate(40 ${py})">${ic}</g>`;
    g+=textBlock(28,380,p[2],23,{size:26,fill:dc,lh:35});
    s+=G(g,{tx:x,ty:y+(1-ap)*30,op:ap*(0.6+0.4*Math.max(lit,0)+ (lit>0?0:0))});
  });
  return drift(s,t,D,1,1.02);
};

// ---------- FIVE RQ CARDS ----------
S.rqs=(t,D,c)=>{
  let s=`<rect width="1600" height="900" fill="#08111f"/>`;
  s+=`<rect width="1600" height="900" fill="url(#bgchart)" opacity=".9"/>`;
  for(let y=0;y<900;y+=36)s+=Ln(0,y,1600,y,{stroke:'#16284a',sw:2,op:.35});
  s+=T(80,100,'FIVE QUESTIONS, EACH WITH A MEASURE',{size:32,fill:C.gold,font:SERIF,ls:4,weight:'700'});
  const Q=[['RQ1','Can sensors detect hard decisions?','≥ 50% agreement with the wearer'],['RQ2','Do sensor-timed questions capture more?','Confirmed items, timed vs. scheduled'],['RQ3','Which sensors are worth their cost?','Ranked list of what each sensor adds'],['RQ4','Will people wear it at work?','≥ 2 hours of comfortable wear'],['RQ5','Does the captured knowledge help a successor?','Task completed without asking the veteran: 2 of 2 pairs']];
  const cw=272,gap=22,x0=(1600-5*cw-4*gap)/2;
  const rot=[-1.6,1,-0.8,1.4,-1.1],dy=[0,10,-6,8,-2];
  Q.forEach((q,i)=>{
    const t0=.7+i*(Math.min(1.5,(D-4)/5));
    const drop=pr(t0,0,1,E.lin); const a=pr(t,t0,t0+.8,E.out);
    const m=pr(t,t0+.7,t0+1.4,E.out);
    const x=x0+i*(cw+gap),y=220+dy[i];
    let card=R(0,0,cw,380,{fill:'#efe6cf',rx:12,extra:'filter="url(#drop)"'})+R(0,0,cw,70,{fill:'#c9a24b',rx:12})+R(0,40,cw,30,{fill:'#c9a24b'});
    card+=T(24,50,q[0],{size:40,fill:C.ink,font:SERIF,weight:'700',ls:3})+textBlock(24,128,q[1],13,{size:28,fill:'#1a2338',font:SERIF,weight:'700',lh:38});
    card+=Ln(24,340,cw-24,340,{stroke:'#a99a6c',sw:1.5,dash:'3 6'});
    s+=G(card,{tx:x+cw/2,ty:y+190+(1-a)*-120,ox:cw/2,oy:190,rot:rot[i]*a,op:a});
    let tag=R(0,0,cw,176,{fill:'#0d1b36',stroke:C.gold,sw:2.5,rx:10,extra:'filter="url(#drop)"'})+T(20,36,'MEASURE',{size:20,fill:C.mute,ls:4,weight:'600'})+textBlock(20,76,q[2],18,{size:25,fill:C.goldL,lh:31});
    s+=G(tag,{tx:x,ty:y+395+(1-m)*-40,op:m,rot:rot[i]*.5});
  });
  return drift(s,t,D,1,1.02);
};

// ---------- FLAT LAY ----------
function crown(x,y,r){return `<g transform="translate(${x} ${y}) rotate(${r})">`+P('M-80 20 A80 70 0 0 1 80 20',{stroke:'#2b3446',sw:22})+P('M-80 20 A80 70 0 0 1 80 20',{stroke:'#4b5878',sw:4})+[-64,-34,0,34,64].map((px,i)=>Cc(px,[2,-24,-34,-24,2][i]+20,7,{fill:C.gold})).join('')+R(-22,-30,44,22,{fill:'#c8d3e6',rx:6})+`</g>`}
function cyton(x,y){return `<g transform="translate(${x} ${y})">`+R(-52,-38,104,76,{fill:'#0f5a63',stroke:'#1b8b96',sw:2,rx:6})+R(-30,-18,34,28,{fill:'#111',rx:3})+[0,1,2,3,4,5,6,7].map(i=>Cc(-42+i*12,32,3,{fill:C.gold})).join('')+Cc(30,-14,8,{fill:'#c8d3e6'})+`</g>`}
function gelcap(x,y){return `<g transform="translate(${x} ${y})">`+Cc(0,0,50,{fill:'#1b2338',stroke:'#4b5878',sw:3})+[[0,-30],[-26,-12],[26,-12],[-18,22],[18,22],[0,0]].map(p=>Cc(p[0],p[1],7,{fill:C.gold,stroke:'#fff',sw:1.2})).join('')+`</g>`}
function h10(x,y,r){return `<g transform="translate(${x} ${y}) rotate(${r})">`+R(-90,-10,180,20,{fill:'#d8dde8',rx:10})+R(-86,-5,172,10,{fill:'#9aa4b8',rx:5})+R(-30,-24,60,48,{fill:'#f0f2f7',rx:22})+Cc(0,0,10,{fill:'#d4202e'})+`</g>`}
function bitalino(x,y){return `<g transform="translate(${x} ${y})">`+R(-98,-34,196,68,{fill:'#4a2f87',stroke:'#7e5fd0',sw:2,rx:6})+R(-82,-22,40,26,{fill:'#111',rx:2})+R(-30,-22,26,26,{fill:'#111',rx:2})+R(10,-22,44,26,{fill:'#c9a24b',rx:2})+Cc(76,0,12,{fill:'#c8d3e6'})+P('M98 10 q30 0 30 24 q0 28 -34 28',{stroke:'#aeb7cb',sw:4})+`</g>`}
// photo card: real vendor product photo, rounded clip, thin brass frame, slow push-in
function photo(id,x,y,w,h,t,o={}){const {zoom=1.04,rx=12,stroke=C.brass}=o;const k=`pc_${id}_${x}_${y}`;const z=1+(zoom-1)*Math.min(1,t/9);const ww=w*z,hh=h*z;
  return `<clipPath id="${k}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}"/></clipPath><image clip-path="url(#${k})" href="${EQ[id]}" x="${f(x-(ww-w)/2)}" y="${f(y-(hh-h)/2)}" width="${f(ww)}" height="${f(hh)}" preserveAspectRatio="xMidYMid slice"/>`+R(x,y,w,h,{stroke,sw:2,rx,fill:'none'});}
S.flatlay=(t,D,c)=>{
  let s=`<rect width="1600" height="900" fill="#0a1424"/><rect width="1600" height="900" fill="url(#bgchart)" opacity=".7"/>`;
  s+=R(60,140,1000,700,{fill:'#10243f',stroke:C.brass,sw:2.5,rx:10,op:.95})+T(80,100,'THE REQUEST: EQUIPMENT ONLY',{size:32,fill:C.gold,font:SERIF,ls:4,weight:'700'});
  const lab=(lx,ly,lw,label,small)=>R(lx,ly,lw,small?38:46,{fill:'#0b1730',stroke:C.gold,sw:1.5,rx:8})+T(lx+lw/2,ly+(small?27:32),label,{size:small?21:25,fill:C.cream,anchor:'middle'});
  const grp=(i,inner)=>{const a=pr(t,.3+i*.55,1+i*.55,E.out);return G(inner,{ty:(1-a)*-24,op:a})};
  // headsets first: the two EEG systems are the point of the study
  s+=grp(0,T(90,182,'EEG HEADSETS',{size:22,fill:C.blue,ls:4,weight:'600'})+photo('crown',90,200,470,470,t)+lab(90,682,470,'2 × Neurosity Crown · dry-electrode EEG'));
  s+=grp(1,photo('gelcap',580,200,460,330,t)+photo('cyton',900,392,130,130,t,{zoom:1,rx:8})+lab(580,542,460,'2 × OpenBCI Cyton + gel cap · 8–16 ch'));
  // supporting body sensors, smaller
  s+=grp(2,T(580,618,'BODY SENSORS',{size:20,fill:C.mute,ls:4,weight:'600'})+photo('polar',580,632,218,96,t,{zoom:1,rx:8,stroke:'#4b5878'})+lab(580,736,218,'4 × Polar H10',true));
  s+=grp(3,photo('bitalino',822,632,218,96,t,{zoom:1,rx:8,stroke:'#4b5878'})+lab(822,736,218,'4 × BITalino kit',true));
  // budget
  const bp=pr(t,(c[0]??.6)+2.0,(c[0]??.6)+3.2,E.out);
  s+=Op(T(1100,260,'BUDGET, OPTION B',{size:26,fill:C.mute,ls:5,weight:'600'})+T(1100,350,'about',{size:34,fill:C.pale,font:SERIF,style:'italic'}),pr(t,(c[0]??.6)+1.6,(c[0]??.6)+2.4));
  s+=G(T(0,0,'$7.6–8.1k',{size:84,fill:C.gold,font:SERIF,weight:'700',extra:'filter="url(#glow)"'}),{tx:1100,ty:450,s:lerp(.88,1,bp),op:bp});
  s+=Op(T(1100,520,'equipment only · 4 people',{size:32,fill:C.cream})+Ln(1100,548,1520,548,{stroke:C.brass,sw:1.5})+T(1100,598,'Total before quotes.',{size:25,fill:C.pale})+T(1100,634,'Eye trackers: 2 × quote.',{size:25,fill:C.pale})+T(1100,670,'Confirm every price with a vendor quote.',{size:25,fill:C.amber}),pr(t,(c[0]??.6)+3,(c[0]??.6)+4));
  s+=Op(T(1100,740,"Labor is the team's own time.",{size:30,fill:C.goldL,font:SERIF,style:'italic'}),seg(t,c,1,.8));
  return drift(s,t,D,1,1.02);
};

// ---------- SIGNPOSTS ----------
S.signposts=(t,D,c)=>{
  let s=`<rect width="1600" height="900" fill="#08101f"/><rect width="1600" height="900" fill="url(#bgchart)" opacity=".9"/>`;
  for(let i=0;i<60;i++){const x=(i*277)%1600,y=(i*131)%420;s+=Cc(x,y,1.2+(i%3)*.5,{fill:'#fff',op:.25+((i*37)%50)/100})}
  s+=T(80,100,'IT ENDS IN ONE OF THREE WAYS',{size:32,fill:C.gold,font:SERIF,ls:4,weight:'700'});
  const posts=[{x:330,w:'GO',col:C.gold,tx:'#241a05',l1:'Field pilot',l2:'RQ1 and RQ2 met',cue:1},{x:800,w:'PIVOT',col:C.amber,tx:'#2c1604',l1:'Keep the headsets, drop the extra sensors',l2:'EEG works, body sensors add nothing',cue:2},{x:1270,w:'STOP',col:C.red,tx:'#2e0a06',l1:'Keep the weekly questions, no sensors',l2:'No reliable signal',cue:3}];
  const faint=pr(t,.2,1);
  posts.forEach((p,i)=>{
    const a=pr(t,c[p.cue]??9999,(c[p.cue]??9999)+1.1,E.out);
    const rise=(1-a)*340;
    const f0=faint*.18*(1-a);
    let g=R(-12,-40,24,520,{fill:'#2a2418',rx:4})+R(-12,-40,8,520,{fill:'#4a3f27',rx:3});
    const arrow=i===2?`M-190 -150 H190 V-40 H-190 Z`:(i===0?'M-190 -150 H150 L200 -95 L150 -40 H-190 Z':'M-170 -150 H130 L190 -95 L130 -40 H-170 Z');
    g+=P(arrow,{fill:p.col,stroke:'#fff',sw:2,op:.95,extra:a>.5?'filter="url(#glow)"':''});
    g+=T(i===0?-20:(i===2?0:-20),-78,p.w,{size:i===1?58:68,fill:p.tx,anchor:'middle',font:SERIF,weight:'700',ls:6});
    g+=R(-210,-10,420,130,{fill:'#0b1730',stroke:p.col,sw:2,rx:10})+textBlock(-190,32,p.l1,26,{size:25,fill:C.cream,lh:30})+T(-190,100,p.l2,{size:22,fill:p.col});
    s+=G(g,{tx:p.x,ty:430+rise,op:Math.max(a,f0)});
  });
  // all-glow at the end
  const all=seg(t,c,4,1.2);
  s+=Op(T(800,845,'Each outcome is useful.',{size:44,fill:C.gold,anchor:'middle',font:SERIF,style:'italic'}),all);
  // fog
  for(let i=0;i<6;i++){const x=((i*370+t*(14+i*3))%2200)-300,y=640+(i%3)*60;s+=El(x,y,420,70,{fill:'#9bb4d8',op:.16,extra:'filter="url(#blur20)"'})}
  
  s+=`<linearGradient id="fogg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#08101f" stop-opacity="0"/><stop offset="1" stop-color="#08101f" stop-opacity=".8"/></linearGradient><rect x="0" y="620" width="1600" height="280" fill="url(#fogg)"/>`;
  for(let i=0;i<5;i++){const x=((i*470-t*20)%2100)+(-250);s+=El(x,720+(i%2)*40,520,80,{fill:'#a9c0e0',op:.14,extra:'filter="url(#blur20)"'})}
  return drift(s,t,D,1,1.02);
};

// ---------- ROAD ----------
(function(){
  const pts=[[130,760],[430,700],[560,430],[800,470],[1020,540],[1150,300],[1430,260]];
  // two cubic beziers
  function bez(p0,p1,p2,p3,u){const m=1-u;return[m*m*m*p0[0]+3*m*m*u*p1[0]+3*m*u*u*p2[0]+u*u*u*p3[0],m*m*m*p0[1]+3*m*m*u*p1[1]+3*m*u*u*p2[1]+u*u*u*p3[1]]}
  const A=[[130,760],[520,780],[420,420],[800,470]],B=[[800,470],[1180,520],[1000,260],[1430,250]];
  const pl=[];for(let u=0;u<=1.0001;u+=.02)pl.push(bez(...A,u));for(let u=.02;u<=1.0001;u+=.02)pl.push(bez(...B,u));
  const road='M'+pl.map(p=>f(p[0],1)+' '+f(p[1],1)).join(' L');
  const at=u=>u<=.5?bez(...A,u*2):bez(...B,(u-.5)*2);
  const ms=[
   {u:.04,n:1,name:'Lab feasibility',sub:'90 days · 4 volunteers',bx:250,by:772,ax:'t'},
   {u:.36,n:2,name:'Field pilot',sub:'non-developer volunteers',bx:150,by:330,ax:'b'},
   {u:.66,n:3,name:'Relief agent',sub:'advises; a human does the work',bx:900,by:560,ax:'t'},
   {u:.97,n:4,name:'Embodied relief',sub:'a robot that carries judgment and motions',bx:1070,by:110,ax:'b'}];
  S.road=(t,D,c,B_,hold)=>{
    let s=chartBG({title:'IF IT WORKS, THE ROAD RUNS ON',sub:'FOUR PHASES'});
    const lightT=hold?[0,0,0,0]:[ .8,(c[0]??1)+4.2,(c[0]??1)+6.4,(c[0]??1)+9.2];
    s+=P(road,{stroke:'#0c1830',sw:70,op:.95})+P(road,{stroke:'#24385f',sw:62})+Draw(road,pr(t,.2,2.2,E.io),{stroke:C.gold,sw:3,extra:'stroke-dasharray:none',op:.0});
    const dash=pr(t,.2,2.4,E.io);
    s+=`<path d="${road}" pathLength="1" fill="none" stroke="${C.goldL}" stroke-width="3" stroke-linecap="round" stroke-dasharray="0.012 0.012" opacity=".9" style="clip-path:none" />`.replace('opacity=".9"',`opacity="${f(.9*dash,3)}"`);
    ms.forEach((m,i)=>{
      const [px,py]=at(m.u);
      const lit=hold?(i<3?1:1):pr(t,lightT[i],lightT[i]+.8,E.out);
      const last=i===3;
      const col=last?C.amber:C.gold;
      const cx=px,cy=py+m.dy*.0;
      const bx=m.bx,by=m.by;
      s+=Op(Ln(px,py,Math.max(bx+30,Math.min(bx+410,px)),m.ax==='t'?by:by+100,{stroke:col,sw:2,dash:'4 6'}),lit*.9);
      s+=Cc(px,py,26*(0.6+0.4*lit),{fill:lit>.3?col:'#0b1730',stroke:col,sw:4,op:last?(.45+.55*lit):(.5+.5*lit),extra:lit>.5?'filter="url(#glow)"':''});
      s+=T(px,py+11,String(m.n),{size:30,fill:lit>.3?C.ink:col,anchor:'middle',font:SERIF,weight:'700',op:1});
      let g=R(0,0,440,100,{fill:'#0d1b36',stroke:col,sw:2.5,rx:12,op:.96,extra:last?'stroke-dasharray="10 7"':''})+T(22,42,m.name,{size:36,fill:last?C.amber:C.gold,font:SERIF,weight:'700'})+T(22,80,m.sub,{size:23,fill:C.pale});
      s+=G(g,{tx:bx,ty:by,op:Math.max(lit,.0)*(last?.75:1),s:lerp(.96,1,lit)});
    });
    // the required tag
    const tg=hold?pr(t,.2,.9):pr(t,lightT[3]+.6,lightT[3]+1.4);
    const pulse=hold?(.6+.4*Math.sin(t*3)):1;
    s+=Op(R(0,0,640,70,{fill:'#2a0f0c',stroke:C.red,sw:3,rx:8,op:.95})+T(320,46,'Not part of this request. Not funded.',{size:34,fill:C.red,anchor:'middle',weight:'700',font:SERIF,extra:''}),tg*pulse,'transform="translate(860 740)"');
    return drift(s,t,D,1,1.02);
  };
  S.roadtag=(t,D,c,B_)=>S.road(t,D,c,B_,true);
})();

// ---------- DECISION CARD ----------
S.decision=(t,D,c)=>{
  let s=`<rect width="1600" height="900" fill="#050a18"/><rect width="1600" height="900" fill="url(#bgchart)" opacity=".8"/>`;
  const pa=pr(t,0,.9,E.out);
  s+=G(plaque(150,110,1300,690,{lit:.9,rx:18}),{op:pa,ty:(1-pa)*30});
  s+=R(190,150,1220,610,{fill:'#0a1630',rx:10,op:pa});
  s+=Op(T(800,226,'DECISIONS REQUESTED',{size:46,fill:C.gold,anchor:'middle',font:SERIF,weight:'700',ls:8})+Ln(360,250,1240,250,{stroke:C.brass,sw:2}),seg(t,c,0,.7));
  const L=[['Fund phase one, option B,','about $7.6 to $8.1 thousand.'],['Approve a quote request','for two eye trackers.'],['Approve a 90-day lab study','with volunteers.'],['Name reviewers for security, privacy','and human research within two weeks.']];
  L.forEach((l,i)=>{
    const a=seg(t,c,i+1,.8,E.out);
    s+=G(Cc(0,0,34,{fill:'url(#brassg)',stroke:C.goldL,sw:2})+T(0,13,String(i+1),{size:38,fill:C.ink,anchor:'middle',font:SERIF,weight:'700'})+T(66,-6,l[0],{size:42,fill:C.cream,font:SERIF,weight:'700'})+T(66,42,l[1],{size:42,fill:i===0?C.gold:C.cream,font:SERIF,weight:'700'}),{tx:260+(1-a)*-40,ty:340+i*108,op:a});
  });
  s+=Op(T(800,744,'Prices to be confirmed with vendor quotes.',{size:24,fill:C.mute,anchor:'middle',font:SERIF,style:'italic'}),seg(t,c,4,1));
  return drift(s,t,D,1,1.02);
};
