function init() {
renderStudents();
  showSnippets();
  showHeadings();
  renderCategegories()
};
// Übung 1:
const students = [
    { name: "Max", age: 21 },
    { name: "Anna", age: 22 },
    { name: "Lisa", age: 20 },
  ];

function renderStudents() {
  document.getElementById("students").InnerHTML = `<tr>
        <th>Name</th>
        <th>Alter</th>
        </tr>";
    `
  for (let indexStudents = 0; indexStudents < students.length; indexStudents++) {
    document.getElementById("students").InnerHTML += `        
<tr>
    <td>${students[indexStudents].name}</td>
    <td>${students[indexStudents].age}</td>
</tr>        
`;
  }
}




// Übung 2:
const htmlSnippets = [
  "<p>- Dies ist ein Absatz</p>",
  "<div><strong>- Fetter Text</strong></div>",
  "<span>- Ein Text in einem span</span>",
];

function showSnippets(){
    document.getElementById("snippetDiv").innerHTML = ""
    for (let index = 0; index < htmlSnippets.length; index++) {
        
        document.getElementById("snippetDiv").innerHTML += htmlSnippets[index];
    }

}



// Übung 3:
const headings = [
  "- Test Überschrift (1)",
  "- Test Unterüberschrift (2)",
  "- Test Sektion (3)",
  "- Test Subsektion (4)",
];

function showHeadings(){
    document.getElementById("headingsContainer").innerHTML = ""
    for (let headingsIndex = 0; headingsIndex < headings.length; headingsIndex++) {
        document.getElementById("headingsContainer").innerHTML += `
        <h${headingsIndex+1}>${headings[headingsIndex]}</h${headingsIndex}>
        `
        
    }
}

// Übung 4:
const categories = [
  {
    category: "Früchte",
    subcategories: ["Äpfel", "Trauben", "Orangen"],
  },
  {
    category: "Gemüse",
    subcategories: ["Karotten", "Brokkoli", "Spinat"],
  },
  {
    category: "Getränke",
    subcategories: ["Wasser", "Saft", "Tee"],
  },
];

function renderCategegories(){
    document.getElementById("list").innerHTML = ""
for (let indexCategories = 0; indexCategories < categories.length; indexCategories++) {
    document.getElementById("list").innerHTML += `
    <ul id="listlist${indexCategories}">${categories[indexCategories].category}`

    for (let indexSubcategories = 0; indexSubcategories < categories[indexCategories].subcategories.length; indexSubcategories++) {
        document.getElementById("listlist"+[indexCategories]).innerHTML +=`
        <li>${categories[indexCategories].subcategories[indexSubcategories]}</li>
        `
        
    }

    
    
}
}
