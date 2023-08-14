const menuEntries = document.querySelectorAll('#container ul li a');
const modifyMenu = [];

menuEntries.forEach(entry => {
    const text = entry.innerText.split('');
    const newStr = text.map((letter, idx) => {
        return `<span style="transition: text-shadow 20ms ${idx*30}ms ">${letter}</span>`;
    })
    modifyMenu.push(newStr);
});

menuEntries.forEach( (entry, idx) => {
    entry.innerHTML = modifyMenu[idx].join('');
});
