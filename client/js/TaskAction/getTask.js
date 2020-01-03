function getAllTasks () {
axios.get("api/Tasks")
  .then(function (res) {
  	let data = res.data
  	xdata = data
  	// Append the data into the table
 	 	load = $('#task-table').loading({
      	message: 'Updating Data...'
  		});
  	setTimeout(function() {
  		appendTask(xdata);
  		load.loading("stop")
 	},500)
  })

}

$("div.container").on('click', '.cntrlChckbox', function(el) {
		var target = $(el.target)
		if (target.prop('type') !== 'checkbox') {
		var checkFind = $(this).find('input:checkbox')
	 	var checked = checkFind.is(':checked')
		checkFind.prop("checked",+!checked).change();
		}
		if (target[0].tagName === 'TH' || target.parents("th.cntrlChckbox").length) {
			var checkbox = $('td.cntrlChckbox input:checkbox')
			$(this).find('input:checkbox').is(':checked') ? checkbox.prop('checked',1) : checkbox.prop('checked',0)
			checkbox.change();
		}
});


$("div.container").on('change', 'td.cntrlChckbox input:checkbox', function(event) {
		chkbox = $('td.cntrlChckbox input:checked')
		notchkbox = $('td.cntrlChckbox input:not(input:checked)')
		chkbox.each(function(index, el) {
			$(this).parents('tr').addClass("selected")
		});
		notchkbox.parents('tr').removeClass('selected')
});




function appendTask (data) {
	var checkbox = `
					<div class="input-group-prepend">
					<div class="input-group-text">
					<input type="checkbox" class="selection">
					</div>
					</div>`
	var statusString = ['None','Pending','Ongoing','Completed']
	$('#task-table tr:gt(0)').html("")
	for (var i = 0; i < data.length; i++) {
		var currentData = data[i]
		var id  = currentData.id
		var name = currentData.name
		var date_created = formatDate(currentData.date_created)
		var description = currentData.description
		var status = statusString[currentData.status]
		$('#task-table')
			.append(`<tr id=${id}>
					 	<td class="cntrlChckbox">${checkbox}</td>
					 	<td class="tdName"><p>${name}</p></td>
					 	<td ><div class="hidden pDesc">${description}</div><a href="#" class="cdescription">Click here to show description</a></td>
					 	<td ><p class="hidden pStatus">${currentData.status}</p>${status}</td>
					 	<td><p>${date_created}</p></td>
					 	<td>
					 		<div class="tools-container">
					 		<button id="tskEditbtn" class="btn tasktools">
					 		<i  class="fas fa-pencil-alt"/>
					 		</button></div>
					 		<button id="tskDelbtn"  class="btn tasktools">
					 		<i class="far fa-trash-alt"/>
					 		</button></div>
					 		</div>
					 	</td>
					 <tr>
					`)
	};
}

getAllTasks();