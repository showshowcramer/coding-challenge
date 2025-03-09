const user = {
  name: 'John Doe',
  email: 'john@example.com',
  age: 30,
};

function getUserInfo(user: any) {
  return `Name: ${user.name}\nEmail: ${user.email}\nAge: ${user.age}`;
}

console.log(getUserInfo(user));
