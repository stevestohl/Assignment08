// CREATE AN ARRAY OF EMPLOYEES
let employees = []
// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem("employees")) {
    employees = JSON.parse(localStorage.getItem("employees"))
} else {
employees = [
    [11111111, "Tara Misu", 1234, "Misu@peoplepc.com", "Administrative"],
    [22222222, "Carrie O'Key", 5678, "Carrie@aol.com", "Engineering"],
    [33333333, "Ella Vator", 2468, "Ella@fake.com", "Executive"],
    [44444444, "Sue Flay", 1359, "Sue@britishbakeoff.com", "Marketing"],
    [55555555, "Eileen Sideways", 4562, "Eileen@fake.com", "Sales"]
]
    localStorage.setItem("employees", JSON.stringify(employees))
}

// ADD EMPLOYEE
document.getElementById("addForm").addEventListener("submit",function(event) {
    // PREVENT FORM SUBMISSION
    event.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    const employeeId = document.getElementById("id").value
    const name = document.getElementById("name").value
    const ext = document.getElementById("extension").value
    const email = document.getElementById("email").value
    const dep = document.getElementById("department").value
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = [employeeId, name, ext, email, dep]
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee)
    // BUILD THE GRID
    buildGrid()
    // Save to Storage
    localStorage.setItem("employees", JSON.stringify(employees))
    // RESET THE FORM
    document.getElementById("addForm").reset()
    document.getElementById("id").focus()
})
    // SET FOCUS BACK TO THE ID TEXT BOX

// DELETE EMPLOYEE
document.querySelector("tbody").addEventListener("click", function(e) {
    // CONFIRM THE DELETE
    if(!confirm("Are you sure you want to delete this employee?"))
        return        
    // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
    const row = e.target.parentNode.parentNode
    const index = row.rowIndex -1 
    // REMOVE EMPLOYEE FROM ARRAY
    employees.splice(index,1)
    // BUILD THE GRID
    buildGrid()
    // Save to storage
    localStorage.setItem("employees", JSON.stringify(employees))
})


// BUILD THE EMPLOYEES GRID
function buildGrid () {
    const tbody = document.querySelector("tbody")
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    tbody.innerHTML = ""
    // REBUILD THE TBODY FROM SCRATCH
    for (emp of employees) {
        let row = document.createElement("tr")
    // REBUILDING THE ROW STRUCTURE
        row.innerHTML = `
            <td>${emp[0]}</td>
            <td>${emp[1]}</td>        
            <td>${emp[2]}</td>        
            <td>${emp[3]}</td>
            <td>${emp[4]}</td>
            <td><button class="btn btn-danger btn-sm delete">X</button></td>
            `
            tbody.appendChild(row)
    }
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem("employees", JSON.stringify(employees))
}

buildGrid()