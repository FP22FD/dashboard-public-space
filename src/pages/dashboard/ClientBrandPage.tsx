import { useParams } from 'react-router-dom';
import { load } from '../../data/api-client';
import Searchbar from './components/Searchbar';
import CampaignDetails from './components/CampaignDetails';
import { TeamMembers } from './components/TeamMembers';

function ClientBrandPage() {
  const { clientid, brandid } = useParams<{
    clientid: string;
    brandid: string;
  }>();

  const data = load();
  const client = data.find((client) => String(client.id) === clientid);

  if (!client) {
    return (
      <div className='flex min-h-screen flex-col items-center justify-center'>
        <p className='text-center text-3xl text-typography-primary-black'>
          Client not found
        </p>
      </div>
    );
  }

  const brand = client.brands.find((brand) => String(brand.id) === brandid);
  if (!brand) {
    return (
      <div className='flex min-h-screen flex-col items-center justify-center'>
        <p
          className='text-center text-3xl text-typography-primary-black'
          aria-live='assertive'
        >
          Brand not found
        </p>
      </div>
    );
  }

  return (
    <div className='p-6'>
      <h1 className='text-center text-3xl font-black'>{client.name}</h1>
      <h2 className='mt-4 text-lg font-bold uppercase'>Team Members</h2>
      <TeamMembers teamMembers={client.teamMembers || []} />

      <div role='separator' className='my-6 border-t'></div>

      <div className='flex items-center justify-between'>
        <h2 className='p-6 text-lg font-black uppercase'>Campaigns</h2>
        <Searchbar />
      </div>

      <div className='mb-6 grid gap-4 px-4 py-8'>
        <CampaignDetails campaigns={brand.campaigns} />
      </div>
    </div>
  );
}

export default ClientBrandPage;
