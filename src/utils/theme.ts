export const setThemeInLocalStorage = (theme: string) => {
  if (theme === "dark") {
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    document.body.style.backgroundColor = "#1a202c";
  } else {
    localStorage.setItem("theme", "light");
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    document.body.style.backgroundColor = "#e9f0f1";
  }
};

export const getThemeFromLocalStorage = () => {
    return localStorage.getItem("theme");
};