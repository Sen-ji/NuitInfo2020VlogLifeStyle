let now = new Date();
document.getElementById("date").value = (now.getMonth() + 1) + "/" + now.getDay() + "/" + now.getFullYear();
document.getElementById("hourE").value = (now.getHours() + ":" + now.getMinutes());

function operation() {
    let begining = document.getElementById("hourE").value.split(":");
    let ending = document.getElementById("hourE").value.split(":");


    console.log(begining);


    let duration = [];
    duration[0] = (ending[0] + 24 - (begining[0]) % 24);
    duration[1] = (((ending[1] - begining[1]) + 60) % 60);
    if (ending[1] - begining[1] < 0) {
        duration[0]-=1;
    }

    document.getElementById("operation").innerHTML = duration[0] + ":" + duration[1];
}

// TODO faire en sorte que l'heure de fin ne soit pas avant heure de début