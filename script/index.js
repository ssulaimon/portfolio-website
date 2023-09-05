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
function expandFlutterExperience(){
    const id = document.getElementById('flutter-experience');
    let displayValue = window.getComputedStyle(id).display;
    if (displayValue == 'none'){
        id.style.display = 'block';
       setTimeout(function (){
        id.style.opacity = '1';
       }, 0)
        document.getElementById('flutter-btn').innerHTML = 'Close';
    }else{
        id.style.opacity = '0';
       
        id.style.display = 'none';
        document.getElementById('flutter-btn').innerHTML = 'My experience';
        
    }
}