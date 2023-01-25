export interface ISearchUserItem {
  login: string;
  avatar_url: string;
  html_url: string;
}
interface IRepoUser {
  name: string;
  html_url: string;
}
interface ISearchUser {
  total_count: number;
  incomplete_results: boolean;
  items: ISearchUserItem[];
}

export interface IAuth {
  isLoadingSearchUser: boolean;
  searchUser: ISearchUser | null;
  errorSearchUser: unknown;
  selectedUser: ISearchUserItem | null;
  isLoadingRepoUser: boolean;
  repoUser: IRepoUser[] | null;
  errorRepoUser: unknown;
}
