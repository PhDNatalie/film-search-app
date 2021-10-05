async function patchData(url, data) {
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) throw Error(response.status);

  return response.json();
};

patchData('https://jsonplaceholder.typicode.com/posts/1', {
  body: 'body text'
})
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

