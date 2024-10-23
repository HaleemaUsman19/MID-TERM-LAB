// Fetch the project description from the text file
fetch('project1.txt')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text();
    })
    .then(data => {
        // Display the project description in the designated div
        document.getElementById('projectDescription').innerText = data;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        document.getElementById('projectDescription').innerText = 'Error loading description.';
    });