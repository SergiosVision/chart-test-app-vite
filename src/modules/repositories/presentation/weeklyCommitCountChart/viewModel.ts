import { makeAutoObservable, runInAction, toJS } from 'mobx';

import { WeeklyCommitCountModel } from '../../domain/models/WeeklyCommitCountModel';
import { GetWeeklyCommitCountCase } from '../../domain/usecases/getWeeklyCommitCount';

type UseCases = {
	getWeeklyCommitCountCase: GetWeeklyCommitCountCase;
};

export class WeeklyCommitCountChartViewModel {
	private _isLoading = false;
	private _data: WeeklyCommitCountModel = new WeeklyCommitCountModel({});

	constructor(private readonly useCases: UseCases) {
		makeAutoObservable(this);
	}

	get data() {
		return toJS(this._data);
	}

	get isLoading() {
		return toJS(this._isLoading);
	}

	async getWeeklyCommitCount(owner: string, repo: string): Promise<void> {
		this._isLoading = true;

		try {
			const response = await this.useCases?.getWeeklyCommitCountCase.execute(
				owner,
				repo
			);

			runInAction(() => {
				this._data = response;
			});
		} finally {
			runInAction(() => {
				this._isLoading = false;
			});
		}
	}
}
