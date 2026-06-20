const endDate = "22 june 2026 12:00 AM";

document.querySelector("#end-date").textContent = endDate;

const inputs = document.querySelectorAll("input");

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();

    const diff = (end - now) / 1000;
    if (diff < 0) return;

    // days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    // hrs
    inputs[1].value = Math.floor((diff / 3600) % 24);
    // mins
    inputs[2].value = Math.floor((diff / 60) % 60);
    // secs
    inputs[3].value = Math.floor(diff) % 60;
};
clock();

setInterval(() => {
    clock();
}, 1000);
