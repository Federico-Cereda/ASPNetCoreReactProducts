const API_BASE_URL_DEVELOPMENT = 'https://localhost:7273/api';
const API_BASE_URL_PRODUCTION = 'http://carrellospesaapi/api';

const ENDPOINTS = {
    PRODOTTO: 'Prodotto',
    MARCA: 'Marca'
};

const development = {
    API_PRODOTTO: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.PRODOTTO}`,
    API_MARCA: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.MARCA}`
};

const production = {
    API_PRODOTTO: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.PRODOTTO}`,
    API_MARCA: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.MARCA}`
};

const UrlBase = process.env.NODE_ENV === "development" ? development : production;

export default UrlBase;
