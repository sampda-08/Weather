var inputvalue = document.querySelector('#cityinput')
var btn =  document.querySelector('#add')
var city =  document.querySelector('#cityoutput')
var descrip =  document.querySelector('#descrption')
var temp =  document.querySelector('#temp')
var wind =  document.querySelector('#wind')
apik ="f3b08bf07dd6f51257e67238173946fe"
function convertion(val)
{
 return (val - 273).toFixed(3)
}

btn.addEventListener('click',function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data =>
        {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var temprature = data['main']['temp']
            var wndspeed = data['wind']['speed']

            city.innerHTML=`weather of <span>${nameval}<span>`
            temp.innerHTML=`Temperature: <span>${convertion(temprature)} c<span>`
            description.innerHTML=`sky conditions : <span>${descrip}<span>`
            wind.innerHTML=`wind Speed: <span>${wndspeed} km/h<span>`
        }

    )
    .catch(err => alert('You entered Wrong city name'))
}
)

