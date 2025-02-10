document.addEventListener("DOMContentLoaded", function() {
    // Preload the sound and set the volume to 50% (down by 50%)
    let sound = new Audio('YAY.mp3'); // Load the 'YAY.mp3' audio file from the same directory
    sound.volume = 0.5; // Reduce the volume to 50% of the original volume (half the volume)

    // Tekstovi koji će se izmjenjivati na NO gumbu
    const noTexts = ["Pls?", "Nooo!", "Why?", "Try YES!", "C'mon!", "Don't press me!"];
    let noClickCount = 0;

    // Event listener za NO gumb
    document.querySelector(".NO").addEventListener("click", function() {
        let yesButton = document.querySelector(".YES");
        let noButton = document.querySelector(".NO");

        // Povećaj veličinu YES gumba
        let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = (currentSize * 1.5) + "px";
        yesButton.style.padding = "20px 40px";

        // Smanji veličinu NO gumba i promijeni tekst
        let newSize = parseFloat(window.getComputedStyle(noButton).fontSize);
        if (newSize < 10) {
            noButton.style.display = "none";
        } else {
            noButton.style.fontSize = (newSize * 0.8) + "px";
            noButton.style.padding = "10px 20px";
        }

        // Promijeni tekst NO gumba
        noButton.textContent = noTexts[noClickCount % noTexts.length]; // Rotiraj tekst
        noClickCount++;
    });

    // Event listener za YES gumb
    document.querySelector(".YES").addEventListener("click", function() {
        sound.play();

        // Sakrij YES i NO gumbe
        document.querySelector(".YES").style.display = "none";
        document.querySelector(".NO").style.display = "none";

        // Promijeni tekst naslova
        let heading = document.querySelector(".love");
        heading.textContent = "YEEEEY";

        // Prikaži GIF
        let gif = document.querySelector("img");
        gif.style.display = "block";
        gif.style.position = "fixed";
        gif.style.left = "50%";
        gif.style.top = "50%";
        gif.style.transform = "translate(-50%, -50%)";
        gif.style.width = "500px";
        gif.style.height = "500px";
    });
});
