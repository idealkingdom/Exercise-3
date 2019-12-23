function getAllselectedIds(){
    var result = []
    $("tr.selected").each(function(index, el) {
      result.push($(this).attr("id"))
    });
    return result;
}


function deleteMultTask() {
var count = 0
var storeIds = getAllselectedIds()
for (var i = storeIds.length - 1; i >= 0; i--) {
  currentId = getAllselectedIds()[i]
  axios.delete('api/Tasks/'+currentId).then(response =>{
      count++;
      if (count == getAllselectedIds().length) {
          getAllTasks();
      };
  }).catch(function(err) {
    alert("Failed to remove")
    getAllTasks();
    break;
  })
};


}




function deleteTask(el){
  axios.delete('api/Tasks/'+el).then(response =>{
      getAllTasks();
  }).catch(function(err) {
    console.log(err)
  })
}

$('div.container').on('click', 'button#tskDelbtn', function(event) {
  getID = $(this).parents('tr').prop('id');
  deleteTask(getID);
});
