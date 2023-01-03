export type ReqresListResponse<T> = {
	page: number;
	per_page: number;
	total: number;
	total_pages: number;
	data: Array<T>;
};

export type ReqresError = {
	info: string;
};
