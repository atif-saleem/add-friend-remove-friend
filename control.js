let friend=document.querySelector("#friend");
let isstatus=document.querySelector('#stranger');
let check=0;
friend.addEventListener("click",function(){
    console.log("button Clicked");
    if(check==0){
        isstatus.innerHTML="Friends";
        isstatus.style.color="green";
        friend.innerHTML="Remove Friend";
        check=1;

    }
    else{
        isstatus.innerHTML="Stranger";
        isstatus.style.color="red";
        friend.innerHTML="Add Friend";
        check=0;

    }
})
