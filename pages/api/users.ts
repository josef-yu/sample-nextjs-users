import type { NextApiRequest, NextApiResponse } from 'next';
import type { User } from '../../interfaces/user';
import type { ReqresListResponse, ReqresError } from '../../interfaces/common';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ReqresListResponse<User> | ReqresError>
) {
	const { page } = req.query;

	try {
		const reqresUsers: ReqresListResponse<User> = await fetch(
			`https://reqres.in/api/users?page=${page}`
		).then((res: Response) => res.json());
		res.status(200).json(reqresUsers);
	} catch (e) {
		let message = 'Unknown Error';
		if (e instanceof Error) {
			message = e.message;
		}
		console.error(e);
		res.status(500).json({ info: message });
	}
}
