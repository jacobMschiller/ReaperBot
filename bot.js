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
reapWhen(desiredTime)function getTime() { // This function gets the time that is currently on the timer.
 21   const bf = document.querySelector('#last-reap').textContent.split(' ');
 20   if (bf.length === 6) {
 19   ¦ return parseInt(bf[0], 10) * 3600 + parseInt(bf[2], 10) * 60 + parseInt(bf[4], 10);
 18   } else if (bf.length === 4) {
 17   ¦ return parseInt(bf[0], 10) * 60 + parseInt(bf[2], 10);
 16   }
 15   return parseInt(bf[0], 10);
 14 }
 13
 12 function reapWhen(numSeconds) { // This function clicks the 'reap' button when the timer reaches numSeconds.
 11   setInterval(()  => {
 10   ¦ const time = getTime();
  9   ¦ console.log('Time available: ' + time);
  8   ¦ if (time >= numSeconds && document.querySelector('#reap-button-container').style.display !== 'none') {
  7   ¦ ¦ document.querySelector('#reap-button').click();
  6   ¦ ¦ console.log('Click-Reaped!');
  5   ¦ }
  4   }, 5000);
  3 }
  2
  1 const desiredTime = 500 // Measured in seconds.
23  reapWhen(desiredTime)
