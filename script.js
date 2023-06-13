function updateClock() {
    var now = new Date();
    var time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
    document.getElementById('clock').textContent = time;
    setTimeout(updateClock, 1000); // Update every second
  }
  
  updateClock();
  