import axios from 'axios';
import { config, routes } from '../util/const';

const instance = axios.create(config);

const getPosts = async (props: {
	tag?: string;
	limit: number;
	skip: number;
}) => {
	const { tag, limit, skip } = props;

	const url =
		(tag ? `${routes.getByTag}/${tag}` : routes.get) + `/${skip}/${limit}`;

	return instance.get(url, {
		headers: {
			accept: 'application/json',
		},
	});
};

// const updatePost = async () => {};
const deletePost = async (_id: string) => {
	const url = `${routes.delete}/${_id}`;
	instance.delete(url);
};
const uploadPost = async (img: string) =>
	instance.post(routes.post, {
		img: img,
	});

export { getPosts, uploadPost, deletePost };
