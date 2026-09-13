const profile = document.getElementById("profile");

profile.src = config.profileImage;

document.getElementById("waBtn").href =
    config.whatsappLink;

document.getElementById("tgBtn").href =
    config.telegramLink;

let index = 0;

const members = 15472;

const active =
    Math.floor(
        Math.random() *
        (config.maxActive - config.minActive)
    ) + config.minActive;

document.getElementById("members").innerHTML =
    `👥 ${members.toLocaleString()} Members`;

document.getElementById("active").innerHTML =
    `🟢 ${active.toLocaleString()} Active`;
