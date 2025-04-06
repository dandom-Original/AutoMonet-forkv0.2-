// Mock function to fetch jobs
export const fetchJobs = async () => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Return mock job data
  return [
    {
      id: 'job1',
      title: 'Senior React Developer Needed for Fintech Project',
      description: 'Looking for an experienced React developer to join our team building a cutting-edge fintech platform. Must have strong experience with Redux, TypeScript, and testing frameworks.',
      budget: '$8000-12000',
      source: 'Upwork',
      postedAt: '2024-07-25T10:00:00Z',
      skills: ['React', 'Redux', 'TypeScript', 'Jest', 'Fintech'],
      matchScore: 92,
    },
    {
      id: 'job2',
      title: 'Build a Python Data Scraping Pipeline',
      description: 'We need a Python expert to develop a robust data scraping pipeline using Scrapy and Beautiful Soup. Experience with data cleaning and storage in PostgreSQL is required.',
      budget: '$3000-5000',
      source: 'Freelancer',
      postedAt: '2024-07-24T14:30:00Z',
      skills: ['Python', 'Scrapy', 'Beautiful Soup', 'PostgreSQL', 'Data Scraping'],
      matchScore: 85,
    },
    {
      id: 'job3',
      title: 'UI/UX Designer for Mobile App',
      description: 'Seeking a talented UI/UX designer to create wireframes and mockups for a new social networking mobile app. Proficiency in Figma is a must.',
      budget: '$1500-2500',
      source: 'Fiverr Pro',
      postedAt: '2024-07-24T09:15:00Z',
      skills: ['UI Design', 'UX Design', 'Figma', 'Mobile App Design'],
      matchScore: 68, // Lower score as it's design-focused
    },
    {
      id: 'job4',
      title: 'Node.js Backend Developer for E-commerce API',
      description: 'Develop and maintain RESTful APIs for our e-commerce platform using Node.js, Express, and MongoDB. Experience with microservices is a plus.',
      budget: '$6000-9000',
      source: 'LinkedIn',
      postedAt: '2024-07-23T11:00:00Z',
      skills: ['Node.js', 'Express', 'MongoDB', 'REST API', 'Microservices'],
      matchScore: 88,
    },
    {
      id: 'job5',
      title: 'Machine Learning Engineer - Recommendation System',
      description: 'Implement and optimize a recommendation system using Python, TensorFlow/PyTorch. Strong background in collaborative filtering and content-based filtering needed.',
      budget: '$10000-15000',
      source: 'Direct Client',
      postedAt: '2024-07-22T16:45:00Z',
      skills: ['Python', 'Machine Learning', 'TensorFlow', 'PyTorch', 'Recommendation Systems'],
      matchScore: 95,
    },
  ];
};
