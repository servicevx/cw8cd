export const tasks = [{
    'id': 1,
    'parentId': 0,
    'title': 'Software Development',
    'start': new Date('2019-02-21T05:00:00.000Z'),
    'end': new Date('2019-07-04T12:00:00.000Z'),
    'progress': 31
  }, {
    'id': 2,
    'parentId': 1,
    'title': 'Scope',
    'start': new Date('2019-02-21T05:00:00.000Z'),
    'end': new Date('2019-02-26T09:00:00.000Z'),
    'progress': 60
  }];
  
  export const dependencies = [{
    'id': 1,
    'predecessorId': 3,
    'successorId': 4,
    'type': 0
  }, {
    'id': 2,
    'predecessorId': 4,
    'successorId': 5,
    'type': 0
  }];
  
  export const resources = [{
    'id': 1,
    'text': 'Management'
  }, {
    'id': 2,
    'text': 'Project Manager'
  }, {
    'id': 3,
    'text': 'Analyst'
  }, {
    'id': 4,
    'text': 'Developer'
  }, {
    'id': 5,
    'text': 'Testers'
  }, {
    'id': 6,
    'text': 'Trainers'
  }, {
    'id': 7,
    'text': 'Technical Communicators'
  }, {
    'id': 8,
    'text': 'Deployment Team'
  }];

  export const resourceAssignments = [{
    'id': 0,
    'taskId': 3,
    'resourceId': 1
  }, {
    'id': 1,
    'taskId': 4,
    'resourceId': 1
  }, {
    'id': 2,
    'taskId': 5,
    'resourceId': 2
  }];
  