function getDayName(actualDay) {
    var day = [
        "Domingo",
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado"
    ];
    return day[actualDay];
}

function setDate() {
    var weekDay = document.getElementById("weekDay");
    weekDay.innerText = getDayName(actualData.getDay());
}

var actualData = new Date();
window.onload = setDate();
