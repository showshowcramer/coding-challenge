const names = ['Alice', 'Bob', 'Charlie'];

function getName() {
  const nameIndex = Math.floor(Math.random() * names.length);
  return names[nameIndex];
}

console.log(getName());
