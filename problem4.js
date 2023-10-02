function findAddress(obj) {
    if (typeof obj !== 'object') {
        return 'Provide a valid object.' ;
    }
    else {
        const result = (obj.street || "_") +","+(obj.house || "_")+","+(obj.society || "_");
  
        return result;
    }
  }
  
  