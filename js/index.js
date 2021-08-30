function ageInDays(){
    var year = prompt("Enter your year of birth!"); 
    var agedays = (2021 - year) * 365;
    var h2 = document.createElement('h2');
    var ans = document.createTextNode(`You are ${agedays} days old.`);
    h2.setAttribute('id', 'days');
    h2.appendChild(ans);
    document.getElementById('container-result').appendChild(h2);
}

function reset(){
    document.getElementById('container-result').remove();
}