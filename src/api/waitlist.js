// API endpoint for waitlist submissions
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const submitWaitlist = async (waitlistData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/waitlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(waitlistData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to submit waitlist');
    }

    return result;
  } catch (error) {
    throw error;
  }
};
