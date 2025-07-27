import axios from 'axios';

const API = axios.create({
	baseURL: 'http://localhost/lenskart-backend/',
});

export const getProducts = () => API.get('getproducts.php');

