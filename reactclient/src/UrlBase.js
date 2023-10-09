const API_BASE_URL_DEVELOPMENT = 'http://localhost:5047/api';
const API_BASE_URL_PRODUCTION = 'http://carrellospesaapi/api';

const ENDPOINTS = {
    PRODOTTO: 'Prodotto',
    MARCA: 'Marca',
    PROMOZIONE: 'Promozione'
};

const development = {
    API_PRODOTTO: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.PRODOTTO}`,
    API_MARCA: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.MARCA}`,
    API_PROMOZIONE: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.PROMOZIONE}`
};

const production = {
    API_PRODOTTO: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.PRODOTTO}`,
    API_MARCA: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.MARCA}`,
    API_PROMOZIONE: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.PROMOZIONE}`
};

const UrlBase = process.env.NODE_ENV === "development" ? development : production;

export default UrlBase;
