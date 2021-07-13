var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0.0;

function setTime() {
    if (totalSeconds < 273) {
        ++totalSeconds;
        secondsLabel.innerHTML = pad(totalSeconds % 60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    }
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}

function rec() {
    navigator.mediaDevices.getUserMedia({
            audio: true
        })

        .then(stream => {

            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start();
            setInterval(setTime, 1000);

            document.getElementById("button").onclick = null;
            document.getElementById("button").innerHTML = "Reproduzindo. Preste atenção, você consegue escutar?";
            document.getElementById("warning").innerHTML = "";

            const audioChunks = [];
            mediaRecorder.addEventListener("dataavailable", event => {
                audioChunks.push(event.data);

            });

            mediaRecorder.addEventListener("stop", () => {
                const audioBlob = new Blob(audioChunks, {
                    'type': 'audio/webm'
                });

                const audioUrl = URL.createObjectURL(audioBlob);

                const audio = new Audio(audioUrl);

                var sobre = document.createElement("BUTTON");
                sobre.innerHTML = '<p><a href="Sobre.html" target="_blank" class="button">Mais Informações</a></p>';
                document.getElementById("mainDiv").appendChild(sobre);


                if (confirm('Gostaria de baixar a apresentação?')) {
                    saveAs(audioUrl, "som.webm");
                }

                document.getElementById("button").remove();

            });

            setTimeout(() => {
                mediaRecorder.stop();
            }, 273000); //4 min 33 sec: 273000
        });
};