const bodySelector = document.querySelector('body');

const headerSelector = document.querySelector('header');

const footerSelector = document.querySelector('footer');

const toggleBackgroundButtonSelector = document.querySelector('button');

const weatherSelector = document.querySelector('.weather');

const elements = [headerSelector, footerSelector];

const imageSelector = document.querySelector('img')

const underlineSelector = document.querySelector('.underline')

const ulahover = document.querySelector('.ul a:hover')

const COLORS = {
    blue: '#4267b',
    yellow: '#C7900A'
}

toggleBackgroundButtonSelector.addEventListener('click', () => {
    if (bodySelector.classList.contains('background-white')) {
        bodySelector.classList.replace('background-white', 'background-dark');
        weatherSelector.setAttribute('style', `border: 0.5rem solid ${COLORS.yellow}`);
        imageSelector.setAttribute('style', `box-shadow: 0.5rem 0.5rem 0.5rem 0.5rem ${COLORS.yellow}`);
        toggleBackgroundButtonSelector.setAttribute('style',`background-color: ${COLORS.yellow}`);
        underlineSelector.array.forEach(element => {element.setAttribute('style', `background-color: ${COLORS.yellow}`);
        footerSelector.setAttribute('style', `color: ${COLORS.yellow}`);
        ulahover.setAttribute('style',`background-color: ${COLORS.yellow}` );

        });


    } else {
        bodySelector.classList.replace('background-dark', 'background-white');
        weatherSelector.setAttribute('style', `border: 0.5rem solid ${COLORS.blue};`);
        imageSelector.setAttribute('style', `box-shadow: 0.5rem 0.5rem 0.5rem 0.5rem ${COLORS.blue};`);
        toggleBackgroundButtonSelector.setAttribute('style',`background-color: ${COLORS.blue}`);
        underlineSelector.array.forEach(element => {element.setAttribute('style', `background-color: ${COLORS.blue}`);
        footerSelector.setAttribute('style', `color: ${COLORS.blue}`);
        ulahover.setAttribute('style', `background-color: ${COLORS.blue}`);    
        });
    }
});

fetch('http://api.openweathermap.org/data/2.5/weather?q=Warsaw,pl&APPID=a9d7c891178a4fcf66448f723467b291')
.then(response => response.json())
.then(data => weatherSelector.innerHTML=`<div class="weather-conditions">Weather in ${data.name} (${data.sys.country}) on ${myDateFunction(data.dt)} is: 
<br><br>
<span>Temperature: ${Number.parseInt(data.main.temp)-273}<temperatura>&#8451;</span><span>Pressure: ${data.main.pressure}<cisnienie>kPa</span></span></div>`);
const myDateFunction = function(data) {
    const objectDate = new Date(data*1000);
    const dzien = ['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday', 'Sunday'];
    const miesiac = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septemeber', 'November', 'December'];
    
    const endingFunction = function() {
    let parameter = Number.parseInt(objectDate.getDate()%10);
     switch(parameter){
        case 1: return "st"; 
        case 2: return "nd"; 
        case 3: return "rd"; 
        default: return "th";     
    } 
}
    return `${dzien[objectDate.getDay()-1]} ${objectDate.getDate()}${endingFunction()} of ${miesiac[objectDate.getMonth()]} ${objectDate.getFullYear()}`;
}
