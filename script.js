// darkmode 

document.querySelector("#colorizer").onclick = function (e) {
    if (localStorage.getItem("theme") === null) {
        localStorage.setItem("theme", "dark");
        document.body.classList.add("night");
    } else {
        localStorage.removeItem("theme");
        document.body.classList.remove("night");
    };
    //e.preventDefault();
};


if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("night");
}
