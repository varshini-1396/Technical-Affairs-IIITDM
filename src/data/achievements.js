export const achievements = [
  {
    id: 1,
    title: 'SAUVC 2019',
    description: 'Secured 17th Position internationally',
    year: '2019',
    club: 'AUV Society',
    logo: '/clubs/auv/logo.png',
  },
  {
    id: 2,
    title: 'Research Paper at OCEANS 2021',
    description: 'Development of AUV for SAUVC During COVID-19',
    year: '2021',
    club: 'AUV Society',
    logo: '/clubs/auv/logo.png',
  },
  {
    id: 3,
    title: 'VAX 2022',
    description: 'One among Top 30 teams internationally',
    year: '2022',
    club: 'AUV Society',
    logo: '/clubs/auv/logo.png',
  },
  {
    id: 4,
    title: 'Research Paper at OCEANS 2022',
    description: 'Design and Performance Analysis of Bio- Inspired Remotely Operated Robot',
    year: '2022',
    club: 'AUV Society',
    logo: '/clubs/auv/logo.png',
  },
  {
    id: 5,
    title: 'Research Paper at 2022 IEEE OES AUV SYMPOSIUM',
    description: 'Mechanical Design, Analysis and Development of an AUV for SAUVC',
    year: '2022',
    club: 'AUV Society',
    logo: '/clubs/auv/logo.png',
  },
  {
    id: 6,
    title: 'MATE ROV 2022',
    description: 'Fabricated a ROV & got selected to represent INDIA in MATE 2022 in USA',
    year: '2022',
    club: 'AUV Society',
    logo: '/clubs/auv/logo.png',
  },
  {
    id: 7,
    title: 'SAUVC 2022',
    description: 'Participated in SAUVC during September 2022.',
    year: '2022',
    club: 'AUV Society',
    logo: '/clubs/auv/logo.png',
  },
  {
    id: 8,
    title: 'MATE ROV OCEANS EXPLORER CHALLENGE 2023',
    description: 'Fabricated a hybrid ROV-AUV Vehicle and got selected to represent INDIA in MATE 2023 Placed 3rd worldwide in Oceans Explorer Challenge',
    year: '2023',
    club: 'AUV Society',
    logo: '/clubs/auv/logo.png',
  },
  {
    id: 9,
    title: 'AQUA QUEST',
    description: 'Hosting a Nationwide ROV competition on Feb 2024',
    year: '2024',
    club: 'AUV Society',
    logo: '/clubs/auv/logo.png',
  },
  {
    id: 10,
    title: 'Research Paper at OCEANS 2022',
    description: 'Analysis of Underwater Coral Reef Health Using Neural Networks',
    year: '2022',
    club: 'AUV Society',
    logo: '/clubs/auv/logo.png',
  },
  {
    id: 11,
    title: 'Research Paper at OCEANS 2024',
    description: 'Optimisation of Visual SLAM for Underwater Robotics using OAK-D Smart Camera',
    year: '2024',
    club: 'AUV Society',
    logo: '/clubs/auv/logo.png',
  },
  {
    id: 12,
    title: 'SAUVC 2024',
    description: 'Making the vehicle completely autonomous. Implementing novel idea for grasping objects.',
    year: '2024',
    club: 'AUV Society',
    logo: '/clubs/auv/logo.png',
  },
  {
    id: 13,
    title: 'IIT BOMBAY 2025',
    description: 'Secured 1st place in the International AUV Challenge, organised by IIT Bombay',
    year: '2025',
    club: 'AUV Society',
    logo: '/clubs/auv/logo.png',
  },
  {
    id: 14,
    title: 'IIT MADRAS 2025',
    description: "Secured 2nd Place in AquaVision '2025 hosted by IIT Madras.",
    year: '2025',
    club: 'AUV Society',
    logo: '/clubs/auv/logo.png',
  },
  {
    id: 15,
    title: 'SAUVC 2025',
    description: 'Secured 5th place globally in the Singapore AUV Challenge 2025',
    year: '2025',
    club: 'AUV Society',
    logo: '/clubs/auv/logo.png',
  },
];

// Helper function to get achievements by club
export const getAchievementsByClub = (club) => {
  if (club === 'all') return achievements;
  return achievements.filter(achievement => achievement.club === club);
};

// Helper function to get achievements by year
export const getAchievementsByYear = (year) => {
  if (year === 'all') return achievements;
  return achievements.filter(achievement => achievement.year === year);
};

// Helper function to get unique years
export const getUniqueYears = () => {
  const years = new Set(achievements.map(a => a.year));
  return Array.from(years).sort((a, b) => b - a);
};

// Helper function to get unique clubs
export const getUniqueClubs = () => {
  const clubs = new Set(achievements.map(a => a.club));
  return Array.from(clubs).sort();
}; 