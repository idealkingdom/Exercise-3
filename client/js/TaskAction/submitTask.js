function submitTask() {
var edata;
var exists;
var passdata = {
    name: $('#task-name').val(),
    description: $('#desc-text').val(),
    date_created: Date.now(),
    status:  parseInt($('#task-status :selected').prop("value"))
}
checkName(passdata.name).then(function(data) {console.log(data.count) 
  if (!data.count) {
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

      }).catch(error => {
        edata = error.response.data
        console.log(edata)}
      )

} else {
  $.notify("Duplicate names are not valid", "error");
}

})



}
