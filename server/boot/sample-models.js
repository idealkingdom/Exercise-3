module.exports = function(app) {
	var task = app.models.Task
  app.dataSources.mongoDs.automigrate('Task', function(err) {
    if (err) throw err;
    
    task.create([{
      name: 'Bel Cafe',
      date_created: Date.now(),
      description:"Example Description"
    }, {
      name: 'Bel Cafe',
      date_created: Date.now(),
      description:"Example Description"
    }, {
      name: 'Test 3',
      date_created: Date.now(),
      description:"Example Description"
    }], function(err, Tasks) {
      if (err) throw err;

      console.log('Models created: \n', Tasks);
    });
  });
};

