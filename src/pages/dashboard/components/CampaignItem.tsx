import { Campaign } from '../../../data/api-client';
import { CampaignPeriods } from './CampaignPeriods';

export const CampaignItem = ({ campaign }: { campaign: Campaign }) => (
  <li key={campaign.id} className='w-full rounded-lg border p-2'>
    <article>
      <h3 className='mb-4 text-lg font-semibold text-typography-primary-black'>
        {campaign.name}
      </h3>
      <dl>
        <div className='flex justify-between text-sm text-typography-primary-grey'>
          <dt>Product</dt>
          <dd>{campaign.product}</dd>
        </div>
        <div className='flex justify-between text-sm text-typography-primary-grey'>
          <dt>Target Group</dt>
          <dd>{campaign.targetGroup}</dd>
        </div>
        <div className='flex justify-between text-sm text-typography-primary-grey'>
          <dt>From</dt>
          <dd>{campaign.startDate}</dd>
        </div>
        <div className='flex justify-between text-sm text-typography-primary-grey'>
          <dt>To</dt>
          <dd>{campaign.endDate}</dd>
        </div>
      </dl>
    </article>

    <div role='separator' className='my-4 border-t'></div>

    {campaign.periods && campaign.periods.length > 0 && (
      <CampaignPeriods campaign={campaign} />
    )}
  </li>
);
