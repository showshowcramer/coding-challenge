const getRandomInt = (max: number) => Math.floor(Math.random() * max);

const generatePassword = () => {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  const length = getRandomInt(20);
  let password = '';

  for (let i = 0; i < length; i++) {
    password += characters.charAt(getRandomInt(characters.length));
  }

  return password;
}
