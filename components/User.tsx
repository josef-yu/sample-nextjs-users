import type { User } from '../interfaces/user';
import Link from 'next/link';

export default function UserComponent(props: User) {
	return (
		<div className='flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl py-4 px-1'>
			<img src={props.avatar} className='object-cover rounded-full w-14 h-14' />
			<div className='flex flex-col justify-between p-4 leading-normal w-full text-center md:text-start'>
				<div className='font-semibold text-md'>{`${props.first_name} ${props.last_name}`}</div>
				<Link className='text-sm underline' href={`mailto:${props.email}`}>
					{props.email}
				</Link>
			</div>
			<div className='md:relative md:self-start absolute self-end'>
				<span className='absolute md:top-0 md:right-3 text-lg right-3'>
					{props.id}
				</span>
			</div>
		</div>
	);
}
