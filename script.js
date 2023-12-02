const form = document.getElementById('quizForm');
const submitButton = document.getElementById('submitButton');
const resultElement = document.getElementById('result');

submitButton.addEventListener('click', () => {
    const answers = {};

    for (const element of form.elements) {
        if (element.type === 'radio' && element.checked) {
            const questionId = element.name.substring(1);
            answers[questionId] = element.value;
        }
    }

    const personalityScores = {
        'Outdoorsy and adventurous': 0,
        'Relaxed and beachy': 0,
        'Cultural and historical': 0,
        'City-loving and cosmopolitan': 0,
        'Foodie and culinary enthusiast': 0
