function getTime() { // This function gets the time that is currently on the timer.
  const bf = document.querySelector('#last-reap').textContent.split(' ');
  if (bf.length === 6) {
    return parseInt(bf[0], 10) * 3600 + parseInt(bf[2], 10) * 60 + parseInt(bf[4], 10);
  } else if (bf.length === 4) {
    return parseInt(bf[0], 10) * 60 + parseInt(bf[2], 10);
  }
  return parseInt(bf[0], 10);
}

function reapWhen(numSeconds) { // This function clicks the 'reap' button when the timer reaches numSeconds.
  setInterval(()  => {
    const time = getTime();
    console.log('Time available: ' + time);
    if (time >= numSeconds && document.querySelector('#reap-button-container').style.display !== 'none') {
      document.querySelector('#reap-button').click();
      console.log('Click-Reaped!');
    }
  }, 5000);
}

const desiredTime = 500 // Measured in seconds.
reapWhen(desiredTime)
