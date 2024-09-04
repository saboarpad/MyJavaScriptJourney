// set init count
let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

//console.log(btns);
//nodelist!
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        // handle counts
        if (styles.contains("decrease")) {
            count--;
        }
        else if (styles.contains("increase")) {
            count++;
        }
        else {
            count = 0;
        }
        // update DOM count
        value.textContent = count;

        
        // handle styles
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red"
        }
        if (count === 0) {
            value.style.color = "black"
        }
    })

});