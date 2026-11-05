ORDER="C0 T0 H1a H1b H2a H2b H2c H2d H2e H3a H3b H3c H3d H3e H3f H3g H3h H4a H4b H4c".split()
IDS=list(range(446070,446090))
ORDER+="H4d H4e H4f H4g H4h H4i H4j H4k H4l H4m".split();IDS+=list(range(446096,446106))
ORDER+="H4n H5a H5b H5c H5d H5e H5f H5g H5h H5i".split();IDS+=list(range(446109,446119))
ORDER+="H5j C5 H5k H6a H6b H6c H6d H6e H6f H6g".split();IDS+=list(range(446119,446129))
ORDER+="H6h H6i H6j H7a H7b H7c H7d H7e H7f H7g".split();IDS+=list(range(446129,446139))
ORDER+="H8a H8b H8c H9a H9b H9c H9d H9e R1 H10a".split();IDS+=list(range(446139,446149))
ORDER+=["H10b"];IDS+=[446149]
VO=dict(zip(ORDER,IDS))
# pass 4 rewording (GenAI models on anonymized data; keep the headsets)
VO.update({'H3e':447787,'H4k':447788,'H6e':447789,'H7e':447791})
# pass 6 closing lines
VO.update({'H10b':447984,'H10c':447985,'H10d':447986})
SFX={'score':446165,'hum':446151,'alarm':446152,'page':446153,'cup':446154,'bell':446155,'chime':446156,'pen':446157}
assert len(VO)==73
