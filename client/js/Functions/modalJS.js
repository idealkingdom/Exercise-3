	function modalReset(arg) {
			arg.on('hidden.bs.modal', function () {
    		$(this).find('form').trigger('reset');
			})
	}