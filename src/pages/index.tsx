import { FC } from 'react';
import InfoList from 'components/InfoList';
import ProfessionalSummary from 'components/ProfessionalSummary';

import avatarImage from 'assets/images/profile/avatar.jpeg';

const Home: FC<{ className?: string }> = ({ className }) => {

  return <div className={`max-w-4xl flex items-center h-auto flex-wrap mx-auto ${className}`}>
    <div className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-xl bg-white lg:mx-0">
      <div className="p-4 md:p-8 text-center lg:text-left">
        <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center avatar-sm" />
        <h1 className="text-3xl font-bold pt-8 lg:pt-0">
          Bhushan Gaikwad
        </h1>
        <h2 className="text-sm font-semibold text-gray-500 uppercase">
          Full Stack Developer
        </h2>
        <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-blue-500 opacity-25" />
        <ProfessionalSummary className="pt-4" />
        <InfoList className="mt-4" />
      </div>
    </div>
    <div className="w-full lg:w-2/5">
      <img
        src={avatarImage}
        className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
        alt="Bhushan Gaikwad - Full Stack Developer"
      />
    </div>
  </div>
};

export default Home;
