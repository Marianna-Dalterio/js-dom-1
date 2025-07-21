const accendiLamp = document.getElementById("accendi");
addEventListener(`click`,
    function () {
        this.document.getElementById("yellow_lamp").style.display = "block"
        this.document.getElementById("white_lamp").style.display = "none"
    }
)