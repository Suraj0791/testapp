// lib/api.js

/**
 * Fetches quiz data from the API.
 * Uses AllOrigins to bypass CORS issues.
 *
 * @returns {Promise<Object>} The quiz data.
 */
export async function fetchQuizData() {
    const url = "https://api.jsonserve.com/Uw5CrX";
    const response = await fetch(
      "https://api.allorigins.win/get?url=" + encodeURIComponent(url)
    );
    const data = await response.json();
    const quizData = JSON.parse(data.contents);
  
    // Map each question's options to include the is_correct property.
    quizData.questions = quizData.questions.map((question) => ({
      ...question,
      answers: question.options
        ? question.options.map((option) => ({
            id: option.id,
            description: option.description,
            is_correct: option.is_correct,
          }))
        : [],
    }));
  
    return quizData;
  }
  