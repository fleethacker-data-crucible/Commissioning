import json
meta=json.load(open('vo/meta.json'))
# (id, act, scene, kind, min_dur, lead, clip_ids, tail, transition_in, pic_source)   kind: G=native motion graphic (final), S=storyboard frame (placeholder for pass-2 hero shot)
B=[
("b00","0","blackcard","S",4.0,0,[],0,"cut","Black + honesty card (final)"),
("b01","0","macro","S",5.0,0,[],0,"dip","Macro gauge, amber lamp, window reflection, wall clock 03:03"),
("b02","0","overshoulder","S",6.0,0,[],0,"cut","Over the shoulder of Tomas: alarm banner PRESSURE HIGH Loop 4, SOP binder"),
("b03","0","emptychair","S",6.0,0.9,["C0","T0"],0.5,"dissolve","Wide control room, empty chair, mug, cardigan, handwritten label"),
("b04","0","phone","S",4.0,0,[],0,"cut","Phone in hand, thumb hovering, 3 a.m."),
("b05","0","blackcard","S",1.0,0,[],0,"cut","Smash to black"),
("b06","0","title","G",2.0,0,[],0,"cut","Title card, gold type-on"),
("b07","1","handover","S",5.0,0.5,["H1a"],0.5,"dip","Daytime flashback: Calloway hands over the watch, clock shows 15 minutes"),
("b08","1","calendar","S",5.0,0.4,["H1b"],0.4,"dissolve","Calendar flipping across 31 years, hair greying, mug always there, 15 years counter"),
("b09","1","notehands","S",12.0,0.3,["H2a","H2b","H2c","H2d"],0.6,"dissolve","Dolly onto hands writing a three-line note, tucked into thick binder"),
("b10","1","iceberg1","G",7.0,0.4,["H2e"],0.7,"dissolve","Iceberg as a ship's chart (four layers)"),
("b11","1","sticky","S",3.5,0,[],0,"dissolve","Tomas at dawn, sticky note 'Winter? Summer? WHY?'"),
("b12","2","office","S",9.0,0.8,["H3a"],0.6,"dip","Bright office, laptop, capture dialog, finger on Pause but does not press"),
("b13","2","voyage","G",12.0,0.5,["H3b","H3c","H3d","H3e","H3f"],0.7,"dissolve","Voyage chart (native SVG), illustrative label"),
("b14","2","review","G",7.0,0.4,["H3g","H3h"],0.6,"dissolve","Friday review cards: Confirm / Strike"),
("b15","2","service","G",17.0,0.4,["H4a","H4b","H4c","H4d","H4e","H4f","H4g"],0.8,"dissolve","Six-stage service record plaque"),
("b16","2","guardrails","G",8.0,0.4,["H4h","H4i","H4j","H4k","H4l","H4m","H4n"],0.9,"dissolve","Six guardrail plaques sliding into bulkhead"),
("b17","3","iceberg2","G",8.0,0.4,["H5a","H5b"],0.9,"dissolve","Iceberg with passive-capture bars"),
("b18","3","hardnight","S",9.0,0.5,["H5c","H5d"],0.8,"dip","Calloway on a hard night: wide, then eyes, gold marker on timeline"),
("b19","3","bookmark","G",10.0,0.4,["H5e","H5f","H5g","H5h"],0.7,"dissolve","Bookmark diagram: signals into one clock"),
("b20","3","morning","S",8.0,0.5,["H5i","H5j","C5","H5k"],0.9,"dip","Calloway next morning, tea, one question on screen"),
("b21","3","stickyfinal","G",4.0,0.3,[],0,"dissolve","Sticky note becomes a typed card; one chime"),
("b22","4","ninety","G",9.0,0.4,["H6a","H6b","H6c","H6d","H6e"],0.7,"dip","90-day calendar sweep, four volunteer silhouettes in two pairs"),
("b23","4","sessions","G",12.0,0.4,["H6f","H6g","H6h","H6i"],0.7,"dissolve","Four session-type panels"),
("b24","4","rqs","G",12.5,0.4,["H6j"],0.5,"dissolve","Five research-question cards with measures"),
("b25","4","flatlay","G",7.0,0.5,["H7a","H7b"],0.8,"dissolve","Equipment flat lay and budget figure"),
("b26","4","signposts","G",10.0,0.4,["H7c","H7d","H7e","H7f","H7g"],0.9,"dissolve","Go / Pivot / Stop signposts from fog"),
("b27","5","road","G",11.0,0.4,["H8a"],0.6,"dip","Four-phase road, lit one phase at a time"),
("b28","5","robot","S",4.2,0.3,["H8b"],0.4,"dissolve","Robot hand pauses before gauge, human hand takes over"),
("b29","5","roadtag","G",4.0,0.3,["H8c"],0.9,"dissolve","Road: last phase tagged 'Not part of this request. Not funded.'"),
("b30","6","decision","G",13.0,0.4,["H9a","H9b","H9c","H9d","H9e"],0.8,"dip","Decision card, four decisions"),
("b31","6","sunrise","S",3.5,0,[],0,"dip","Night room at sunrise, Tomas calm, Loop 4 alarm blinks"),
("b32","6","reliefcard","S",11.0,1.5,["R1"],0.8,"cut","RELIEF cold-blue card; Tomas reads, nods, acts"),
("b33","6","mug","S",3.8,0.2,["H10a"],0.3,"dissolve","Tomas lifts mug from empty chair, sets it back, straightens cardigan"),
("b34","6","pullback","S",4.5,0.0,["H10b","H10c"],0.8,"dissolve","Camera pulls back out of the window into dawn"),
("b35","6","endcard","G",6.0,1.6,["H10d"],0,"dissolve","End card; 'Let's start now.'"),
]
GAP=0.2
BIG={"H2e":0.3,"H3a":0.5,"H4g":0.5,"H4h":0.2,"H4i":0.2,"H4k":0.2,"H5b":0.5,"H5d":0.6,"H5h":0.4,"H6e":0.5,"H6j":0.0,"H7b":0.6,"H7g":0.2,"H8a":0.4,"H8b":0.5,"H9a":0.35,"H9b":0.25,"H9c":0.25,"H9d":0.25,"H10a":0.4,"H10b":0.35,"H10c":0.3,"H5e":0.35,"H3b":0.35,"H3c":0.2,"H3d":0.2,"H3e":0.2}
t=0.0; beats=[]; clips=[]
# special absolute hard timings: act0 total 28.0
for (i,act,sc,kind,mind,lead,cl,tail,tr,pic) in B:
    tail=min(tail,0.55)
    c=lead; cues=[]
    for k in cl:
        d=meta[k]['dur']; cues.append(round(c,3)); clips.append({'id':k,'spk':meta[k]['spk'],'text':meta[k]['text'],'t':round(t+c,3),'dur':d,'beat':i})
        c+=d+BIG.get(k,GAP)
    end=(c-BIG.get(cl[-1],GAP)+tail) if cl else 0
    dur=max(mind,end)
    # extra beats lengthen: put a decent breath after sentence-heavy beats
    beats.append({'id':i,'act':act,'scene':sc,'kind':kind,'start':round(t,3),'dur':round(dur,3),'end':round(t+dur,3),'cues':cues,'clips':cl,'tr':tr,'pic':pic,
      'vo':' '.join(meta[k]['text'] for k in cl),'status':'final' if kind=='G' else 'placeholder'})
    t+=dur
json.dump({'fps':24,'total':round(t,3),'beats':beats,'clips':clips},open('timeline_full.json','w'),indent=1)
for b in beats: print(b['id'],b['scene'],round(b['start'],1),round(b['dur'],1))
print('TOTAL',t)
