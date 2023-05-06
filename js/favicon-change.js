let favicon;
let advice;

// This function sets up the favicon icon
// it takes in a URL to a teachable machine model,
// so we can retrieve the labels of our classes for the bars
export async function setupFavicon() {
    favicon = document.getElementById("favicon");
    advice = document.getElementById("advice");
}

// This function takes data (retrieved in the model.js file)
// The data is in the form of an array of objects like this:
// [{ className:class1, probability:0.75 }, { className:class2, probability:0.25 }, ... ]
// it uses this data to update the progress and labels of of each bar in the graph
export function updateFavicon(data) {
    // iterate through each element in the data
    var good_posture = false;
    data.forEach(({ className, probability }) => {
        if (className === "Good Posture" && probability > 0.5) {
            good_posture = true;
            advice.innerHTML = "Advice: Nice posture! Keep it up!";
            // set the favicon icon to be green
            favicon.setAttribute("href", "https://cdn.glitch.global/8fdd825f-ed52-4f9e-b1fc-206c40603156/shrimp4.png?v=1681936633174");
        }
        if (!good_posture) {
          if (className === "Leaning to the Side" && probability > 0.5) {
            advice.innerHTML = "Advice: You're leaning to the side - try to center yourself";
          }
          if (className === "Leaning Forward/Hunched Over" && probability > 0.5) {
            advice.innerHTML = "Advice: You're leaning too far forward, try lining up your back with the back of your seat";
          }
          if (className === "Leaning Backward" && probability > 0.5) {
            advice.innerHTML = "Advice: You're leaning backwards, try to sit squarely to your device";
          }
          if (className === "Sitting Incorrectly" && probability > 0.5) {
            advice.innerHTML = "Advice: Make sure you are sitting correctly with your feet flat on the ground";
          }
          // set the favicon icon to be red
          favicon.setAttribute("href", "https://cdn.glitch.global/8fdd825f-ed52-4f9e-b1fc-206c40603156/shrimp6.png?v=1681936638255");
        } 
    })
  return advice;
}

