import flatpickr from 'flatpickr';
import '../../node_modules/flatpickr/dist/flatpickr.min.css';

const inputArray = Array.from(document.querySelectorAll('input'));
const fp = () => {
  const today = new Date();

  flatpickr('#booking-date', {
    altInput: true,
    altFormat: 'F j, Y',
    dateFormat: 'Y-m-d',
    defaultDate: today,
    minDate: today,
  });
  flatpickr('#booking-time', {
    noCalendar: true,
    enableTime: true,
    dateFormat: 'H:i',
    time_24hr: false,
    defaultHour: today.getHours(),
  });
};

window.addEventListener('load', fp);

/*
document.querySelector('.ii').addEventListener('click', e => {
  console.log(e);
  document.querySelector('#booking-date').click();
});*/
