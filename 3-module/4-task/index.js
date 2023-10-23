function showSalary(users, age) {
  // ваш код...
    
  let filtedUsers = users.filter(function(user) {
    return user.age <= age;
  });

  let userSalaryArr = filtedUsers.map(function(user) {
    return `${user.name}, ${user.balance}`;
  });

  return userSalaryArr.join('\n');
}
