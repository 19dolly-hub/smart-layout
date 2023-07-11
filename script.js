let tabOne = document.getElementById('tab-one');
let tabTwo = document.getElementById('tab-two');
let homeContent = document.getElementById('home-content');
let factContent = document.getElementById('fact-content');

function tabOneOn(){
    tabOne.classList.add('tab-active');
    tabTwo.classList.remove('tab-active');

    homeContent.style.display = 'block';
    factContent.style.display = 'none';
}
function tabTwoOn(){
    tabOne.classList.remove('tab-active');
    tabTwo.classList.add('tab-active');

    homeContent.style.display = 'none';
    factContent.style.display = "block";
}

tabOne.addEventListener('click', tabOneOn);
tabTwo.addEventListener('click', tabTwoOn);
