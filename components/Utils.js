// Utils.js
export const fetchDataFromServer = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8080');
      const data = await response.json(); // Expecting a JSON response
      return data;
    } catch (error) {
      console.error('Error querying server:', error);
      throw error;
    }
  };