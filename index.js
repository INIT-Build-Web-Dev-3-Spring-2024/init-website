async function main() {
  const request = await fetch("https://jsonplaceholder.org/users/1");
  const response = await request.json();

  console.log(response);
}

main();
