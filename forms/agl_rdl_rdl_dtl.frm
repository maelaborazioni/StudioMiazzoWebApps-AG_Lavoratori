customProperties:"",
dataSource:"db:/ma_anagrafiche/lavoratori",
extendsID:"3C076162-6D45-4034-9F27-2ADA00E4841B",
items:[
{
labelFor:"chk_viaggiante",
location:"260,400",
name:"lbl_chk_viaggiante",
size:"60,20",
text:"Viaggiante",
transparent:true,
typeid:7,
uuid:"0119CA36-E6EF-40EF-B829-B08D3E451A92"
},
{
dataProviderID:"lavoratori_to_tab_categorieparticolari.codice",
horizontalAlignment:0,
location:"10,300",
name:"fld_codcategoriaparticolare",
size:"50,20",
typeid:4,
uuid:"08793E7E-D6BC-4C08-83F5-003F727A9854"
},
{
labelFor:"fld_assunzione",
location:"10,20",
name:"lbl_assunzione",
size:"100,20",
text:"Assunzione",
transparent:true,
typeid:7,
uuid:"0BDD5201-09B3-41D3-8F13-79A0E2177A0F"
},
{
anchors:11,
formIndex:51,
location:"0,0",
mediaOptions:6,
size:"720,20",
styleClass:"title_bar",
typeid:7,
uuid:"1737D73D-DECC-438C-BEDE-A2810FE2B322"
},
{
labelFor:"fld_decorrrenzatfr",
location:"100,20",
name:"lbl_decorrenzatfr",
size:"80,20",
text:"Decorrenza TFR",
transparent:true,
typeid:7,
uuid:"195228B7-2167-4D23-8BA4-848AA03CD473"
},
{
customProperties:"methods:{\
onActionMethodID:{\
arguments:[\
null,\
\"'contr_ins_num'\",\
\"'AG_Lkp_ContrattiInserimento'\",\
null,\
null,\
null,\
null,\
null,\
\"true\"\
]\
}\
}",
enabled:false,
formIndex:64,
horizontalAlignment:0,
labelFor:"fld_codcategoriaprotetta",
location:"240,380",
name:"btn_contrattoinserimento",
onActionMethodID:"09683411-0331-4A08-BF5E-656611194522",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"20,20",
styleClass:"btn_lookup",
transparent:true,
typeid:7,
uuid:"1E4CD2AB-4C16-443E-B512-E04419990527"
},
{
customProperties:"methods:{\
onActionMethodID:{\
arguments:[\
null,\
\"'iddittainailposizione'\",\
\"'LEAF_Lkp_DitteInailPosizioni'\",\
null,\
\"'filtraDitta'\",\
null,\
null,\
null,\
\"true\"\
]\
}\
}",
enabled:false,
formIndex:22,
labelFor:"fld_cod_pos_inail",
location:"390,190",
name:"btn_pos_inail",
onActionMethodID:"09683411-0331-4A08-BF5E-656611194522",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"20,20",
styleClass:"btn_lookup",
transparent:true,
typeid:7,
uuid:"1E585252-7582-4366-972C-FD2D18578A3A"
},
{
labelFor:"fld_cessazione",
location:"150,60",
name:"lbl_cessazione",
size:"80,20",
text:"Cessazione",
transparent:true,
typeid:7,
uuid:"1F2F105F-5BCA-4D3B-88C3-0C3A303356A0"
},
{
location:"340,280",
name:"lbl_categoriaprotetta",
size:"100,20",
text:"Categoria protetta",
transparent:true,
typeid:7,
uuid:"210DB682-3141-41D4-A680-30AD5A26D16F"
},
{
labelFor:"fld_percentualedisc",
location:"430,320",
name:"lbl_percentualedisc",
size:"40,20",
text:"% disc.",
transparent:true,
typeid:7,
uuid:"23F251F0-55E5-4C23-A105-A5DE724BCDF2"
},
{
customProperties:"methods:{\
onActionMethodID:{\
arguments:[\
null,\
\"'iddittasede'\",\
\"'LEAF_Lkp_DitteSediLavoro'\",\
null,\
\"'filtraDitta'\",\
null,\
null,\
null,\
\"true\"\
]\
}\
}",
enabled:false,
formIndex:22,
labelFor:"fld_cod_sdl",
location:"60,150",
name:"btn_sdl",
onActionMethodID:"09683411-0331-4A08-BF5E-656611194522",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"20,20",
styleClass:"btn_lookup",
transparent:true,
typeid:7,
uuid:"25DEA81F-7873-49A0-B2E2-F8A167A5EC5C"
},
{
dataProviderID:"lavoratori_to_lavoratori_statoanag.codcategoriaprotetta",
editable:false,
formIndex:63,
horizontalAlignment:0,
location:"340,300",
name:"fld_codcategoriaprotetta",
size:"49,20",
typeid:4,
uuid:"2F7655DE-A400-4300-B4AB-D1E83AC878D8"
},
{
enabled:false,
formIndex:1,
labelFor:"fld_anzmalattia",
location:"340,40",
name:"btn_anzmalattia",
onActionMethodID:"763FDDFF-2CFE-46E2-A447-E7F60173BC57",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"20,20",
styleClass:"btn_calendar",
transparent:true,
typeid:7,
uuid:"3001527A-4FDD-4186-9991-06668558C00F"
},
{
dataProviderID:"lavoratori_to_e2tabgruppicontrattuali.descrizione",
formIndex:20,
location:"80,230",
name:"fld_contratto",
size:"250,20",
typeid:4,
uuid:"321EFF7F-D741-4585-8A1E-9D88358F75E1"
},
{
enabled:false,
formIndex:1,
labelFor:"fld_decorrrenzatfr",
location:"160,40",
name:"btn_decorrenzatfr",
onActionMethodID:"763FDDFF-2CFE-46E2-A447-E7F60173BC57",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"20,20",
styleClass:"btn_calendar",
transparent:true,
typeid:7,
uuid:"32AE0D41-4DE7-4C79-8536-A06B1CFAD487"
},
{
formIndex:24,
labelFor:"fld_cod_pos_inps",
location:"10,130",
name:"lbl_sdl",
size:"110,20",
text:"Sede di lavoro",
transparent:true,
typeid:7,
uuid:"33EFE060-FBBD-490B-80B1-0A3B99D8B6D0"
},
{
dataProviderID:"codtipopaga",
displayType:2,
editable:false,
horizontalAlignment:0,
location:"340,340",
name:"fld_tipopaga",
size:"70,20",
typeid:4,
uuid:"3663BD79-C434-4761-B32D-285D12B216D7",
valuelistID:"D49A128C-56FF-40A9-AF8B-96CF559F31ED"
},
{
dataProviderID:"valNumPas",
editable:false,
enabled:false,
formIndex:65,
horizontalAlignment:0,
location:"130,380",
size:"50,20",
typeid:4,
uuid:"375EC4B6-8452-45EC-8C0C-7C16850A6D62"
},
{
formIndex:24,
labelFor:"fld_cod_pos_inps",
location:"10,170",
name:"lbl_pos_inps",
size:"110,20",
text:"Posizione INPS",
transparent:true,
typeid:7,
uuid:"398CDC8E-F25F-4799-97A8-DAB8EE46D2B0"
},
{
dataProviderID:"codtiporapporto",
displayType:2,
editable:false,
location:"10,80",
name:"fld_codcontratto",
size:"130,20",
text:"Codcontratto",
typeid:4,
uuid:"3E6BFEF9-45D3-49F8-9414-8DE7BADF74BA",
valuelistID:"470B2C76-D691-4D5A-B78B-77A25B3D75AC"
},
{
dataProviderID:"anzferie",
format:"dd/MM/yyyy|mask",
location:"370,40",
name:"fld_anzferie",
size:"80,20",
text:"Anzferie",
typeid:4,
uuid:"3EE9D2F8-8BAE-46C9-8A33-57A2AE3EE886"
},
{
formIndex:69,
location:"670,210",
size:"40,20",
text:"Livello",
transparent:true,
typeid:7,
uuid:"400A7E03-89FD-4C21-A7A2-48828F9EFB92"
},
{
dataProviderID:"anzcontributiva",
format:"dd/MM/yyyy|mask",
location:"190,40",
name:"fld_anzcontributiva",
size:"80,20",
typeid:4,
uuid:"431F0A7C-C37A-4D42-9A97-622A96B8878A"
},
{
dataProviderID:"lavoratori_to_ditte_inailposizioni.posizioneinail",
formIndex:21,
location:"340,190",
name:"fld_cod_pos_inail",
size:"50,20",
typeid:4,
uuid:"4554F1A5-8758-41DD-A000-9AB6586DF7B2"
},
{
enabled:false,
formIndex:1,
labelFor:"fld_anzferie",
location:"430,40",
name:"btn_anzferie",
onActionMethodID:"763FDDFF-2CFE-46E2-A447-E7F60173BC57",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"20,20",
styleClass:"btn_calendar",
transparent:true,
typeid:7,
uuid:"4B66D322-54E2-4003-97F7-FB11CD352954"
},
{
dataProviderID:"lavoratori_to_tab_contrattiinserimento.codice",
horizontalAlignment:0,
location:"190,380",
name:"fld_contrattoinserimento",
size:"50,20",
typeid:4,
uuid:"4D9B0D82-3C15-4234-B544-C40E231DDD55"
},
{
dataProviderID:"lavoratori_to_e2tabqualifiche.descrizione",
formIndex:20,
location:"410,230",
name:"fld_qualifica",
size:"250,20",
typeid:4,
uuid:"549527F1-BB20-4164-B4E7-3316F0D4ED3F"
},
{
labelFor:"fld_gestionepresenze",
location:"10,400",
name:"lbl_codgestionepresenze",
size:"110,20",
text:"Gestione presenze",
transparent:true,
typeid:7,
uuid:"5718A1B7-3B08-4DE0-8B4D-FC0EAEAAFF4F"
},
{
formIndex:62,
location:"0,0",
size:"125,20",
styleClass:"title_text",
text:"Rapporto di lavoro",
transparent:true,
typeid:7,
uuid:"5985E270-7395-402C-973A-E853A213BA23"
},
{
labelFor:"fld_codcategoriaparticolare",
location:"10,280",
name:"lbl_codcategoriaparticolare",
size:"122,20",
text:"Categoria particolare",
transparent:true,
typeid:7,
uuid:"5C332758-05D6-40E2-A8E7-811C53349F3C"
},
{
dataProviderID:"lavoratori_to_tab_tipiturno.descrizione",
editable:false,
formIndex:63,
location:"80,340",
name:"fld_turnista_desc",
size:"250,20",
typeid:4,
uuid:"5D085C54-B4CF-41C5-83AC-DF4C03BDA411"
},
{
dataProviderID:"codgestionepresenze",
displayType:2,
editable:false,
location:"10,420",
name:"fld_gestionepresenze",
size:"110,20",
text:"Gestione presenze",
typeid:4,
uuid:"5FFB85EA-1BEA-45C9-8F02-ED61A121117A",
valuelistID:"0901E842-19C9-40EE-B8D1-3D96331068E3"
},
{
dataProviderID:"percentualedisc",
horizontalAlignment:0,
location:"430,340",
name:"fld_percentualedisc",
size:"40,20",
text:"Percentualedisc",
typeid:4,
uuid:"611AB20F-E2BC-4506-B36D-7D8E2160BD41"
},
{
height:412,
partType:5,
typeid:19,
uuid:"6721C0F7-A28A-43D5-96A7-5264C5B5DED8"
},
{
formIndex:71,
location:"0,110",
size:"100,20",
styleClass:"title_text",
text:"Inquadramento",
transparent:true,
typeid:7,
uuid:"67DBAFF0-7FAE-456D-96DA-F2BCDD84EE9E"
},
{
borderType:"EmptyBorder,0,0,0,0",
dataProviderID:"stagionale",
displayType:4,
horizontalAlignment:0,
location:"190,420",
name:"chk_stagionale",
size:"60,20",
transparent:true,
typeid:4,
uuid:"67E2B9E8-D5EB-4E9F-8354-E664DA8D2FE7"
},
{
enabled:false,
formIndex:1,
labelFor:"fld_anzcontributiva",
location:"250,40",
name:"btn_anzcontributiva",
onActionMethodID:"763FDDFF-2CFE-46E2-A447-E7F60173BC57",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"20,20",
styleClass:"btn_calendar",
transparent:true,
typeid:7,
uuid:"68213AF5-8E5F-4132-AA0B-B66E10BAA7E0"
},
{
dataProviderID:"lavoratori_to_ditte_inps.posizioneinps",
formIndex:21,
location:"10,190",
name:"fld_cod_pos_inps",
size:"50,20",
typeid:4,
uuid:"68EE525F-52EA-459F-87A7-81F77AAAA7C9"
},
{
customProperties:"methods:{\
onActionMethodID:{\
arguments:[\
null,\
\"'codcatpart_num'\",\
\"'LEAF_Lkp_Categpart'\",\
\"'AggiornaCategPart'\",\
null,\
null,\
null,\
null,\
\"true\"\
]\
}\
}",
enabled:false,
formIndex:64,
horizontalAlignment:0,
labelFor:"fld_codcategoriaparticolare",
location:"60,300",
name:"btn_categoriaparticolare",
onActionMethodID:"09683411-0331-4A08-BF5E-656611194522",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"20,20",
styleClass:"btn_lookup",
transparent:true,
typeid:7,
uuid:"693EB540-7E15-4D38-86B3-CB46EE1E5199"
},
{
formIndex:24,
labelFor:"fld_cod_qualifica",
location:"340,210",
name:"lbl_cod_qualifica",
size:"80,20",
text:"Qualifica",
transparent:true,
typeid:7,
uuid:"696E297C-522F-44EA-90FC-5FAA30BD0C95"
},
{
enabled:false,
formIndex:1,
labelFor:"fld_scadenzacontratto",
location:"520,40",
name:"btn_scadenzacontratto",
onActionMethodID:"763FDDFF-2CFE-46E2-A447-E7F60173BC57",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"20,20",
styleClass:"btn_calendar",
transparent:true,
typeid:7,
uuid:"6BBDD2C8-717A-4429-9527-1C828E299C81"
},
{
dataProviderID:"lavoratori_to_ditte_inailposizioni.descrizione",
formIndex:20,
location:"410,190",
name:"fld_desc_pos_inail",
size:"250,20",
typeid:4,
uuid:"6CCD5175-CABD-4958-B190-2D47A260252F"
},
{
location:"10,360",
name:"lbl_pianoapprendisti",
size:"102,20",
text:"Piano apprendisti",
transparent:true,
typeid:7,
uuid:"6E37F133-1EEA-4AB1-B873-3F4C2AE0CAD2"
},
{
anchors:11,
formIndex:51,
location:"0,260",
mediaOptions:6,
size:"720,20",
styleClass:"title_bar",
typeid:7,
uuid:"6F0E2693-F09B-4705-BBA3-15D8BED16437"
},
{
location:"130,360",
name:"lbl_nrpasso",
size:"50,20",
text:"Nr. passo",
transparent:true,
typeid:7,
uuid:"6FFDFD3B-B04A-4A97-BAAD-404313C6F908"
},
{
enabled:false,
formIndex:1,
labelFor:"fld_cessazione",
location:"210,80",
name:"btn_cessazione",
onActionMethodID:"763FDDFF-2CFE-46E2-A447-E7F60173BC57",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"20,20",
styleClass:"btn_calendar",
transparent:true,
typeid:7,
uuid:"736FB8CB-8E5B-4258-BC67-8BEAEA972C8A"
},
{
dataProviderID:"anzconvenzionale",
format:"dd/MM/yyyy|mask",
location:"100,40",
name:"fld_decorrrenzatfr",
size:"80,20",
typeid:4,
uuid:"74236224-90AA-4511-AA59-703D865C5064"
},
{
labelFor:"fld_anzcontributiva",
location:"190,20",
name:"lbl_anzcontributiva",
size:"80,20",
text:"Anz.Contributiva",
transparent:true,
typeid:7,
uuid:"7955DE61-85E1-44D4-9D52-C2FEED168BEC"
},
{
labelFor:"chk_stagionale",
location:"190,400",
name:"lbl_stagionale",
size:"60,20",
text:"Stagionale",
transparent:true,
typeid:7,
uuid:"79775ADE-BCE6-4CEF-A1D0-B620FB88B1CF"
},
{
labelFor:"fld_tipopaga",
location:"340,320",
name:"lbl_codtipopaga",
size:"70,20",
text:"Tipo paga",
transparent:true,
typeid:7,
uuid:"79B89971-82FD-4120-9BC1-C39B04DC2550"
},
{
customProperties:"methods:{\
onActionMethodID:{\
arguments:[\
null,\
\"'iddittainps'\",\
\"'AG_Lkp_PosizioneInps'\",\
null,\
\"'filtraDitta'\",\
null,\
null,\
null,\
\"true\"\
]\
}\
}",
enabled:false,
formIndex:22,
labelFor:"fld_cod_pos_inps",
location:"60,190",
name:"btn_pos_inps",
onActionMethodID:"09683411-0331-4A08-BF5E-656611194522",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"20,20",
styleClass:"btn_lookup",
transparent:true,
typeid:7,
uuid:"7ABD7414-E842-4A34-B08F-0C210AC6EAE7"
},
{
labelFor:"fld_scadenzacontratto",
location:"460,20",
name:"lbl_scadenzacontratto",
size:"80,20",
text:"Data termine",
transparent:true,
typeid:7,
uuid:"7E983828-C949-45F9-81A5-EC601D75F665"
},
{
formIndex:24,
labelFor:"fld_cod_contratto",
location:"10,210",
name:"lbl_cod_contratto",
size:"80,20",
text:"Contratto",
transparent:true,
typeid:7,
uuid:"81BD59C9-4B0E-4F6D-9077-98E1EBEB5063"
},
{
dataProviderID:"lavoratori_to_ditte_sedi.descrizione",
formIndex:20,
location:"80,150",
name:"fld_desc_sdl",
size:"250,20",
typeid:4,
uuid:"87757881-7580-432D-9BAC-2D38B48F437A"
},
{
dataProviderID:"lavoratori_to_lavoratori_job.codlivello",
formIndex:70,
location:"670,230",
name:"fld_codlivello",
size:"39,20",
typeid:4,
uuid:"89B03E60-0DC9-403F-BD02-64EF5B911E1A"
},
{
dataProviderID:"scadenzacontratto",
format:"dd/MM/yyyy|mask",
location:"460,40",
name:"fld_scadenzacontratto",
size:"80,20",
typeid:4,
uuid:"991F9CF1-A16F-4265-ABCF-875277E585F6"
},
{
dataProviderID:"lavoratori_to_lavoratori_statoanag.lavoratori_statoanag_to_tab_categorieprotette.descrizione",
editable:false,
formIndex:63,
location:"410,300",
name:"fld_categoriaprotetta",
size:"250,20",
typeid:4,
uuid:"9FAB99C2-F836-4A87-AFC9-C12A020F6B85"
},
{
dataProviderID:"lavoratori_to_tab_tipiturno.codice",
horizontalAlignment:0,
location:"10,340",
name:"fld_codturnista",
size:"50,20",
typeid:4,
uuid:"A00C393D-BEA9-43E4-8568-2BBA07003E9E"
},
{
labelFor:"fld_codturnista",
location:"10,320",
name:"lbl_codturnista",
size:"80,20",
text:"Turnista",
transparent:true,
typeid:7,
uuid:"A2CC5B2F-348C-4DA7-845C-F5E1A1989E67"
},
{
dataProviderID:"cessazione",
format:"dd/MM/yyyy|mask",
location:"150,80",
name:"fld_cessazione",
onDataChangeMethodID:"4A38E767-D354-46BC-91F9-06A682D92E91",
size:"80,20",
typeid:4,
uuid:"A8E29927-E919-4C61-A89B-57B7C0F63D9B"
},
{
labelFor:"fld_codcontratto",
location:"10,60",
name:"lbl_tipologiacontratto",
size:"130,20",
text:"Tipologia contratto",
transparent:true,
typeid:7,
uuid:"AE03E639-BB03-4ECA-AF62-5ACF3DFB8981"
},
{
dataProviderID:"codqualifica",
formIndex:21,
location:"340,230",
name:"fld_cod_qualifica",
size:"50,20",
typeid:4,
uuid:"B407F2EB-7A49-4543-8ED9-BE1E061319C1"
},
{
labelFor:"fld_contrattoinserimento",
location:"190,360",
name:"lbl_codcontrattoinserimento",
size:"171,20",
text:"Tipo contratto di inserimento",
transparent:true,
typeid:7,
uuid:"B5F78C6B-0A32-48D8-8323-3E4B61983BC3"
},
{
extendsID:"AAAC08F8-0270-4E48-995F-E7066E036521",
height:450,
typeid:19,
uuid:"B67D9329-7AA3-4770-9868-F6DD949FE606"
},
{
dataProviderID:"lavoratori_to_ditte_sedi.codice",
formIndex:21,
location:"10,150",
name:"fld_cod_sdl",
size:"50,20",
typeid:4,
uuid:"CD7C8FCF-0D5C-4945-A0F8-721FAB6278D4"
},
{
customProperties:"methods:{\
onActionMethodID:{\
arguments:[\
null,\
\"'radicecontratto'\",\
\"'AG_Lkp_GruppiContrattuali'\",\
\"'AggiornaContratto'\",\
null,\
null,\
null,\
null,\
\"true\"\
]\
}\
}",
enabled:false,
formIndex:22,
labelFor:"fld_codcontratto",
location:"60,230",
name:"btn_contratto",
onActionMethodID:"09683411-0331-4A08-BF5E-656611194522",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"20,20",
styleClass:"btn_lookup",
transparent:true,
typeid:7,
uuid:"CE49E300-5B22-43E6-A9E7-38D13E79ED06"
},
{
formIndex:68,
location:"310,340",
onActionMethodID:"994B1BF6-95A8-490D-BBD5-51688B4B03B9",
rolloverCursor:12,
showClick:false,
size:"20,20",
styleClass:"btn_info",
toolTipText:"Visualizza storico decorrenze turni",
transparent:true,
typeid:7,
uuid:"D446C3D7-0197-401A-AEE9-1698AB180A9B"
},
{
formIndex:24,
labelFor:"fld_cod_pos_inps",
location:"340,170",
name:"lbl_pos_inail",
size:"125,20",
text:"Posizione INAIL",
transparent:true,
typeid:7,
uuid:"D7242670-7921-48D5-A71A-41CA13BE50CD"
},
{
anchors:11,
formIndex:51,
location:"0,110",
mediaOptions:6,
size:"720,20",
styleClass:"title_bar",
typeid:7,
uuid:"D73649DA-7E8A-491E-AD91-4309E0268955"
},
{
dataProviderID:"anzmalattia",
format:"dd/MM/yyyy|mask",
location:"280,40",
name:"fld_anzmalattia",
size:"80,20",
typeid:4,
uuid:"DDB06013-345C-4E54-B118-57C4D733037F"
},
{
dataProviderID:"valPianoAppr",
formIndex:65,
location:"10,380",
name:"fld_pianoapprendisti",
size:"110,20",
typeid:4,
uuid:"DF454CAF-4846-4E47-BE5F-71C68E4E30E6"
},
{
customProperties:"methods:{\
onActionMethodID:{\
arguments:[\
null,\
\"'codturnista_num'\",\
\"'AG_Lkp_TipiTurno'\",\
\"'AggiornaTipoTurnista'\",\
null,\
null,\
null,\
null,\
\"true\"\
]\
}\
}",
enabled:false,
formIndex:64,
horizontalAlignment:0,
labelFor:"fld_codturnista",
location:"60,340",
name:"btn_turnista",
onActionMethodID:"09683411-0331-4A08-BF5E-656611194522",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"20,20",
styleClass:"btn_lookup",
transparent:true,
typeid:7,
uuid:"DFF50D0E-CCB8-45C2-8BE7-20418ECEC6F1"
},
{
enabled:false,
formIndex:64,
labelFor:"fld_assunzione",
location:"70,40",
name:"btn_assunzione",
onActionMethodID:"763FDDFF-2CFE-46E2-A447-E7F60173BC57",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"20,20",
styleClass:"btn_calendar",
transparent:true,
typeid:7,
uuid:"E1524107-8FD5-40EB-8539-14ECEDD77DAF"
},
{
customProperties:"methods:{\
onActionMethodID:{\
arguments:[\
null,\
\"'radicequalifica'\",\
\"'LEAF_Lkp_Qualifica'\",\
\"'AggiornaQualifica'\",\
\"'filtraDitta'\",\
null,\
null,\
null,\
\"true\"\
]\
}\
}",
enabled:false,
formIndex:22,
labelFor:"fld_cod_qualifica",
location:"390,230",
name:"btn_qualifica",
onActionMethodID:"09683411-0331-4A08-BF5E-656611194522",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"20,20",
styleClass:"btn_lookup",
transparent:true,
typeid:7,
uuid:"E200F10D-F2E0-499E-8EAE-9414C6184F18"
},
{
dataProviderID:"lavoratori_to_ditte_inps.ditte_inps_to_ditte_attivita.descrizioneateco",
formIndex:20,
location:"80,190",
name:"fld_desc_pos_inps",
size:"250,20",
typeid:4,
uuid:"E449C040-2AAF-4AE0-80F4-DA4547FA30DD"
},
{
labelFor:"fld_motivocessazione",
location:"240,60",
name:"lbl_motivocesssazione",
size:"96,20",
text:"Motivo cessazione",
transparent:true,
typeid:7,
uuid:"E596EBCB-DEAC-4E02-BE15-16C149DD26EA"
},
{
customProperties:"methods:{\
onActionMethodID:{\
arguments:[\
null,\
null,\
\"'LEAF_Lkp_Categprotette'\",\
\"'AggiornaCategoriaProtetta'\",\
null,\
null,\
null,\
null,\
\"true\"\
]\
}\
}",
enabled:false,
formIndex:64,
horizontalAlignment:0,
labelFor:"fld_codcategoriaprotetta",
location:"390,300",
name:"btn_categoriaprotetta",
onActionMethodID:"09683411-0331-4A08-BF5E-656611194522",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"20,20",
styleClass:"btn_lookup",
transparent:true,
typeid:7,
uuid:"E5D52744-C1B5-41C9-A541-874744A2BD45"
},
{
dataProviderID:"assunzione",
format:"dd/MM/yyyy|mask",
location:"10,40",
name:"fld_assunzione",
size:"80,20",
typeid:4,
uuid:"E6169E3D-4C0E-47B5-ABF1-FC0F86ACFB70"
},
{
dataProviderID:"codcontratto",
formIndex:21,
location:"10,230",
name:"fld_cod_contratto",
size:"50,20",
typeid:4,
uuid:"EA0CABBF-CD9F-455B-934C-73EC8A442043"
},
{
formIndex:62,
location:"0,260",
size:"181,20",
styleClass:"title_text",
text:"Dettagli",
transparent:true,
typeid:7,
uuid:"EA648D85-BB77-4C50-9693-A9CAD3BF2C87"
},
{
dataProviderID:"lavoratori_to_tab_motivicessazione.descrizione",
editable:false,
formIndex:63,
location:"240,80",
name:"fld_motivocessazione",
size:"300,20",
typeid:4,
uuid:"EA821836-F354-45CA-8079-BFD7D00DD6DF"
},
{
dataProviderID:"lavoratori_to_tab_contrattiinserimento.descrizione",
editable:false,
formIndex:67,
location:"260,380",
name:"fld_contrattoinserimento_desc",
size:"250,20",
typeid:4,
uuid:"ECA36B17-B5EC-4B45-875C-7B9DDA71D5CE"
},
{
labelFor:"fld_anzferie",
location:"370,20",
name:"lbl_anzferie",
size:"80,20",
text:"Anz. Ferie",
transparent:true,
typeid:7,
uuid:"EFAEDD60-E0A0-4C7B-BA48-438FA041866B"
},
{
labelFor:"fld_anzmalattia",
location:"280,20",
name:"lbl_anzmalattia",
size:"80,20",
text:"Anz. Malattia",
transparent:true,
typeid:7,
uuid:"F0AE84EC-E7F5-4020-B0C1-DEDAE8AEA969"
},
{
borderType:"EmptyBorder,0,0,0,0",
dataProviderID:"personaleviaggiante",
displayType:4,
horizontalAlignment:0,
location:"260,420",
name:"chk_viaggiante",
size:"60,20",
transparent:true,
typeid:4,
uuid:"FA36C91F-5CEC-4121-8C9A-4798D76829E2"
},
{
dataProviderID:"lavoratori_to_tab_categorieparticolari.descrizione",
editable:false,
formIndex:63,
location:"80,300",
name:"fld_codcatpart_desc",
size:"250,20",
typeid:4,
uuid:"FA5710FA-45C2-47BC-806A-45AA45DCB0F0"
}
],
name:"agl_rdl_rdl_dtl",
navigatorID:"-1",
onShowMethodID:"2B85FC8D-2752-4485-8AA6-C84458505F9B",
showInMenu:true,
size:"720,487",
styleName:"leaf_style",
typeid:3,
uuid:"AE487D82-4B59-4D92-8347-8F8AB1FEC64A"