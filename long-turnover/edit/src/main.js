let TL=null,STAGE=null;
function initFilm(tl){TL=tl;STAGE=document.getElementById('stage');}
function sceneAt(i,Tm){const b=TL.beats[i];const fn=S[b.scene];if(!fn)return `<rect width="1600" height="900" fill="#112"/>`;return fn(Tm-b.start,b.dur,b.cues,b)}
function renderFilm(Tm){
  const bs=TL.beats;let i=0;for(let k=0;k<bs.length;k++){if(Tm>=bs[k].start)i=k}
  const b=bs[i];const tl=Tm-b.start;
  const trd=b.tr==='cut'?0:(b.tr==='dip'?0.6:0.5);
  let out='<rect width="1600" height="900" fill="#02040a"/>';
  if(i>0&&tl<trd){
    const k=E.soft(tl/trd);
    if(b.tr==='dip'){
      if(k<.5)out+=Op(sceneAt(i-1,Tm),1-k*2);else out+=Op(sceneAt(i,Tm),(k-.5)*2);
    }else{
      out+=sceneAt(i-1,Tm)+Op(sceneAt(i,Tm),k);
    }
  }else out+=sceneAt(i,Tm);
  // fade in at very start and out at the very end
  const fin=1-pr(Tm,0,0.25,E.lin),fout=pr(Tm,TL.total-1.2,TL.total,E.lin);
  if(fin>0)out+=`<rect width="1600" height="900" fill="#000" opacity="${f(fin,3)}"/>`;
  if(fout>0)out+=`<rect width="1600" height="900" fill="#000" opacity="${f(fout,3)}"/>`;
  STAGE.innerHTML=DEFS+DEFS2+out;
  return i;
}

function renderBeatLocal(name,tl,D,cues,id){const fn=S[name];STAGE.innerHTML=DEFS+DEFS2+'<rect width="1600" height="900" fill="#02040a"/>'+fn(tl,D,cues||[],{id:id||name});}
