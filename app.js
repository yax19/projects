// Initialize the stage variable to keep track of the current stage in the game
let stage = 0;

// Add an event listener to the start button to start the game when clicked
document.getElementById('startButton').addEventListener('click', startGame);

// Function to start the game
function startGame() {
    // Get the game section element and remove the 'hidden' class to display it
    const gameSection = document.getElementById('gameSection');
    gameSection.classList.remove('hidden');

    // Get the start button element and add the 'hidden' class to hide it
    document.getElementById('startButton').classList.add('hidden');

    // Call the updateStory function to update the story text and choices
    updateStory();
}

// Function to update the story text and choices based on the current stage
function updateStory() {
    // Get the story text, image, choice buttons, and message elements
    const storyText = document.getElementById('storyText');
    const storyImage = document.getElementById('storyImage');
    const choice1 = document.getElementById('choice1');
    const choice2 = document.getElementById('choice2');
    const message = document.getElementById('message');

    // Hide the message element
    message.classList.add('hidden');

    // Set the text content of the story text element to the current stage's text
    storyText.textContent = story[stage].text;

    // Set the src attribute of the story image element to the current stage's image
    storyImage.src = story[stage].image;

    // Set the alt attribute of the story image element to describe the stage
    storyImage.alt = `Stage ${stage + 1}`;

    // Add the 'visible' class to the story text element to display it
    storyText.classList.add('visible');

    // Set the text content of the choice buttons to the current stage's choices
    choice1.textContent = story[stage].choices[0];
    choice2.textContent = story[stage].choices[1];

    // Add event listeners to the choice buttons to handle the next stage
    choice1.onclick = () => nextStage(0);
    choice2.onclick = () => nextStage(1);
}

// Function to handle the next stage based on the player's choice
function nextStage(choiceIndex) {
    // Get the message element
    const message = document.getElementById('message');

    // Check if the chosen option is the losing choice
    if (choiceIndex === story[stage].loseChoice) {
        // Set the text content of the message element to the current stage's lose message
        message.textContent = story[stage].loseMessage;

        // Remove the 'hidden' class from the message element to display it
        message.classList.remove('hidden');

        // Reload the page after 5 seconds to restart the game
        setTimeout(() => {
            location.reload();
        }, 5000);
    } else {
        // Update the stage variable to the next stage
        stage = (stage + 1) % story.length;

        // Check if the player has completed all stages
        if (stage === 0) {
            // Set the text content of the message element to a congratulatory message
            message.textContent = "Congratulations! You completed the quest.";

            // Remove the 'hidden' class from the message element to display it
            message.classList.remove('hidden');

            // Reload the page after 3 seconds to restart the game
            setTimeout(() => {
                location.reload();
            }, 3000);
        } else {
            // Call the updateStory function to update the story text and choices
            updateStory();
        }
    }
}
