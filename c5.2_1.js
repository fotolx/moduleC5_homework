const parser = new DOMParser();
const xmlList = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const xmlDOM = parser.parseFromString(xmlList, "text/xml");

const studentNode = xmlDOM.querySelectorAll("student");

let list = [];

studentNode.forEach(student => {
  const name_ = student.querySelector("name");
  const firstName = name_.querySelector('first').textContent;
  const secondName = name_.querySelector('second').textContent;
  const age = student.querySelector("age").textContent;
  const langAttr = name_.getAttribute('lang');
  const prof = student.querySelector("prof").textContent;
  list.push({
      name : firstName+' '+secondName,
      age : Number(age),
      prof : prof,
      lang : langAttr,
    });
});

const ourStudents = {list};
console.log(ourStudents)
