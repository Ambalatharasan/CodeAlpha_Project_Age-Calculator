function Age() {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert("Please provide your day, month, and year of birth.");
        return;
    }
    if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > 2023) {
        alert("Please enter valid day (1-31), month (1-12), and year (1900-2023).");
        return;
    }
    const today = new Date();
    const birthdate = new Date(year, month - 1, day);
    let age = today.getFullYear() - birthdate.getFullYear();
    if (today.getMonth() < birthdate.getMonth() || 
        (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate())) {
        age--;
    }
    document.getElementById("result").innerHTML = "Your age is " + age;
}
