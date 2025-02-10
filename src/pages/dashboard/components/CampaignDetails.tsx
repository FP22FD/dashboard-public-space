import { Campaign } from '../../../data/api-client';
import { CampaignItem } from './CampaignItem';

function CampaignDetails({ campaigns }: { campaigns: Campaign[] }) {
  return (
    <>
      {campaigns && campaigns.length > 0 ? (
        <ul className='grid w-full list-none grid-cols-1 gap-2 lg:grid-cols-2'>
          {campaigns.map((campaign) => (
            <CampaignItem key={campaign.id} campaign={campaign} />
          ))}
        </ul>
      ) : (
        <div className='flex min-h-screen flex-col items-center justify-center'>
          <p
            className='text-center text-3xl text-typography-primary-black'
            aria-live='assertive'
          >
            No campaigns found for this brand.
          </p>
        </div>
      )}
    </>
  );
}

export default CampaignDetails;
