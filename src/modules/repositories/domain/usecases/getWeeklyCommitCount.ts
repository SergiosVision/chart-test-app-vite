import { RepositoriesRepositoryImpl } from '../../data/repository';

export class GetWeeklyCommitCountCase {
	constructor(private readonly repository: RepositoriesRepositoryImpl) {}

	async execute(owner: string, repo: string) {
		return this.repository.getWeeklyCommitCount(owner, repo);
	}
}
