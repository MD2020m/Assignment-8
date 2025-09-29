// Create an object to track user responses in
let responses = {};

// Select each of the four question blocks in the html document
let questions = document.querySelectorAll(".question-container")
// Record id and select each answer choice for each question
questions.forEach(function(question) {
    let questionID = question.id;
    let answers = question.querySelectorAll("button")
    // Add an event listener to each answer choice
    answers.forEach(function(ans) {
        // Highlight selected answer and remove highlight from any unselected responses
        ans.addEventListener("click", function() {
            answers.forEach(function(btn) {
                btn.classList.remove("selected");
            })
        ans.classList.add("selected");
        // Record response to score later
        responses[questionID] = ans.dataset.answer;
        });
    });
});

// Define displayResult() function to process user responses and display the appropriate result
function displayResult() {

    // Declare and assign variables for each possible output
    incompleteText = "Please complete the quiz click 'Show Results' again";
    aragornText = "Maybe you're a rugged ranger suited for the northern wilds. Maybe you have the humility to reject a dangerous power or the loyalty to come to the aid of a friend. Or maybe you know the true king of Gondor is the heir of Isildur. You're Aragorn through and through.";
    boromirText = "You might be more suited to city life. Or maybe you believe power is more of a tool than a burden. Maybe you're just the right person for the job. Or maybe you just think you are. And maybe you know the time of kings in Gondor ended long ago. You're Boromir through and through.";
    tieText = "You're inscrutable. Maybe you prefer the solitude of the forest, but still seek power and glory. Maybe you understand where true power over Gondor lies. Maybe you're suited for the city, but would never betray a friend, no matter the reason. You're not quite Aragorn or Boromir. Perhaps you're more of a Faramir.";

    // Conditional logic to determine appropriate output
    if (Object.keys(responses).length < 4) {
        resultText.textContent = incompleteText;
    }
    else {
        // If quiz is completed declare and create arrays of "A" responses and "B" responses
        let respVals = Object.values(responses);
        let aResps = respVals.filter(function(response) {
            return response == "A";
        });
        let bResps = respVals.filter(function(response) {
            return response == "B";
        });
        
        // Conditional logic to determine whether there are more "A" responses, more "B" responses, or a tie
        // Outputs appropriate result for each outcome
        if (aResps.length > bResps.length) {
            resultText.textContent = aragornText;
        }
        else {
            if (bResps.length > aResps.length) {
                resultText.textContent = boromirText;
            }
            else {
                resultText.textContent = tieText;
            }
        }
    }

    // Remove 'display: none;' from result container's style prop in order to display results on page
    let resCont =  document.getElementById("result-container");
    resCont.style.display = "";
};

// Add event listener to the button and call displayResult()
showRes.addEventListener("click", function() {
    displayResult();
});