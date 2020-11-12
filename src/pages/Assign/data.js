const employees = [{
    'ID': 1,
    'FirstName': '1.1',
    'LastName': 'Demontāžas darbi',
    'DateFrom': '2020/08/01',
    'DateTo': '2021/03/20',
    'StateID': 5
  }, {
    'ID': 2,
    'FirstName': '1.2',
    'LastName': 'Sienas',
    'DateFrom': '2020/08/01',
    'DateTo': '2021/03/20',
    'StateID': 5
  }, {
    'ID': 3,
    'FirstName': '1.3',
    'LastName': 'Grīdas',
    'DateFrom': '2020/08/01',
    'DateTo': '2021/03/20',
    'StateID': 4
  }, {
    'ID': 4,
    'FirstName': '1.4',
    'LastName': 'Logi, durvis',
    'DateFrom': '2020/08/01',
    'DateTo': '2021/03/20',
    'StateID': 4
  }, {
    'ID': 5,
    'FirstName': '1.5',
    'LastName': 'Apdares darbi',
    'DateFrom': '2020/08/01',
    'DateTo': '2021/03/20',
    'StateID': 4
  }, {
    'ID': 6,
    'FirstName': '1.6',
    'LastName': 'Dažādi darbi',
    'DateFrom': '2020/08/01',
    'DateTo': '2021/03/20',
    'StateID': 4
  }, {
    'ID': 7,
    'FirstName': '2.1',
    'LastName': 'Apkure, ventilācija, dzesēšana',
    'DateFrom': '2020/09/01',
    'DateTo': '2021/04/20',
    'StateID': 1
  }, {
    'ID': 8,
    'FirstName': '2.2',
    'LastName': 'Ūdensvads un kanalizācija',
    'DateFrom': '2020/09/01',
    'DateTo': '2021/04/20',
    'StateID': 1
  }, {
    'ID': 9,
    'FirstName': '2.3',
    'LastName': 'Elektroapgāde',
    'DateFrom': '2020/09/01',
    'DateTo': '2021/04/20',
    'StateID': 1
  }, {
    'ID': 10,
    'FirstName': '2.4',
    'LastName': 'Elektronisko sakaru tīkli	',
    'DateFrom': '2020/09/01',
    'DateTo': '2021/04/20',
    'StateID': 5
  }, {
    'ID': 11,
    'FirstName': '2.5',
    'LastName': 'Ugunsgrēka atklāšanas un trauksmes signalizācija	',
    'DateFrom': '2020/09/01',
    'DateTo': '2021/04/20',
    'StateID': 2
  }, {
    'ID': 12,
    'FirstName': '3.1',
    'LastName': 'Iekārtas un iebūvētās mēbeles',
    'DateFrom': '2020/09/01',
    'DateTo': '2021/04/20',
    'StateID': 5
    
  }];
  
  const states = [{
    'ID': 1,
    'Name': 'V.Ustinovs'
  }, {
    'ID': 2,
    'Name': 'J.Grabļevskis'
  }, {
    'ID': 3,
    'Name': 'O.Dolgovskis'
  }];
  
  
  export default {
    getEmployees() {
      return employees;
    },
    getStates() {
      return states;
    }
  };
  