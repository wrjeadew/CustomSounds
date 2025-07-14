let customBasicInterval = setInterval(() => {
    if (typeof(BAWK) === "undefined" || !BAWK.sounds || !Object.keys(BAWK.sounds)[0] || !BAWK.sounds[Object.keys(BAWK.sounds)[0]].buffer) return;
    clearInterval(customBasicInterval);
    BAWK.load("https://cdn.jsdelivr.net/gh/InfiniteSmasher/Legacy-Mode@latest/sounds1.json");
}, 250);
