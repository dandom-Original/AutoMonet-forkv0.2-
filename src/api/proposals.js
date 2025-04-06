// API functions for proposal management
import { supabase } from '../integrations/supabase';

/**
 * Fetch proposals with optional filtering
 * @param {Object} filters - Query filters
 * @returns {Promise<Object>} Proposals data
 */
export const getProposals = async (filters = {}) => {
  try {
    // Simulate API call delay (for development)
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Default mock data for development
    return {
      proposals: [
        {
          id: 'prop1',
          job: {
            id: 'job1',
            title: 'Senior React Developer Needed for Fintech Project',
            platform: 'Upwork'
          },
          content: "I'm a senior React developer with extensive experience in fintech applications. I've successfully delivered over 15 similar projects with outstanding results. My approach focuses on clean architecture, performance optimization, and seamless user experience. I'm particularly interested in your fintech platform because it aligns with my expertise in secure financial transactions and responsive UI design.",
          status: 'submitted',
          type: 'premium',
          tactics_used: ['social_proof', 'expertise_highlighting', 'specific_relevance'],
          created_at: '2024-07-25T12:30:00Z',
          submitted_at: '2024-07-25T14:15:00Z',
          metadata: {
            model_used: 'openai/gpt-4o:latest',
            generation_time: 3.2,
            token_count: 420
          }
        },
        {
          id: 'prop2',
          job: {
            id: 'job2',
            title: 'Build a Python Data Scraping Pipeline',
            platform: 'Freelancer'
          },
          content: "I've developed numerous data scraping solutions using Python, including projects that closely match your requirements. My expertise with Scrapy and Beautiful Soup, combined with my experience in data cleaning and PostgreSQL integration, makes me an ideal candidate for this project. I can start immediately and deliver a robust, efficient pipeline within your timeline.",
          status: 'draft',
          type: 'standard',
          tactics_used: ['urgency', 'expertise_highlighting'],
          created_at: '2024-07-24T16:45:00Z',
          submitted_at: null
        },
        {
          id: 'prop3',
          job: {
            id: 'job5',
            title: 'Machine Learning Engineer - Recommendation System',
            platform: 'Direct Client'
          },
          content: "As a machine learning specialist with a focus on recommendation systems, I'm excited about your project. My background includes implementing collaborative filtering and content-based recommendation engines for major e-commerce platforms, resulting in 35% increased user engagement. I've worked extensively with TensorFlow and PyTorch to develop scalable solutions similar to what you're looking for.",
          status: 'accepted',
          type: 'premium',
          tactics_used: ['results_demonstration', 'expertise_highlighting', 'specific_relevance'],
          created_at: '2024-07-23T09:15:00Z',
          submitted_at: '2024-07-23T11:30:00Z',
          client_response: "Thanks for your proposal. Your experience is impressive. Can we schedule a call tomorrow to discuss the project in more detail?"
        }
      ],
      totalProposals: 3,
      totalPages: 1
    };
  } catch (error) {
    console.error('Error fetching proposals:', error);
    throw new Error('Failed to load proposals');
  }
};

/**
 * Update the status of a proposal
 * @param {string} proposalId - ID of the proposal
 * @param {string} status - New status
 * @param {string|null} responseDetails - Optional client response
 * @returns {Promise<Object>} Updated proposal
 */
export const updateProposalStatus = async (proposalId, status, responseDetails = null) => {
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // In a real implementation, this would update the database
    console.log(`Updated proposal ${proposalId} status to ${status}`);
    
    if (responseDetails) {
      console.log(`Added client response: ${responseDetails}`);
    }
    
    return { success: true };
  } catch (error) {
    console.error('Error updating proposal status:', error);
    throw new Error('Failed to update proposal status');
  }
};

/**
 * Delete a proposal
 * @param {string} proposalId - ID of the proposal to delete
 * @returns {Promise<Object>} Result of deletion
 */
export const deleteProposal = async (proposalId) => {
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // In a real implementation, this would delete from the database
    console.log(`Deleted proposal ${proposalId}`);
    
    return { success: true };
  } catch (error) {
    console.error('Error deleting proposal:', error);
    throw new Error('Failed to delete proposal');
  }
};

/**
 * Generate a proposal for a job
 * @param {Object} params - Parameters for generation
 * @param {string} params.jobId - ID of the job
 * @param {string} [params.type='standard'] - Type of proposal
 * @param {Array} [params.tactics=[]] - Tactics to use
 * @returns {Promise<Object>} Generated proposal
 */
export const generateProposal = async ({ jobId, type = 'standard', tactics = [] }) => {
  try {
    // Simulate API call delay for AI generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log(`Generated ${type} proposal for job ${jobId} with tactics:`, tactics);
    
    return { 
      success: true,
      proposalId: 'new-prop-' + Date.now() 
    };
  } catch (error) {
    console.error('Error generating proposal:', error);
    throw new Error('Failed to generate proposal');
  }
};
