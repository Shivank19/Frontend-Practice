const form = document.getElementById("BasicInfo");
const pa = document.getElementById("pa");
const ma = document.getElementById("ma");
const errorElement = document.getElementById("error");

function onSubmit(){
    // e.preventDefault();

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const dob = document.getElementById("dob").value;
    const email = document.getElementById("email").value;
    const mob = document.getElementById("mob").value;
    const addr = document.getElementById("add").value;
    const polno = document.getElementById("polno").value;
    const materm = document.getElementById("materm").value;

    localStorage.setItem("fname", fname);
    localStorage.setItem("lname", lname);
    localStorage.setItem("dob", dob);
    localStorage.setItem("email", email);
    localStorage.setItem("mob", mob);
    localStorage.setItem("addr", addr);
    localStorage.setItem("polno", polno);
    localStorage.setItem("pa", pa.value);
    localStorage.setItem("ma", ma.value);
    localStorage.setItem("materm", materm);

    let messages = []

    if (pa.value > ma.value) {
        // e.preventDefault()
        messages.push('Annual Premium Amount cannot be greater than Maturity Amount');
    }

    return;
}

