import { useState, useEffect } from 'react';
import { PaginatedData } from '../interfaces/utils';
import { ReqresListResponse } from '../interfaces/common';

export default function paginatedData<DataType>(
	uri: string
): PaginatedData<DataType> {
	const [page, setPage] = useState<number>(1);
	const [data, setData] = useState<Array<DataType>>([]);
	const [hasNext, setHasNext] = useState<boolean>(true);

	async function getData() {
		const fetchResponse: ReqresListResponse<DataType> = await fetch(
			`${uri}?page=${page}`
		).then((res: Response) => res.json());

		setData((curr: Array<DataType>) => curr.concat(fetchResponse.data));

		if (fetchResponse.page === fetchResponse.total_pages) {
			setHasNext(false);
		} else {
			setPage((curr: number) => curr + 1);
		}
	}

	function getNextPage() {
		if (hasNext) getData();
	}

	useEffect(() => {
		getData();
	}, []);

	return {
		page,
		data,
		hasNext,
		getNextPage,
	};
}
