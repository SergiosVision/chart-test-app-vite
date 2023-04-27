import { makeAutoObservable, runInAction, toJS } from 'mobx';

import { ValueOrNull } from '@common/types/interfaces/common';

import { RepositoryDetailsModel } from '../../domain/models/RepositoryDetailsModel';
import { GetRepositoryDetailsCase } from '../../domain/usecases/getRepositoryDetails';

type UseCases = {
	getRepositoryDetailsCase: GetRepositoryDetailsCase;
};

export class RepositoryDetailsViewModel {
	private _isLoading = false;
	private _data: ValueOrNull<RepositoryDetailsModel> = null;

	constructor(private readonly useCases: UseCases) {
		makeAutoObservable(this);
	}

	get data() {
		return toJS(this._data);
	}

	get isLoading() {
		return toJS(this._isLoading);
	}

	async getRepositoryDetails(repo: string, owner: string): Promise<void> {
		this._isLoading = true;

		try {
			const response = await this.useCases.getRepositoryDetailsCase.execute(
				repo,
				owner
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
