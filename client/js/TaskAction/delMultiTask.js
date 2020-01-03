function getAllselectedIds(){
    var result = ""
    $("tr.selected").each(function(index, el) {
      result =  ($(this).attr("id"))+"::" +result
      result.trim();
    });
    return result;
}

 
function deleteMultTask() {
var storeIds = getAllselectedIds()

axios({
  method: 'post',
  url: 'api/Tasks/deleteIds?ids='+storeIds,
    headers: {
    'Content-Type': ' application/json'
  }
}).then((response) => {
  getAllTasks();
}).catch(error => console.log("Something error"))

}




function deleteTask(el){
  axios.delete('api/Tasks/'+el).then(response =>{
      getAllTasks();
  }).catch(function(err) {
  })
}

$('div.container').on('click', 'button#tskDelbtn', function(event) {
  getID = $(this).parents('tr').prop('id');
  console.log(getID)
  if (getID!="") {deleteTask(getID)};
});
