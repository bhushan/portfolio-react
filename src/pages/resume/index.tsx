import { FC } from 'react';

import InfoList from 'components/InfoList';
import ProfessionalSummary from 'components/ProfessionalSummary';
import WorkExperience from 'components/WorkExperience';

import { WORK_HISTORY, EDUCATION_HISTORY } from './constants'
import { EducationHistoryInterface, WorkHistoryInterface } from './types';
import Education from '../../components/Education';

const Resume: FC<{ className?: string }> = ({ className }) => {
  return <div className={`md:flex md:flex-row md:gap-10 ${className}`}>
    <div className="md:w-1/4">
      <h1 className="text-center font-semibold text-2xl md:hidden">
        Full Stack Developer
      </h1>
      <div className="block rounded-full shadow-xl mx-auto h-48 w-48 bg-cover bg-center mt-4 avatar-sm" />
      <h2 className="text-center font-semibold text-2xl mt-4">
        Bhushan Gaikwad
      </h2>
      <h3 className="text-center font-bold hidden md:block text-sm uppercase text-gray-500">
        Full Stack Developer
      </h3>
      <InfoList className="mt-12" />
    </div>
    <div className="md:w-3/3">
      <h2 className="hidden md:block md:mt-4 font-semibold text-2xl">
        Professional Summary
      </h2>
      <ProfessionalSummary className="mt-8 md:mt-5" />
      <h2 className="mt-12 font-semibold text-2xl">
        Work Experience
      </h2>
      {WORK_HISTORY.map(history => {
        const { designation, company, location, type, duration } = history as WorkHistoryInterface;

        return <WorkExperience
          key={duration}
          designation={designation}
          company={company}
          location={location}
          type={type}
          duration={duration}
               />
      })}
      <h2 className="mt-12 font-semibold text-2xl">
        Education
      </h2>
      {EDUCATION_HISTORY.map(history => {
        const { degree, institute, duration } = history as EducationHistoryInterface;

        return <Education
          key={duration}
          degree={degree}
          institute={institute}
          duration={duration}
               />
      })}
    </div>
  </div>
}

export default Resume;
