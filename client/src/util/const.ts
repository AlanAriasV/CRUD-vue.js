import { CreateAxiosDefaults } from 'axios';

export const config: CreateAxiosDefaults<any> = {
	baseURL: 'http://localhost:3000',
	// timeout: 1000,
};

export const routes: {
	delete: string;
	get: string;
	getByTag: string;
	post: string;
	put: string;
} = {
	delete: '/deleteImage/',
	get: '/getAllImgs',
	getByTag: '/findImgByTag/',
	post: '/addImage',
	put: '/putImage/',
};
