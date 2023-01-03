export interface PaginatedData<T> {
	page: number;
	data: Array<T>;
	hasNext: boolean;
	getNextPage(): void;
}
