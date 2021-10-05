async function postData(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) throw Error(response.status);

  return response.json();
};

postData('https://jsonplaceholder.typicode.com/posts', {
  test: 123
})
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

