const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = true;
    if (success) resolve("Data fetched");
    else reject("Data not fetched");
  }, 2000);
});

fetchData
  .then(result => console.log(result))
  .catch(error => console.log(error));
