'use strict';

module.exports = function(Task) {
		var splitted = [];

	Task.findName = function(sname,cb) {
		var count;
		var pattern = new RegExp('.*'+sname+'.*', "i")
		Task.findOne({where: {name: { like : pattern} }},function(err,result) {
			if (err || !result) {
				count = 0
			}else{
				count = 1
				
			}
			var data = {
				count:count,
				name:sname}
		
			cb(null,data)
					
		})

		
	}
	

	Task.remoteMethod('findName',{
		http:{path:'/findName',verb:'get'},
		accepts:{arg:'name' ,type: 'string', http:{source: 'query'}},
		returns: {arg:'data',type:'object',root: true},
		description : ["Check if task name already exist"]
	})


		Task.deleteIds = function(ids,callBack) {
			splitted = ids.split("::");
				for (var i = splitted.length - 1; i >= 0; i--) {
						Task.destroyById(splitted[i],function(err) {
								console.log("Somethings "+err)
						})
					}
					callBack(null,"Records deleted!")


}

	Task.remoteMethod('deleteIds',{
		http:{path:'/deleteIds',verb:'post'},
		accepts: {arg:'ids',type:'string', http:{source: 'query'}},
		description : ["input ids delimeted by double colon '::'"]
	})

};
