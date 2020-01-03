$("div.container").on('click', 'a.cdescription', function(event) {
  $("#viewTaskModal").modal('show');
  row = $(this).parents("tr")
  datap = {
    "id": row.prop("id"),
    "name": row.find('td.tdName p').text(),
    "description": row.find("div.pDesc").text(),
  }
  $("#task-name-view").val(datap.name);
  $("#desc-text-view").val(datap.description);
});