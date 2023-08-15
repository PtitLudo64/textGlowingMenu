const menuEntries = document.querySelectorAll('#container ul li a');
const modifyMenu = [];

menuEntries.forEach(entry => {
    const text = entry.innerText.split('');
    const newStr = text.map((letter, idx) => {
<<<<<<< HEAD
        return `<span style="transition: text-shadow 20ms ${idx*30}ms ">${letter}</span>`;
    })
=======
        return `<span style="transition: text-shadow 20ms ${idx*20}ms ">${letter}</span>`;
    });
>>>>>>> f2ffca8 (Fine tuning)
    modifyMenu.push(newStr);
});

menuEntries.forEach( (entry, idx) => {
    entry.innerHTML = modifyMenu[idx].join('');
<<<<<<< HEAD
});
=======
});
>>>>>>> f2ffca8 (Fine tuning)
