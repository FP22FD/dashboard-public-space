import { Campaign } from '../../../data/api-client';

export const CampaignPeriods = ({ campaign }: { campaign: Campaign }) => (
  <>
    <div className='mt-4 text-xs'>
      <h4 className='text-md font-bold'>Periods</h4>
      <div className='mt-2 grid grid-cols-2 gap-2 text-typography-primary-grey'>
        {campaign.periods.map((period) => (
          <div
            key={period.id}
            className='w-full gap-2 rounded-lg bg-neutral-lighter p-3 shadow'
          >
            <div className='flex justify-between text-sm'>
              <span>
                <strong>Channel</strong>{' '}
              </span>
              <span>{period.channelType}</span>
            </div>

            <div className='flex justify-between text-sm'>
              <span>
                <strong>Budget</strong>{' '}
              </span>
              <span>${period.budget}</span>
            </div>

            <div className='flex justify-between text-sm'>
              <span>
                <strong>From</strong>{' '}
              </span>
              <span>{period.startDate}</span>
            </div>

            <div className='flex justify-between text-sm'>
              <span>
                <strong>To</strong>{' '}
              </span>
              <span>{period.endDate}</span>
            </div>

            <div className='mt-4'>
              <h5 className='text-right font-semibold'>Daily Spend</h5>

              <div className='mt-1 list-none text-sm text-typography-primary-grey'>
                {period.spend.map((spend) => (
                  <div key={spend.date} className='flex justify-between'>
                    <span>{spend.date}</span>
                    <span>${spend.cost}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);
