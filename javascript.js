function submitQuestion() {
    var question = document.getElementById('question').value;

    // Check if the input is not just whitespace
    if (question.trim()) {
        var questionsList = document.getElementById('questions-list');
        
        // Create a new paragraph element to hold the question
        var newQuestion = document.createElement('p');
        newQuestion.textContent = question;
        
        // Append the new question to the questions list
        questionsList.appendChild(newQuestion);
        
        // Clear the textarea after submission
        document.getElementById('question').value = ''; 
        
        // Alert the user
        alert("Namaste! Your question has been received."); 
        
        // Show a notification in Hindi with an emoji
        showNotification("नमस्ते, आपका सवाल प्राप्त हो गया है 😊.");
    } else {
        // Alert if the input is empty
        alert("Please enter a question."); 
    }
}

function submitComment() {
    var comment = document.getElementById('comment').value;

    // Check if the input is not just whitespace
    if (comment.trim()) {
        var commentsList = document.getElementById('comments-list');
        
        // Create a new paragraph element to hold the comment
        var newComment = document.createElement('p');
        newComment.textContent = comment;
        
        // Append the new comment to the comments list
        commentsList.appendChild(newComment);
        
        // Clear the textarea after submission
        document.getElementById('comment').value = ''; 
        
        // Alert the user
        alert("Namaste! Your comment has been received."); 
        
        // Show a notification in Hindi with an emoji
        showNotification("नमस्ते, आपकी टिप्पणी प्राप्त हो गई है 😊.");
    } else {
        // Alert if the input is empty
        alert("Please enter a comment."); 
    }
}

function showNotification(message) {
    var notification = document.getElementById('notification');
    
    // Set the notification message and make it visible
    notification.textContent = message;
    notification.style.display = 'block'; 
    
    // Hide the notification after 5 seconds
    setTimeout(function() {
        notification.style.display = 'none'; 
    }, 5000);
}
