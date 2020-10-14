
console.log("THIS IS WHERE THE MAGIC HAPPENS")
const navTrick = document.querySelector('grr');

var displayDate = new Date();
var hours = displayDate.getHours();
var message;

if(hours < 10){
   message = 'Good Morning, I hope your day has started great';
}else if (hours <20){
   message = 'Good Day, please dont forget to eat lunch. I recommend Primos Hoagies';
}else {
   message = 'Good Evening, make sure you brush your teeth before bed.';
};
console.log(message);
// window.addEventListener('click', () => {
//    console.log(message);
// })
//
// navTrick.addEventListener('mouseover', () =>{
//    console.log(navTrick);
// });
// expanding icon //
