import axios from "axios"

let URL

switch (process.env.REACT_APP_ENVIRONMENT) {
    case 'DEVELOPMENT':
        URL = 'https://moon-light-server.vercel.app/' // For Development 
        break;
    case 'PRODUCTION':
        URL = 'https://moon-light-server.vercel.app/' // For Development 
        break;
    default:
        URL = 'https://moon-light-server.vercel.app/'
        break;
}

const axiosInstacnce = axios.create({ baseURL: URL })

export default axiosInstacnce