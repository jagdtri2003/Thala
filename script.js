function processNumber() {
    const input = document.getElementById('val').value;
  
    if (!isNaN(input) && input !== '') { // Check if it's a number and not empty
      let digits = input.split('').map(Number); // Convert input string to an array of digits
  
      let sum = digits.reduce((acc, num) => acc + num, 0); // Calculate the sum of the digits
  
      let resultString = `${input} = `;
      if (sum < 7) {
        let difference = 7 - sum;
        resultString += digits.join('+') + `+${difference}=7`;
      } 
      else if(sum===7){
        // 
      }
      else {
        let difference = sum - 7;
        resultString += digits.join('+') + `-${difference}=7`;
      }
  
      document.getElementById("result").textContent = resultString+" THALA for a Reason !";
      let video = document.getElementById('videoPlayer');
      video.style.display = 'block';
      video.style.alignSelf='center';
      video.play();
    } else {
      document.getElementById("result").textContent = "Please enter a valid number";
    }
  }
  