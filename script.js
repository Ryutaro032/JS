let lists=document.getElementsByClassName('pull-down-list');
console.log(lists);
/*const pullDownButton=document.getElementById("lists");
console.log(pullDownButton);*/
window.addEventListener('click',function(){
    const pullDownButton=this.document.getElementById("lists");
    console.log(pullDownButton);
});