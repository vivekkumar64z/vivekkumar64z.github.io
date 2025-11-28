function age() {
    const d = parseInt(document.getElementById("date").value);
    const m = parseInt(document.getElementById("month").value);
    const y = parseInt(document.getElementById("year").value);

    if (!d || !m || !y) {
        document.getElementById("age").innerHTML = "Please enter a valid date.";
        return;
    }

    const birthDate = new Date(y, m - 1, d);
    const today = new Date();

    let ageY = today.getFullYear() - birthDate.getFullYear();
    let ageM = today.getMonth() - birthDate.getMonth();
    let ageD = today.getDate() - birthDate.getDate();

    if (ageD < 0) {
        ageM--;
        ageD += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageM < 0) {
        ageY--;
        ageM += 12;
    }

    document.getElementById("age").innerHTML =
        `You are ${ageY} years, ${ageM} months, and ${ageD} days old.`;
}
