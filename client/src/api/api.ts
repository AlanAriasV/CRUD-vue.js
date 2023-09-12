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

	// const response = await instance.get(url);

	// if (response.status === 200) {
	// 	return response.data;
	// } else {
	// 	console.log(response.data);
	// }

	return instance.get(url, {
		headers: {
			accept: 'application/json',
		},
	});
	// .then(response => response.data)
	// .catch(error => error);
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
// .then(response => response.data)
// .catch(error => error);
// // const Post = async () => {};

export { getPosts, uploadPost };
