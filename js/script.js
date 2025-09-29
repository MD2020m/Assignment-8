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