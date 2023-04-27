import { RepositoriesRepositoryImpl } from '../../data/repository';

export class GetRepositoriesListCase {
	constructor(private readonly repository: RepositoriesRepositoryImpl) {}

	async execute() {
		return this.repository.getList();
	}
}
