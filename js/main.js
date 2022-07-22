if (window.location.pathname !== "/") {
    window.location.replace("/");
} else {
    let scrollButton = document.getElementById("scrollButton");
    let copyright = document.getElementById("copyright");
    scrollButton.onclick = function () {
        window.scrollTo(0, window.innerHeight);
    };
    copyright.innerHTML += `${new Date().getFullYear()}`;
}

if (window.matchMedia) {
    enableDarkTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
    window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (event) => {
            enableDarkTheme(event.matches);
        });
}

function enableDarkTheme(enable = false) {
    const body = document.body;
    body.style.backgroundColor = enable ? "#101010" : "#ffffff";
    body.style.color = enable ? "#f0f8ff" : "#101010";
}
