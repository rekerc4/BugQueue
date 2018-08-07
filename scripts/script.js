"use strict"; 

window.onload = function(){

let arr = [];

console.log(arr);
let i = 1; 
document.getElementById("enter").addEventListener("click", function(){
    
    let name = document.getElementById("submit-name").value;
    let text = document.getElementById("submit-info").value;
    let date = new Date(); 
    let priority = document.getElementById("priority").value;
    let obj = {"name": text, "title": name, "timestamp": date, "priority": priority};
    let el = document.createElement("div");
    let element = `<span class="number">${i}</span><h3 class="bug-name">${name}</h3>
    <p class="bug-desc">${text}</p>
    <p class="bug-time">${date}</p class="">
    <p class"pri">${priority}</p>`;
    let bug = document.getElementById("bug");
   
    if(name === "" || text === ""){

    }
    else{
        
        if(priority === "low"){
            el.className = "low-prio";
        
                arr.unshift(obj);
                console.log(arr);
                el.innerHTML = element;
                document.getElementById("bug").appendChild(el);
                i++
                return; 

        }
        else if(priority === "medium"){
           let fired = false; 
            for(let j = 0; j < arr.length; j++){
                console.log(arr.length);
                if(arr[j].priority === "high"){
                    arr.splice(j, 0, obj);
                    fired = true;
                    break; 
                }
            }
            
            if(!fired){
                arr.push(obj);
            }  
            
            for(let y = 0; y <  bug.children.length; y++){
                console.log(bug.children[y].classList.contains('low-prio'));
                if(bug.children[y].classList.contains('low-prio')){
                   
                    el.className = "med-prio";
                    el.innerHTML = element;
                    bug.insertBefore(el, bug.children[y]);
                    console.log(bug.children[y]);
                    console.log(arr);
                    i++
                    return;
                   
                }

            }        
                    
            el.className = "med-prio";
           
            el.innerHTML = element;
            document.getElementById("bug").appendChild(el);
            console.log(arr);
            i++
          
            return;
        }
        else if(priority === "high"){
            el.className = "high-prio";
            arr.push(obj);
            el.innerHTML = element;
            bug.insertBefore(el, bug.children[0]);
            i++
            return;
        }
        else{
            console.log("error writing");
            return; 
        }
    }



});

let f = () => {
    document.getElementById("bug").removeChild(bug.childNodes[1]);
}

document.getElementById("dismiss").addEventListener("click", function(){
    let bug = document.getElementById("bug");
    if(bug.childNodes[1].classList.contains('low-prio')){
        arr.shift();
    }
    else if(bug.childNodes[1].classList.contains('med-prio')){
        for(let i = 0; i < arr.length; i++){
            if(arr[i].priority === "high"){
                arr.splice(i - 1, 1);
                f();
                return; 
            }
        }
        arr.pop();
    }
    else if(bug.childNodes[1].classList.contains('high-prio')){
        arr.pop();
    }
    else{
        console.log("error deleting"); 
    }
        f();
});











}