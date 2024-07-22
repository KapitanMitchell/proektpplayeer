

const username = localStorage.getItem('username')
document.querySelector('.username').textContent = username

document.querySelector('.inform').addEventListener('click', function() {
    document.querySelector('.info_panel').classList.toggle('show');
});





const clockContainer = document.querySelector('.clock-container');
const hourElement = document.querySelector('#hour');
const minuteElement = document.querySelector('#minute');

function updateTime() {
  const kyivTime = new Date().toLocaleString('en-US', {
    timeZone: 'Europe/Kiev',
    hour: '2-digit',
    minute: '2-digit'
  });
  const [hour, minute] = kyivTime.split(':');
  hourElement.textContent = hour;
  minuteElement.textContent = minute;
}

setInterval(updateTime, 1000);








