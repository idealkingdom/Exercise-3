'use strict';

module.exports = function(Task) {
		var splitted = [];
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
		accepts: {arg:'ids',type:'string', http:{source: 'query'}}
	})

};
