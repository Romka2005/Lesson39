// let spisok = document.querySelector("#spisok");
// let li = document.createElement("li");

// li.innerHTML = "4";
// spisok.appendChild(li);

// let spisok = document.querySelector("#spisok");
// for(a = 1; a <= 100; a++){
//     li = document.createElement("div");
//     li.innerHTML = a;
//     spisok.appendChild(li);
// }


// let div = document.querySelector("#div");
// for(a = 1; a <= 6; a++){
//     div_new = document.createElement("div");
//     div_new.innerHTML = a;
//     div.appendChild(div_new);
//     div_new.classList.add(`box_${a}`);
// }

let tl = gsap.timeline();

let table = document.querySelector("#table");
table.style.margin = "30px auto";

for(a = 1; a <= 4; a++){
    tr = document.createElement("tr");
    for(b = 1; b <= 6; b++){
        let td = document.createElement("td");
        td.style.width = "150px";
        td.style.height = "70px";
        td.style.borderRadius = "11px";
        td.style.background = "black";
        td.style.opacity = 0;
        td.style.color = "white";
        td.style.textAlign = "center";
        td.innerHTML = "";
        tr.appendChild(td);
        
    }
    table.appendChild(tr);
    tl.to("td", { y: 40, opacity: 1, duration: 0.5 })
      .to("td", { y: 70, opacity: 1, duration: .5 })
}

let td = document.querySelectorAll("td");
for (let c = 0; c < td.length; c++) {
    td[c].addEventListener("click", function Fant(){
        input = document.createElement("input");
        input.style.color = "white";
        input.style.width = "100%";
        input.style.height = "100%";
        input.style.background = "none";
        input.style.borderRadius = "11px";
        input.style.border = "2px solid red";
        input.style.padding = "5px";
        input.style.outline = "none";
        input.value = this.innerHTML;
        this.innerHTML = "";
        this.appendChild(input);

        new_el = this;
        input.addEventListener("blur", function(){
            new_el.innerHTML = this.value;
            new_el.addEventListener("click", Fant())
        })
        this.removeEventListener("click", Fant)
    })
}




