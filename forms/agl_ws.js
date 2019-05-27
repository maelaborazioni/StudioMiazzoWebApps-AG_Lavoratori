/**
 * @properties={typeid:24,uuid:"967A9B8F-04AB-44AD-A635-891E39D09332"}
 */
function ws_create()
{
	var args = arguments[0];
	
	var id = args['lavoratore'];
	var db = args['cliente'];
	
	var sql = "SELECT * FROM Lavoratori WHERE idlavoratore = ?"
	var ds = databaseManager.getDataSetByQuery('Cliente_' + db,
				                              sql,
											  [id],
											  1);
	return JSON.stringify(ds);
}