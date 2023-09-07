import axios from 'axios';

const getPosts = async (limit: number, skip: number) => {
    const posts = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );

    return posts.data.products
}

export default getPosts