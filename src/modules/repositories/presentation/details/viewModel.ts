import { makeObservable, observable, runInAction } from 'mobx';

import { ValueOrNull } from '@common/types/interfaces/common';

import { RepositoryDetailsModel } from '../../domain/models/RepositoryDetailsModel';
import { GetRepositoryDetailsCase } from '../../domain/usecases/getRepositoryDetails';

type UseCases = {
	getRepositoryDetailsCase: GetRepositoryDetailsCase;
};

export class RepositoryDetailsViewModel {
	public isLoading = false;
	public data: ValueOrNull<RepositoryDetailsModel> = null;

	constructor(private readonly useCases: UseCases) {
		makeObservable(this, {
			isLoading: observable,
			data: observable
		});
	}

	async getRepositoryDetails(repo: string, owner: string): Promise<void> {
		runInAction(() => {
			this.isLoading = true;
		});

		try {
			const response = await this.useCases.getRepositoryDetailsCase.execute(
				repo,
				owner
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
