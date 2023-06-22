function calculateAge() {
    var birthYearInput = document.getElementById("birth-year");
    var birthMonthInput = document.getElementById("birth-month");
    var birthDayInput = document.getElementById("birth-day");
    var resultDiv = document.getElementById("result");

    var birthYear = parseInt(birthYearInput.value);
    var birthMonth = parseInt(birthMonthInput.value) - 1;
    var birthDay = parseInt(birthDayInput.value);
    var today = new Date();
    var currentYear = today.getFullYear();
    var currentMonth = today.getMonth();
    var currentDay = today.getDate();

    if (isNaN(birthYear) || isNaN(birthMonth) || isNaN(birthDay)) {
        resultDiv.textContent = "Please enter a valid date.";
    } else {
        var age = currentYear - birthYear;
        var monthDiff = currentMonth - birthMonth;
        var dayDiff = currentDay - birthDay;

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
            monthDiff += 12;
            dayDiff += new Date(currentYear, currentMonth, 0).getDate();
        }

        resultDiv.textContent = "Your age is " + age + " years, " + monthDiff + " months, and " + dayDiff + " days.";
    }
}