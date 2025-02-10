import { User } from '../../../data/api-client';
import { TeamMember } from './TeamMember';

interface Props {
  teamMembers: User[];
}

export const TeamMembers = ({ teamMembers }: Props) => {
  return (
    <div className='mt-4 grid grid-cols-2 gap-2 px-4 py-2 lg:grid-cols-4'>
      {teamMembers.length > 0 ? (
        teamMembers.map((member) => (
          <TeamMember key={member.id} teamMember={member} />
        ))
      ) : (
        <div
          className='flex flex-1 flex-col items-center justify-center'
          role='alert'
        >
          <p className='text-center text-xl text-gray-700'>
            No team members found
          </p>
        </div>
      )}
    </div>
  );
};
