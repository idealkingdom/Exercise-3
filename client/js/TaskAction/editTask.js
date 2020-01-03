var datap = {};
function editTask() {
var sid = $("p#edit-idno").text().trim();
var passdata = {
    name: $("#task-name-edit").val(),
    description : $("#desc-text-edit").val(),
    date_created: Date.now(),
    status: parseInt($("#task-status-edit :selected").prop("value")),
    id: sid
  
}
checkName(passdata.name).then(function(data) {
  if ((data.count && data.name == datap.name)) {


axios.put('api/Tasks',passdata,
).then((response) => {
  modalEl = $("#editTaskModal").modal('hide')
  modalReset(modalEl)
  getAllTasks();
}).catch(error => console.log(error.response.data))


}else {
  $.notify("Invalid Name edited!", "error");
}

})


}
$("div.container").on('click', 'button#tskEditbtn', function(event) {
  $("#editTaskModal").modal('show');
  row = $(this).parents("tr")
  datap = {
    "id": row.prop("id"),
    "name": row.find('td.tdName p').text(),
    "description": row.find("div.pDesc").text(),
    "status": row.find('p.pStatus').text()
  }

  $("p#edit-idno").text(datap.id);
  $("#task-name-edit").val(datap.name);
  $("#desc-text-edit").val(datap.description);
  $("#task-status-edit").val(datap.status);
});