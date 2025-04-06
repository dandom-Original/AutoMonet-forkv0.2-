import axios from 'axios';

/**
 * Fetches user settings
 * @returns {Promise} User settings data
 */
export const fetchSettings = async () => {
  try {
    // In a production environment, this would call your backend API
    // For now, we'll simulate a delay and return mock data

    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 800));

    // Return mock settings data
    // Ensure all fields expected by the form are present
    return {
      profile: {
        name: 'AI Freelancer',
        email: 'ai@automonet.com',
        skillLevel: 'expert',
        hourlyRate: 75,
        specialties: ['React', 'Node.js', 'Python', 'Data Science', 'Machine Learning']
      },
      jobPreferences: {
        minBudget: 500,
        maxBudget: 5000,
        preferredKeywords: ['React', 'JavaScript', 'Python', 'Data Analysis', 'API Development'],
        excludedKeywords: ['WordPress', 'Shopify', 'Logo Design'],
        priorityScore: 7
      },
      aiSettings: {
        proposalStyle: 'professional',
        proposalLength: 'medium',
        useHighEndModels: true,
        modelName: 'gpt-4-turbo',
        fallbackModel: 'gpt-3.5-turbo',
        maxTokenBudget: 100000
      },
      platformSettings: {
        activeFreelancePlatforms: ['Upwork', 'Freelancer', 'Fiverr'],
        proposalsPerDay: 10,
        maxConcurrentJobs: 5
      },
      systemSettings: {
        runInterval: 30,
        notificationEmail: 'alerts@automonet.com',
        debugMode: false,
        dailyBudget: 5.00
      }
    };
  } catch (error) {
    console.error('Error fetching settings:', error);
    throw new Error('Failed to load settings');
  }
};

/**
 * Updates user settings
 * @param {Object} settings - Updated settings data
 * @returns {Promise} Success status
 */
export const updateSettings = async (settings) => {
  try {
    // In a production environment, this would call your backend API
    // For now, we'll simulate a delay and return success

    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1200));

    console.log('Settings updated:', settings);

    // Return success
    return { success: true };
  } catch (error) {
    console.error('Error updating settings:', error);
    throw new Error('Failed to update settings');
  }
};
