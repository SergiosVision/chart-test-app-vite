import { FC } from 'react';

import BaseSkeleton from '@components/ui/skeleton/BaseSkeleton';

const stub = Array.from(Array(8).keys());

const Skeletons: FC = () => {
	return (
		<>
			{stub.map(key => (
				<div key={key} className='flex flex-col gap-1 w-full'>
					<BaseSkeleton height='21px' width='80%' />
					<BaseSkeleton height='33px' width='100%' />
				</div>
			))}
		</>
	);
};

export default Skeletons;
