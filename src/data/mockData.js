// Mock data for NaTeSA website

export const mockEvents = [
  {
    id: 1,
    title: 'Tech Workshop',
    date: '2023-10-01',
    description: 'Learn about new technologies.',
    location: 'Online',
    time: '10:00 AM',
  },
  {
    id: 2,
    title: 'Networking Event',
    date: '2023-10-15',
    description: 'Connect with professionals.',
    location: 'Campus Hall',
    time: '2:00 PM',
  },
  {
    id: 3,
    title: 'Hackathon',
    date: '2023-11-01',
    description: 'Build innovative solutions.',
    location: 'Tech Lab',
    time: '9:00 AM',
  },
];

export const mockResources = [
  {
    id: 1,
    title: 'Past Paper 1',
    type: 'PDF',
    description: 'Math past paper.',
    url: '#',
  },
  {
    id: 2,
    title: 'Video Lecture',
    type: 'Video',
    description: 'Intro to CS.',
    url: '#',
  },
  {
    id: 3,
    title: 'Study Guide',
    type: 'Document',
    description: 'Physics guide.',
    url: '#',
  },
];

export const mockMembers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    status: 'Approved',
    branch: 'Computer Science',
    becRole: 'Member',
    isAlumni: false,
    graduationYear: null,
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    status: 'Approved',
    branch: 'Information Technology',
    becRole: 'BEC Committee',
    isAlumni: false,
    graduationYear: null,
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    status: 'Alumni',
    branch: 'Software Engineering',
    becRole: 'NEC Member',
    isAlumni: true,
    graduationYear: 2022,
  },
  {
    id: 4,
    name: 'Master Admin',
    email: 'master@natessa.org',
    status: 'Approved',
    branch: 'Administration',
    becRole: 'Master Admin',
    isAlumni: false,
    graduationYear: null,
  },
];

export const mockSponsors = [
  {
    id: 1,
    company: 'Tech Corp',
    contact: 'John Doe',
    email: 'john@techcorp.com',
    level: 'Gold',
    logo: '/logo1.png',
    description: 'Leading tech company.',
  },
  {
    id: 2,
    company: 'Innovate Ltd',
    contact: 'Jane Smith',
    email: 'jane@innovate.com',
    level: 'Silver',
    logo: '/logo2.png',
    description: 'Innovation experts.',
  },
];

export const mockNews = [
  {
    id: 1,
    title: 'Welcome to NaTeSA 2023',
    content: 'We are excited to announce the start of the new academic year...',
    date: '2023-09-01',
    author: 'Admin',
  },
  {
    id: 2,
    title: 'Upcoming Tech Workshop',
    content: 'Join us for an exciting workshop on emerging technologies...',
    date: '2023-09-15',
    author: 'BEC Committee',
  },
  {
    id: 3,
    title: 'New Resources Available',
    content: 'We have added new study materials to our resources hub...',
    date: '2023-09-20',
    author: 'Resources Team',
  },
];

export const mockLeadership = [
  {
    id: 1,
    name: 'John Doe',
    position: 'President',
    branch: 'Computer Science',
    email: 'president@natessa.org',
    bio: 'Passionate about technology and education.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Vice President',
    branch: 'Information Technology',
    email: 'vp@natessa.org',
    bio: 'Focused on community building and innovation.',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    position: 'Secretary',
    branch: 'Software Engineering',
    email: 'secretary@natessa.org',
    bio: 'Organized and detail-oriented leader.',
  },
];

export const mockAnalytics = [
  { label: 'Members', value: 150 },
  { label: 'Events', value: 10 },
  { label: 'Resources', value: 50 },
  { label: 'Sponsors', value: 5 },
];