import { User } from '../../../data/api-client';

interface Props {
  teamMember: User;
}

export const TeamMember = ({ teamMember }: Props) => {
  let role = '';
  if (teamMember.role === 'CampaignPlanner') {
    role = 'Campaign planner';
  } else {
    role = 'Campaign manager';
  }

  return (
    <div
      key={teamMember.id}
      className='flex flex-col items-start gap-2 rounded-lg border border-gray-200 p-4 shadow-sm'
    >
      <h3 className='text-base font-semibold text-typography-primary-black'>
        {teamMember.name}
      </h3>
      <span className='text-sm text-gray-500'>{role}</span>
      <a
        href={`mailto:${teamMember.email}`}
        className='break-all text-xs text-gray-500 hover:bg-neutral-lighter hover:text-typography-primary-grey hover:underline'
      >
        {teamMember.email || 'No email provided'}
      </a>
    </div>
  );
};
