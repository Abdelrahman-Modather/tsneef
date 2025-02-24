const HTML = document.documentElement;
const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const lightBtn = document.querySelector('[data-theme-btn="light"]');
const darkBtn = document.querySelector('[data-theme-btn="dark"]');

if (sessionStorage.getItem("theme")) {
    HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
    HTML.dataset.theme = isDark ? "dark" : "light";
}

const updateButtons = () => {
    if (HTML.dataset.theme === "dark") {
        darkBtn.classList.add("active");
        lightBtn.classList.remove("active");
    } else {
        lightBtn.classList.add("active");
        darkBtn.classList.remove("active");
    }
};

const changeTheme = (theme) => {
    HTML.dataset.theme = theme;
    sessionStorage.setItem("theme", theme);
    updateButtons();
};

lightBtn.addEventListener("click", () => changeTheme("light"));
darkBtn.addEventListener("click", () => changeTheme("dark"));

updateButtons();
