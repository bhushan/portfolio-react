import type { WorkHistoryInterface, EducationHistoryInterface } from './types';

export const WORK_HISTORY: WorkHistoryInterface[] = [
  {
    designation: 'Software Engineer 3',
    company: 'PayPal',
    location: 'Bangalore',
    type: 'Full Time',
    duration: 'January, 2022 - Present',
  },
  {
    designation: 'Module Lead',
    company: 'Oostelijke Onderneming, LLP',
    location: 'Pune',
    type: 'Full Time',
    duration: 'September, 2020 - January, 2022',
  },
  {
    designation: 'Senior Software Developer',
    company: 'Oostelijke Onderneming, LLP',
    location: 'Pune',
    type: 'Full Time',
    duration: 'March, 2020 - August, 2020'
  },
  {
    designation: 'Founder and Full Stack Developer',
    company: 'Enlight Technologies',
    location: 'Remote Works',
    type: 'Full Time',
    duration: 'January, 2018 - February, 2020'
  },
  {
    designation: 'Team Lead',
    company: 'Impel Infotech Pvt. Ltd.',
    location: 'Nandurbar',
    type: 'Full Time',
    duration: 'January, 2017 - October, 2017'
  },
  {
    designation: 'Freelancer',
    company: '-',
    location: 'Remote Works',
    type: 'Part Time',
    duration: 'January, 2014 - December, 2016'
  },
];

export const EDUCATION_HISTORY: EducationHistoryInterface[] = [
  {
    degree: 'Bachelor of Engineering, Computer Science (B.E.)',
    institute: 'North Maharashtra University',
    duration: '2010 - 2015',
  },
  {
    degree: 'Higher Secondary Certificate (H.S.C.)',
    institute: 'Maharashtra State Board of Secondary and Higher Secondary Education',
    duration: '2009 - 2010',
  },
  {
    degree: 'Secondary School Certificate (S.S.C.)',
    institute: 'Maharashtra State Board of Secondary and Higher Secondary Education',
    duration: '2007 - 2008',
  }
];
