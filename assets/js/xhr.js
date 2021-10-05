const getData = (url) => fetch(url).then((res) => res.json()).then((res) => res.Search);

const search = 'Iron Man';
const searc2 = 'Batman';
const searc3 = 'Superman';

const ironMan = getData(`http://www.omdbapi.com/?i=tt3896198&apikey=7830ce2b&s=${search}`);
const battMan = getData(`http://www.omdbapi.com/?i=tt3896198&apikey=7830ce2b&s=${searc2}`);
const suprMan = getData(`http://www.omdbapi.com/?i=tt3896198&apikey=7830ce2b&s=${searc3}`);

Promise.race([ironMan, battMan, suprMan]).then((res) => res.forEach((el) => console.log(el)));