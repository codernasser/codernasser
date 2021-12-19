let codes = document.getElementById("codes");
let paly = document.getElementById("paly");
let remove = document.getElementById("remove");
let result = document.getElementById("result");

paly.onclick = ()=>{
 result.innerHTML = codes.value;
 localStorage.setItem("RESULT" , codes.value);
};

remove.onclick = ()=>{
    result.innerHTML = "";
    codes.value = "";
}

onload = ()=>{
    codes.value = localStorage.getItem("RESULT");
}