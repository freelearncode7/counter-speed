let listspan = document.querySelectorAll('#count-speeder');
const counter = [];
for (let i = 0; i < listspan.length; i++) {
    counter[i] = listspan[i].innerHTML;
    listspan[i].innerHTML = 0;
    setInterval(function(i) {
        value = parseInt(listspan[i].innerHTML) + 10;
        if (value <= counter[i]) {
            listspan[i].innerHTML = value;
        }
    }, 50, i)
}