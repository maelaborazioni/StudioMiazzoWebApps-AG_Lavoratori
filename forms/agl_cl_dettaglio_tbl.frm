dataSource:"db:/ma_anagrafiche/lavoratori_classificazioni",
items:[
{
dataProviderID:"codclassificazione",
editable:false,
format:"#####",
location:"0,20",
name:"fld_codice",
size:"60,20",
styleClass:"table",
transparent:true,
typeid:4,
uuid:"09C5BCBC-0F0A-4F27-B4A1-1ADFA5DAE282"
},
{
labelFor:"fld_codice",
location:"0,0",
name:"lbl_codice",
size:"60,20",
styleClass:"table_header",
text:"Codice",
typeid:7,
uuid:"2518AA6E-5489-474D-BF76-7DA704C59EBA"
},
{
labelFor:"fld_decorrenza",
location:"400,0",
name:"lbl_decorrenza",
styleClass:"table_header",
text:"Decorrenza",
typeid:7,
uuid:"7F2E6249-D45A-48A6-8287-383C8F9B1ED7",
visible:false
},
{
anchors:11,
dataProviderID:"lavoratori_classificazioni_to_ditte_classificazionidettaglio.descrizione",
editable:false,
location:"60,20",
name:"fld_descrizione",
size:"340,20",
styleClass:"table",
transparent:true,
typeid:4,
uuid:"857E9CF9-8C63-4907-B831-9F30D7F05D77"
},
{
anchors:11,
labelFor:"fld_descrizione",
location:"60,0",
name:"lbl_descrizione",
size:"340,20",
styleClass:"table_header",
text:"Descrizione",
typeid:7,
uuid:"A749AD98-ADD2-490D-986F-11354DBD1A8D"
},
{
height:40,
partType:5,
typeid:19,
uuid:"A788AC92-EEF3-4E64-BC82-D2DCC3FA7E48"
},
{
editable:false,
format:"dd/MM/yyyy",
location:"400,20",
name:"fld_decorrenza",
size:"80,20",
styleClass:"table",
transparent:true,
typeid:4,
uuid:"C2072D03-DDBC-4426-9F46-1F83C68AB787",
visible:false
}
],
name:"agl_cl_dettaglio_tbl",
scrollbars:32,
size:"550,40",
styleName:"leaf_style",
typeid:3,
uuid:"36739B4A-1FC6-43ED-8F5A-F6A2CB745910",
view:3