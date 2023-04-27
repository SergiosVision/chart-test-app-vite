import { SeriesOptionsType } from 'highcharts';
import { FC } from 'react';

import Chart from './Chart';
import Skeleton from './Skeleton';
import styles from './styles/View.module.scss';

interface Props {
	isLoading: boolean;
	chartData: SeriesOptionsType[];
}

const View: FC<Props> = ({ isLoading, chartData }) => {
	return (
		<section className={styles.wrapper}>
			{!isLoading ? <Chart chartData={chartData} /> : <Skeleton />}
		</section>
	);
};

export default View;
