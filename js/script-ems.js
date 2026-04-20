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



// GET DOM ELEMENTS


// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS


// ADD EMPLOYEE

    // PREVENT FORM SUBMISSION

    // GET THE VALUES FROM THE TEXT BOXES

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY

    // BUILD THE GRID

    // RESET THE FORM

    // SET FOCUS BACK TO THE ID TEXT BOX



// DELETE EMPLOYEE

    // CONFIRM THE DELETE

        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)

        // REMOVE EMPLOYEE FROM ARRAY

        // BUILD THE GRID


// BUILD THE EMPLOYEES GRID
function buildGrid () {
    const tbody = document.querySelector("tbody")
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    tbody.innerHTML = ""
    // REBUILD THE TBODY FROM SCRATCH
    for (emp of employees) {
        let row = document.createElement("tr")

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

    localStorage.setItem("employees", JSON.stringify(employees))
}
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE

    // BIND THE TBODY TO THE EMPLOYEE TABLE

    // UPDATE EMPLOYEE COUNT

    // STORE THE ARRAY IN STORAGE

buildGrid()