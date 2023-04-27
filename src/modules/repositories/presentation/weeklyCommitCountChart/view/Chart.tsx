import { Options, SeriesOptionsType } from 'highcharts';
import { FC } from 'react';

import ChartComponent from '@modules/chart/Chart';

const baseOptions: Options = {
	title: {
		text: 'Weekly Commit Counts'
	},
	chart: {
		height: '300px'
	}
};

interface Props {
	chartData: SeriesOptionsType[];
}

const Chart: FC<Props> = ({ chartData }) => {
	const options = {
		...baseOptions,
		series: chartData
	};

	return <ChartComponent options={options} />;
};

export default Chart;
