module.exports = function(app) {
	var task = app.models.Task
  app.dataSources.mongoDs.autoupdate('Task', function(err) {
    if (err) throw err;
    
    task.create([{
      name: 'Test 1',
      date_created: Date.now(),
      description:"Example Description",
      status: 1
    }, {
      name: 'Test 2',
      date_created: Date.now(),
      description:"Example Description",
      status: 2
    }, {
      name: 'Test 3',
      date_created: Date.now(),
      description:"Example Description",
      status: 3
    }], function(err, Tasks) {
      if (err) throw err;
      console.log('Models created: \n', Tasks);
    });
  });
};

