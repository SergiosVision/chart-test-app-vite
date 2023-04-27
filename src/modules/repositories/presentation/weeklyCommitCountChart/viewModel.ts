import { makeObservable, observable, runInAction } from 'mobx';

import { WeeklyCommitCountModel } from '../../domain/models/WeeklyCommitCountModel';
import { GetWeeklyCommitCountCase } from '../../domain/usecases/getWeeklyCommitCount';

type UseCases = {
	getWeeklyCommitCountCase: GetWeeklyCommitCountCase;
};

export class WeeklyCommitCountChartViewModel {
	public isLoading = false;
	public data: WeeklyCommitCountModel = new WeeklyCommitCountModel({});

	constructor(private readonly useCases: UseCases) {
		makeObservable(this, {
			isLoading: observable,
			data: observable
		});
	}

	async getWeeklyCommitCount(owner: string, repo: string): Promise<void> {
		runInAction(() => {
			this.isLoading = true;
		});

		try {
			const response = await this.useCases?.getWeeklyCommitCountCase.execute(
				owner,
				repo
			);

			runInAction(() => {
				this.data = response;
			});
		} finally {
			runInAction(() => {
				this.isLoading = false;
			});
		}
	}
}
