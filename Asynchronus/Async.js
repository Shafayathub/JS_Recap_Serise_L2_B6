function getData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data retrieved");
    }, 2000);
  });
}

async function showData() {
  console.log("Data retrieval started...");
  const result = await getData();
  console.log(result); // Data retrieved
}

showData();