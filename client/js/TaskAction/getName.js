function checkName(names) {
	var rest;
	return axios.get('api/Tasks/findName',{
		params: {
		name: names}
		}).then(function(res) {
			console.log(res.data)
			return res.data
	})


	}
