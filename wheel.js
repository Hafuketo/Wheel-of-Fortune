// Immediately invoked function expression
// to not pollute the global scope
(function() {
   const wheel = document.querySelector('.wheel');
   const startButton = document.querySelector('.spin');
   let deg = 0;
   let x = 1024; //min value
	let y = 9999; // max value

   startButton.addEventListener('click', () => {
      startButton.style.pointerEvents = 'none';
      deg = Math.floor(Math.random() * (x - y)) + y;
      wheel.style.transition = 'all 5s ease-out';
      wheel.style.transform = `rotate(${deg}deg)`;
      wheel.classList.add('blur');
      startButton.classList.add('darken');
   });

   wheel.addEventListener('transitionend', () => {
      wheel.classList.remove('blur');
      startButton.classList.remove('darken');
      startButton.style.pointerEvents = 'auto';
      wheel.style.transition = 'none';
      const actualDeg = deg % 360;
      wheel.style.transform = `rotate(${actualDeg}deg)`;
      console.log("deg: " + deg);
      console.log("actual deg: " + actualDeg); 
   });

   

})();
