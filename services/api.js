export const fetchQuizData = async () => {
    const response = await fetch('https://api.isonserve.com/Liv5CrX');
    if (!response.ok) {
      throw new Error('Failed to fetch quiz data');
    }
    return response.json();
  };