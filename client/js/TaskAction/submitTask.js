function submitTask() {
var passdata = {
    name: $('#task-name').val(),
    description: $('#desc-text').val(),
    date_created: Date.now()
}
axios({
  method: 'post',
  url: 'api/Tasks',
  headers: {
    'Content-Type': ' application/json'
  },
  data: passdata
}).then((response) => {
  modalEl = $("#addTaskModal").modal('hide')
  modalReset(modalEl)

  getAllTasks();


}).catch(error => console.log(error.response.data))

}
