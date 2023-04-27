import { request } from '@octokit/request';

import { Repository, RepositoryShort } from './typings/repository';
import { WeeklyCommitCount } from './typings/weeklyCommitCount';

interface IGithubApiService {
	getRepositories(): Promise<RepositoryShort[]>;
	getRepositoryDetails(owner: string, repo: string): Promise<Repository>;
	getWeeklyCommitCount(owner: string, repo: string): Promise<WeeklyCommitCount>;
}

export class GithubApiService implements IGithubApiService {
	async getRepositories() {
		const response = await request<RepositoryShort[]>({
			method: 'GET',
			url: '/orgs/facebook/repos'
		});

		return response.data;
	}

	async getRepositoryDetails(owner: string, repo: string) {
		const response = await request<Repository>({
			method: 'GET',
			url: `/repos/${owner}/${repo}`
		});

		return response.data;
	}

	async getWeeklyCommitCount(owner: string, repo: string) {
		const response = await request<WeeklyCommitCount>({
			method: 'GET',
			url: `/repos/${owner}/${repo}/stats/participation`
		});

		return response.data;
	}
}

const githubApiService = new GithubApiService();

export default githubApiService;
