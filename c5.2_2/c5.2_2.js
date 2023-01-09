const jsonString = `
{
  "list": [
   {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
   },
   {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
   }
  ]
 }`;

const data = JSON.parse(jsonString);
const JSONlist = data.list;

let list = [];

JSONlist.forEach(worker => {
  const name = worker.name;
  const age = worker.age;
  const prof = worker.prof;
  list.push({
      name : name,
      age : Number(age),
      prof : prof,
    });
});

const ourWorkers = {list};
console.log(ourWorkers)
