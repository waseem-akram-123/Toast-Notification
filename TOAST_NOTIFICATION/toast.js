let successMsg ='<i class="fa-solid fa-circle-check"></i> Succesfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error !';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';

let toastBox = document.querySelector (".toast-box");

let btn1 = document.querySelector ("#one");
let btn2 = document.querySelector ("#two");
let btn3 = document.querySelector ("#three");

function showToast (msg){
    let toast = document.createElement ("div");
    toast.classList.add ("toast");
    toast.innerHTML = msg;
    toastBox.appendChild (toast);

    if (msg.includes('error')){
        toast.classList.add ("error");
    }
    if (msg.includes('Invalid')){
        toast.classList.add ("invalid");
    }
    setTimeout (()=>{
        toast.remove();
    },5000);

}
btn1.addEventListener ("click", ()=>{
    showToast (successMsg);
});
btn2.addEventListener ("click", ()=>{
    showToast (errorMsg);
});
btn3.addEventListener ("click", ()=>{
    showToast (invalidMsg);
});