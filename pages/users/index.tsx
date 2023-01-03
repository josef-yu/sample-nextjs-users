import type { User } from '../../interfaces/user';
import type { PaginatedData } from '../../interfaces/utils';
import usePagination from '../../utils/paginatedData';
import UserComponent from '../../components/User';

export default function UsersPage() {
	const { data, hasNext, getNextPage }: PaginatedData<User> =
		usePagination<User>('/api/users');
	return (
		<div className='flex flex-col justify-center min-h-screen items-center gap-4'>
			<div className='grid md:grid-cols-3 gap-4 sm:grid-cols-1'>
				{data.map((user: User) => (
					<UserComponent key={`user-${user.id}`} {...user} />
				))}
			</div>
			<button
				disabled={!hasNext}
				onClick={getNextPage}
				className='bg-blue-500 hover:bg-blue-700 disabled:bg-blue-300 text-white font-bold py-2 px-4 rounded'
			>
				Show more
			</button>
		</div>
	);
}
