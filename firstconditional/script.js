function checkAnswers() {
    const answers = {
        q1: 'rains',
        q2: 'will stay',
        q3: 'study',
        q4: 'will pass',
        q5: 'does not come',
        q6: 'will be',
        q7: 'invite',
        q8: 'will go',
        q9: 'do not hurry',
        q10: 'will miss',
        q11: 'find',
        q12: 'will let'
    };

    let feedback = '';
    for (const [key, value] of Object.entries(answers)) {
        const userAnswer = document.getElementById(key).value.trim();
        if (userAnswer.toLowerCase() === value.toLowerCase()) {
            feedback += `<p>${key} is correct!</p>`;
        } else {
            feedback += `<p>${key} is incorrect. The correct answer is "${value}".</p>`;
        }
    }

    document.getElementById('feedback').innerHTML = feedback;
}
