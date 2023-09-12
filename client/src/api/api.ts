import axios from 'axios';
import { config, routes } from '../util/const';

const instance = axios.create(config);

const getPosts = (props: {
	tag: string | null;
	limit: number;
	skip: number;
}) => {
	const { tag, limit, skip } = props;

	const url =
		(tag ? `${routes.getByTag}/${tag}` : routes.get) + `/${skip}/${limit}`;

	return instance.get(url);
};

const updatePost = (props: { _id: string; case: string; votes: number }) => {
	const url = `${routes.put}/${props.case}`;
	return instance.put(url, props);
};

const deletePost = (_id: string) => {
	const url = `${routes.delete}/${_id}`;
	return instance.delete(url);
};

const uploadPost = (props: { img: string; tag: string }) =>
	instance.post(routes.post, props);

export { deletePost, getPosts, updatePost, uploadPost };
