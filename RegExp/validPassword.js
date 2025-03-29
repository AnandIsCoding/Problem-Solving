function isValidPassword(password) {
    //Your code goes here
    let regex = /.{8}/
    return regex.test(password)
  }