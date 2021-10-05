async function deleteData(url, data) {
  const response = await fetch(url, {
    method: 'DELETE',
    body: JSON.stringify(data)
  });

  if (!response.ok) throw Error(response.status);

  return response.json();
};

deleteData('https://jsonplaceholder.typicode.com/posts/1').then((res) => console.log(res))
  .catch((err) => console.log(err));

