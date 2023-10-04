document.addEventListener("DOMContentLoaded", function () {
    // Check if localStorage already contains registered users
    let users = JSON.parse(localStorage.getItem("registrations")) || [];
    
    // Function to generate a random 4-digit OTP
    function generateOTP() {
        return Math.floor(1000 + Math.random() * 9000);
    }
    
    // Function to add a new user row to the table
    function addUserRow(user) {
        const table = document.getElementById("userTable");
        const row = table.insertRow();
        row.insertCell().textContent = user.uniqueId;
        row.insertCell().textContent = user.name;
        row.insertCell().textContent = user.age;
        row.insertCell().textContent = user.fromStation;
        row.insertCell().textContent = user.toStation;
        row.insertCell().textContent = user.seatType;
        const otpCell = row.insertCell();
        otpCell.textContent = generateOTP();
        const btnCell = row.insertCell();
        const rejectButton = document.createElement("button");
        rejectButton.textContent = "Reject";
        rejectButton.style.color = "red";
        rejectButton.classList.add("reject-button");
        rejectButton.addEventListener("click", () => {
            table.deleteRow(row.rowIndex);
            // Remove the user from localStorage
            users = users.filter(u => u.uniqueId !== user.uniqueId);
            localStorage.setItem("registrations", JSON.stringify(users));
        });
        btnCell.appendChild(rejectButton);
        const confirmButton = document.createElement("button");
        confirmButton.textContent = "Confirm";
        confirmButton.style.color = "green";
        confirmButton.classList.add("confirm-button");
        confirmButton.addEventListener("click", () => {
            const enteredOTP = prompt("Enter OTP:");
            if (enteredOTP === otpCell.textContent) {
                alert(`${user.name} added to waiting list`);
                setTimeout(() => {
                    alert(`Booking ticket from ${user.fromStation} to ${user.toStation}`);
                }, 5000);
                setTimeout(() => {
                    alert(`Ticket booked for ${user.journeyDate}`);
                    // Remove the user from the table and updating the registrations list
                    table.deleteRow(row.rowIndex);
                   
                    //finding the booked users and sending the booked users to booked localStorage
                    let newBookedUser = users.filter(u => u.uniqueId === user.uniqueId);
                    console.log(newBookedUser);
                    let AllbookedUsers = JSON.parse(localStorage.getItem("booked")) || [];
                    AllbookedUsers.push(newBookedUser);
                    localStorage.setItem("booked", JSON.stringify(AllbookedUsers)); 
                    users = users.filter(u => u.uniqueId !== user.uniqueId);
                    console.log(users);                   
                    localStorage.setItem("registrations",JSON.stringify(users))                               
                }, 10000);
            } else {
                alert("Invalid OTP. User not confirmed.");
            }
        });
        btnCell.appendChild(confirmButton);
    }


    // Dom for filtering

    document.getElementById("filter").addEventListener('change', (e) => {
        filterUsers(e.target.value);
    })

    // Function to filter users by seat type
    function filterUsers(seatType) {
        const filteredUsers = users.filter(user => user.seatType === seatType);
        renderTable(filteredUsers);
    }

    
   // Dom for sorting
    document.getElementById("sorting").addEventListener('change',(e) => {
        myOption = e.target.value;

        if(myOption=='age'){
            sortUsersByAge();
        }
        else if(myOption=='date'){
            sortUsersByJourneyDate();
        }
    })

    // Function to sort users by age
    function sortUsersByAge() {
        users.sort((a, b) => a.age - b.age);
        renderTable(users);
    }

    // Function to sort users by journey date
    function sortUsersByJourneyDate() {
        users.sort((a, b) => new Date(a.journeyDate) - new Date(b.journeyDate));
        renderTable(users);
    }

    // Function to render the table with user data
    function renderTable(data) {
        const table = document.getElementById("userTable");
        // Clear existing table
        while (table.rows.length > 0) {
            table.deleteRow(0);
        }
        // Create table headers
        const headers = table.createTHead();
        const headerRow = headers.insertRow();
        headerRow.insertCell().textContent = "ID";
        headerRow.insertCell().textContent = "Name";
        headerRow.insertCell().textContent = "Age";
        headerRow.insertCell().textContent = "From Station";
        headerRow.insertCell().textContent = "To Station";
        headerRow.insertCell().textContent = "Seat Type";
        headerRow.insertCell().textContent = "OTP";
        headerRow.insertCell(); // Empty cell for Reject button & confirm button
      

        // Add user data to the table
        data.forEach(user => {
            addUserRow(user);
        });
    }

    // Initialize the table with user data
    renderTable(users);

   
})
