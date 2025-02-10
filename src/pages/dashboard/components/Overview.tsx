import { useEffect, useState } from 'react';
import illustration from '../../../assets/images/illustration.svg';
import { Campaign, load } from '../../../data/api-client';
import { useTranslation } from 'react-i18next';

// 1️⃣ Create the component that returns only HTML (without logic).
const Overview = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col justify-start space-y-12 p-3'>
      <div>
        <h1 className='p-3 text-2xl font-semibold text-typography-primary-black'>
          {t('overview.title')}
        </h1>
      </div>

      <div className='grid w-full gap-4 lg:grid-cols-2'>
        <div className='rounded-lg border bg-white p-4 shadow-sm'>
          <h2 className='text-lg font-semibold'>
            {t('overview.activeCampaigns.title')}
          </h2>
          {/* 2️⃣ Displaying the list of active campaigns */}
          <ListCampaigns />
        </div>

        <div className='rounded-lg border bg-white p-4 shadow-sm'>
          <h2 className='text-lg font-semibold'>
            {t('overview.activities.title')}
          </h2>
          <img src={illustration} alt='Illustration' className='w-50 h-50' />
        </div>
      </div>
    </div>
  );
};

export default Overview;

// 2️⃣ Function to fetch data from the API
const useFetchCampaigns = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]); // Defining the state type as Campaign[]
  const [error, setError] = useState<string | null>(null); // Defining the state type as string or null

  // 2️⃣ Fetching the data as soon as the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching the data from the API
        const response = load();
        console.log('Data received:', response);

        // Mapping the data from all clients. From [[campaign1], [campaign2]] to [{campaign1}, {campaign2}, {campaign3}, {campaign4}, {campaign5}]
        const allCampaigns = response.map(
          (client) => client.brands[0].campaigns
        );

        // Updating the state with all campaigns data
        setCampaigns(allCampaigns.flat());
        console.log('Campaigns:', allCampaigns.flat());
      } catch (error) {
        // In case of an error
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []); // The empty array ensures the effect runs only once when the component mounts

  return { campaigns, error };
};

// 1️⃣ Create the component that returns only HTML (without logic) to facilitate the hardcoding of the data
// 2️⃣ Get data → Calling the useFetchCampaigns function
// 3️⃣ Looping through the data to display it → use map() method to display the list of campaigns
// 6️⃣ Generate a unique key based on a combination of campaign attributes → to avoid the warning and don't use INDEX
// 5️⃣ Display Error if there is one → from fetchCampaigns function to improve the user experience
// 7️⃣ Display a message if there are no active campaigns → to improve the user experience
// 4️⃣ Apply conditionals → Show only relevant information → use filter() method to filter the active campaigns

const ListCampaigns = () => {
  const { campaigns, error } = useFetchCampaigns();

  // I want to know id what campaigns is acitive or not -> made a function isActive

  const isActive = (campaign: Campaign) => {
    const today = new Date();
    const startData = new Date(campaign.startDate);
    const endDate = new Date(campaign.endDate);
    const active = startData <= today && endDate >= today;
    return active;
  };

  const activeCampaigns = campaigns.filter(isActive);

  return (
    <ul>
      {error && <li>{error}</li>}

      {activeCampaigns.length > 0 ? (
        activeCampaigns.map((campaign) => {
          const uniqueKey = `${campaign.id}-${campaign.name}`;
          return <li key={uniqueKey}>{campaign.name}</li>;
        })
      ) : (
        <div className='flex min-h-screen flex-col items-center justify-center'>
          <p
            className='text-center text-3xl text-typography-primary-black'
            aria-live='assertive'
          >
            No campaigns are currently active.
          </p>
        </div>
      )}
    </ul>
  );
};
