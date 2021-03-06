function howManyDays(date1, date2) {
    // round to the nearest whole number
    return Math.round((date2 - date1) / (1000 * 60 * 60 * 24));
}
var numOfdays = howManyDays(new Date('January 12, 2020'), new Date());

document.querySelector(".days").textContent = `${ numOfdays }`;

let hours = Math.round(Math.abs(new Date('January 12, 2020') - new Date()) / 36e5);

document.querySelector(".working-hours").textContent = `${ hours }`;