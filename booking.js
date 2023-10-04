
let bookedUser = JSON.parse(localStorage.getItem("booked")) || [];
console.log(bookedUser);


function fillData(bookedUser){
    document.querySelector("tbody").textContent = "";
    bookedUser.map((elem) => {
        console.log(elem)
        
        let tr = document.createElement("tr");
        
        let td1 = document.createElement("td");
        td1.textContent = elem.uniqueId;
        let td2 = document.createElement("td");
        td2.textContent = elem.name;
        let td3 = document.createElement("td");
        td3.textContent = elem.age;
        let td4 = document.createElement("td");
        td4.textContent = elem.fromStation;
        let td5 = document.createElement("td");
        td5.textContent = elem.toStation;
        let td6 = document.createElement("td");
        td6.textContent = elem.journeyDate;
        let td7 = document.createElement("td");
        td7.textContent = elem.seatType

        tr.append(td1,td2,td3,td4,td5,td6,td7);
        let body = document.querySelector("tbody");
        body.append(tr);

    })
}

fillData(bookedUser);


