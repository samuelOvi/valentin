// --- Modo Oscuro ---
const toggleDarkModeButton = document.getElementById('toggleDarkMode');
const body = document.body;
const sunIcon = '<i class="ri-sun-line"></i>';
const moonIcon = '<i class="ri-moon-line"></i>';

// Verificar el estado guardado del modo oscuro
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    toggleDarkModeButton.innerHTML = moonIcon;
}

toggleDarkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        toggleDarkModeButton.innerHTML = moonIcon;
    } else {
        localStorage.setItem('darkMode', 'disabled');
        toggleDarkModeButton.innerHTML = sunIcon;
    }
});

// --- Transición entre formularios sin recargar la página ---
document.getElementById("form1").addEventListener("submit", function (e) {
    e.preventDefault();
    const anniversaryDate = document.getElementById("anniversaryDate").value;

    if (anniversaryDate === "2025-01-25") {  // Ajusta la fecha correcta
        localStorage.setItem("anniversaryDate", anniversaryDate);
        document.getElementById("form1").classList.add("hidden");
        document.getElementById("form2").classList.remove("hidden");
    } else {
        document.getElementById("error1").classList.remove("hidden");
    }
});

document.getElementById("form2").addEventListener("submit", function (e) {
    e.preventDefault();
    const songAnswer = document.querySelector('input[name="song"]:checked')?.value;

    if (!songAnswer) {
        alert('Debes seleccionar una opción');
        return;
    }

    if (songAnswer === "bailame") {  // Ajusta la respuesta correcta
        localStorage.setItem("song", songAnswer);
        document.getElementById("form2").classList.add("hidden");
        document.getElementById("form3").classList.remove("hidden");
    } else {
        const errorMessage = document.getElementById("error2");
        if (songAnswer === "cafune") {
            errorMessage.textContent = "¡casi pero no, esa es nuestra cancion favorita nuemro 2!";
        } else if (songAnswer === "tuyo") {
            errorMessage.textContent = "¡cerca pero no!";
        }
        errorMessage.classList.remove("hidden");
    }
});

document.getElementById("form3").addEventListener("submit", function (e) {
    e.preventDefault();
    const placeAnswer = document.querySelector('input[name="place"]:checked')?.value;

    if (!placeAnswer) {
        alert('Debes seleccionar una opción');
        return;
    }

    if (placeAnswer === "segundaCasa") {  // Ajusta la respuesta correcta
        localStorage.setItem("place", placeAnswer);
        window.location.href = "dashboard.html";  // Redirección final
    } else {
        const errorMessage = document.getElementById("error3");
        if (placeAnswer === "perritos") {
            errorMessage.textContent = "¡Ese no es nuestro lugar favorito!";
        } else if (placeAnswer === "garageChilling") {
            errorMessage.textContent = "¡Ese tampoco!";
        } else if (placeAnswer === "chickenDay") {
            errorMessage.textContent = "¡ese es mi lugar favorito pero no el nuestro!";
        }
        errorMessage.classList.remove("hidden");
    }
});
