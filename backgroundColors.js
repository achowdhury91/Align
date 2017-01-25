const bodyEl = document.body;

// Data store that holds colors that have already been used
let storedColors = [];

/*
Function that generates a random number between
the arguments min and max, inclusive
*/
getRandomColor = (min, max) => {
  let newMin = Math.ceil(min);
  let newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1)) + newMin;
}

/*
Function that generates three random integers for RGB values,
checks to make sure that they are already not in the data store,
and then sets the background-color property of the body element
to the RGB value
*/
changeColor = () => {
  // Variables to hold our three RGB values
  let numOne = null;
  let numTwo = null;
  let numThree = null;

  // The stored ID representation of the RGB value that goes into
  // our color store
  let storedColorID = null;

  // The string representation of the RGB value that is set to
  // the background-color of the body element
  let newBgColor = null;

  do {
    numOne = getRandomColor(0, 255);
    numTwo = getRandomColor(0, 255);
    numThree = getRandomColor(0, 255);

    storedColorID = `${numOne}.${numTwo}.${numThree}`;
  } while (storedColors.includes(storedColorID));

  storedColors.push(storedColorID);

  newBgColor = `rgb(${numOne}, ${numTwo}, ${numThree})`;

  bodyEl.style.backgroundColor = newBgColor;
}

// Interval runs changeColor function every second
const setColor = setInterval(changeColor, 1000);

// Clears the interval after 10 seconds
setTimeout(function() {
  clearInterval(setColor);
}, 10000);
