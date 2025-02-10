import { useParams } from 'react-router-dom';
import { load } from '../../data/api-client';
import { TeamMembers } from './components/TeamMembers';
// import { useTranslation } from 'react-i18next';

function ClientPage() {
  const { clientid } = useParams<{ clientid: string }>();
  // const { t } = useTranslation();

  const data = load();
  const client = data.find((client) => String(client.id) === clientid);

  // handling states (no data, loading, error) early in the render function
  if (!client) {
    return <p>Client not found</p>;
  }

  return (
    <div className='p-6'>
      <h1 className='text-center text-3xl font-extrabold'>{client.name}</h1>
      <h2 className='mt-4 text-lg font-bold uppercase'>
        Team Members
        {/* Team Members ({client.teamMembers?.length}) */}
        {/* {t('client.team_members.title', { count: client.teamMembers?.length })} */}
      </h2>
      <TeamMembers teamMembers={client.teamMembers || []} />
    </div>
  );
}

export default ClientPage;
