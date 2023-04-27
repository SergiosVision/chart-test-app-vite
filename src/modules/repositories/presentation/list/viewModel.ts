import { makeObservable, observable, runInAction } from 'mobx';

import { RepositoriesListModel } from '../../domain/models/RepositoriesListModel';
import { GetRepositoriesListCase } from '../../domain/usecases/getRepositoriesList';

type UseCases = {
	getRepositoriesListCase: GetRepositoriesListCase;
};

export class RepositoriesListViewModel {
	public isLoading = false;
	public list: RepositoriesListModel[] = [];

	constructor(private readonly useCases: UseCases) {
		makeObservable(this, {
			isLoading: observable,
			list: observable
		});
	}

	async getRepositoriesList(): Promise<void> {
		runInAction(() => {
			this.isLoading = true;
		});

		try {
			const response = await this.useCases.getRepositoriesListCase.execute();

			runInAction(() => {
				this.list = response;
			});
		} finally {
			runInAction(() => {
				this.isLoading = false;
			});
		}
	}
}
