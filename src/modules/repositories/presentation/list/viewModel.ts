import { makeAutoObservable, runInAction, toJS } from 'mobx';

import { RepositoriesListModel } from '../../domain/models/RepositoriesListModel';
import { GetRepositoriesListCase } from '../../domain/usecases/getRepositoriesList';

type UseCases = {
	getRepositoriesListCase: GetRepositoriesListCase;
};

export class RepositoriesListViewModel {
	private _isLoading = false;
	private _list: RepositoriesListModel[] = [];

	constructor(private readonly useCases: UseCases) {
		makeAutoObservable(this);
	}

	get list() {
		return toJS(this._list);
	}

	get isLoading() {
		return toJS(this._isLoading);
	}

	async getRepositoriesList(): Promise<void> {
		this._isLoading = true;

		try {
			const response = await this.useCases.getRepositoriesListCase.execute();

			runInAction(() => {
				this._list = response;
			});
		} finally {
			runInAction(() => {
				this._isLoading = false;
			});
		}
	}
}
