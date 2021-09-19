import { FC } from 'react';

import { yearsOfExperience } from 'helpers/utils';

const ProfessionalSummary: FC<{ className?: string }> = ({ className }) => {
  return <p className={`text-sm ${className}`}>
    Developer who thinks about <span className="font-bold">re-usability</span>
    {' '}and <span className="font-bold">readability</span>
    {' '}of <span className="font-bold">code</span>
    {' '}and how <span className="font-bold">extensible</span>
    {' '}is code, how to leverage <span className="font-bold">TDD (Test Driven Development)</span>.
    {' '}Working in <span className="font-bold">web domain</span>
    {' '}for <span className="font-bold">more than {yearsOfExperience} years</span> and
    {' '}have expert level expertise in <span className="font-bold">Laravel, Vue</span> stack. I am a self taught
    {' '}developer. I know how to <span className="font-bold">find answers </span> and self motivator.
  </p>;
};
export default ProfessionalSummary;
