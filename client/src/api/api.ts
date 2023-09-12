import axios from 'axios';
import { config, routes } from '../util/const';

// const getPosts = async (limit: number, skip: number) => {
// 	const posts = await axios.get(
// 		`https://dummyjson.com/products?limit=${limit}&skip=${skip}`
// 	);

// 	return posts.data.products;
// };
const instance = axios.create(config);

const getPosts = async (tag?: string) => {
	const url = tag ? `${routes.getByTag}${tag}` : routes.get;

	return instance.get(url, {
		headers: {
			accept: 'application/json',
		},
	});
};

// const updatePost = async () => {};
// const deletePost = async () => {};
const uploadPost = async (img: string) =>
	instance.post(
		routes.post,
		{
			img: img,
		},
		{
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		}
	);

export { getPosts, uploadPost };
