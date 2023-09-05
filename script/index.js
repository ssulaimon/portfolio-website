function openDrawer(){
    document.getElementsByClassName('drawer')[0].style.display = 'block';
}
function closeDrawer(){
    document.getElementsByClassName('drawer')[0].style.display = 'none';
}

function showTitle(){
    document.getElementById('title').style.opacity = '1';
    document.getElementById('my-tech').style.opacity = '1';

}
function expandFunction(btnId, experienceId){
    const id = document.getElementById(experienceId);
    let displayValue = window.getComputedStyle(id).display;
    if (displayValue == 'none'){
        id.style.display = 'block';
       setTimeout(function (){
        id.style.opacity = '1';
       }, 0)
        document.getElementById(btnId).innerHTML = 'Close';
    }else{
        id.style.opacity = '0';
       
        id.style.display = 'none';
        document.getElementById(btnId).innerHTML = 'My experience';
        
    }
}

