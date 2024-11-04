let todo=document.querySelector('#push').onclick =function(){
    if(document.querySelector('#newTask input').value.length==0){
        alert("enter a task")
    }
    else{
        document.querySelector('#task').innerHTML+=`<div class="tasks">
        <input type="checkbox" class="check">
        <span id="taskname" >${document.querySelector('#newTask input').value}</span>
        <button class="delete"><i class="fa-solid fa-trash"></i></button></div>`;
        
        let currentTask=document.querySelectorAll(".delete");
        for(let i=0;i<currentTask.length;i++){
            currentTask[i].onclick=function(){
                if(confirm("are you sure")){
                    this.parentNode.remove();
                    alert("delete successfully.");

                }
                else{
                    alert("not delete")
                }

            }
        }
        let task1=document.querySelectorAll(".tasks");
        for(let i=0; i<task1.length; i++){
            task1[i].onclick = function(){
                this.classList.toggle("finish");
            };
        }
        document.querySelector("#newTask input").value="";
    }
}