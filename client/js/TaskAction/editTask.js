var datap = {};
function editTask() {
var sid = $("p#edit-idno").text();
var passdata = {
    name: $("#task-name-edit").val(),
    description : $("#desc-text-edit").val()
  
}
console.log(datap)
axios.patch({
  url: 'api/Tasks/'+'5e008c09485ce941fc6a5e44',
  data: passdata,
  headers: {
    'Content-Type': ' application/json'
  }
}).then((response) => {
  modalEl = $("#addTaskModal").modal('hide')
  modalReset(modalEl)

  getAllTasks();


}).catch(error => console.log(error.response.data))

}
$("div.container").on('click', 'button#tskEditbtn', function(event) {
  $("#editTaskModal").modal('show');
  row = $(this).parents("tr")
  datap = {
    "id": row.prop("id"),
    "name": row.find('td.tdName p').text(),
    "description": row.find("div.pDesc").text()
  }
  $("p#edit-idno").text(datap.id);
  $("#task-name-edit").val(datap.name);
  $("#desc-text-edit").val(datap.description);
});