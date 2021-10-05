async function putData(url, data) {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) throw Error(response.status);

  return response.json();
}

putData('https://jsonplaceholder.typicode.com/posts/1', {
  title: 'Text title MY',
  body: 'body text'
})
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

