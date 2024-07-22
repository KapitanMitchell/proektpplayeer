function calculateResult() {
  const form = document.getElementById('quiz-form');
  const resultDiv = document.getElementById('result');
  let score = 0;
  const totalQuestions = 5;

  for (let i = 1; i <= totalQuestions; i++) {
      const question = form['q' + i];
      if (question.value === '1') {
          score++;
      }
  }

  let resultText;
  if (score === 2) {
      resultText = 'Ви не особливо цікавитеся музикою.';
  } else if (score === 4) {
      resultText = 'Ви любитель музики.';
  } else if (score === 5) {
      resultText = 'Ви меломан!';
  } else {
      resultText = 'Ваш результат: ' + score + ' правильних відповідей.';
  }
  
  resultDiv.textContent = resultText;
}



