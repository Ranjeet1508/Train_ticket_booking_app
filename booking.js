
let bookedUser = JSON.parse(localStorage.getItem("booked")) || [];
console.log(bookedUser);


function fillData(bookedUser){
    document.querySelector("tbody").textContent = "";
    bookedUser.map((elem) => {
        console.log(elem)
        let tr = document.createElement("tr");
        
        let td1 = document.createElement("td");
        td1.textContent = "Ranjeet";
        let td2 = document.createElement("td");
        td2.textContent = "Gautam";
        let td3 = document.createElement("td");
        td3.textContent = 25;
        let td4 = document.createElement("td");
        td4.textContent = "unnao";
        let td5 = document.createElement("td");
        td5.textContent = "bangalore";
        let td6 = document.createElement("td");
        td6.textContent = "Ac";

        tr.append(td1,td2,td3,td4,td5,td6);
        let body = document.querySelector("tbody");
        body.append(tr);

    })
}

fillData(bookedUser);


