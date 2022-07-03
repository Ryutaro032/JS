function pullDown(){
    const pullDownButton=document.getElementById("lists");
    const pullDownParents=document.getElementById("pull-down");
    const pullDownChild=document.querySelectorAll(".pull-down-list");
    const currentList=document.getElementById("current-list");
    const onClick1=document.getElementById("onClick1");
    const onClick2=document.getElementById("onClick2");
    const onClick3=document.getElementById("onClick3");

        pullDownButton.addEventListener("mouseover",function(){
            this.setAttribute('style','background-color:blue;');
        });
        pullDownButton.addEventListener('mouseout',function(){
            this.removeAttribute('style','background-color:red;');
        });
        pullDownButton.addEventListener('click',function(){
            if(pullDownParents.getAttribute("style")=="display:block;"){
                pullDownParents.removeAttribute("style","display:block;");
                console.log("非表示");
            }else{
                pullDownParents.setAttribute("style","display:block;");
                console.log("表示");
            };
        });
        pullDownChild.forEach(function (list){
            list.addEventListener("click",function(){
                const value=list.innerHTML;
                currentList.innerHTML=value;
                console.log(value);
                if(onClick1===list){
                    location.href="https://ossanrental.thebase.in/";
                }else if(onClick2===list){
                    location.href="https://myoji-yurai.net/rareName2021.htm";
                }else if(onClick3===list){
                    location.href="https://heeeeeeeey.com/";
                }else{
                    location.href="https://puginarug.com/";
                }
            });
        });
}

window.addEventListener("load",pullDown);