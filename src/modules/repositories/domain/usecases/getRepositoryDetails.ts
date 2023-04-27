import { RepositoriesRepositoryImpl } from '../../data/repository';

export class GetRepositoryDetailsCase {
	constructor(private readonly repository: RepositoriesRepositoryImpl) {}

	async execute(owner: string, repo: string) {
		return this.repository.getDetails(owner, repo);
	}
}
