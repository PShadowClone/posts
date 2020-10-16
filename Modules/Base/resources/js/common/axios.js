import axios from 'axios'

const axiosInstance = axios.create({
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'lang': Config.get('lang')
    },
    baseURL: '/'
})

/**
 * @author khalid
 * process the request before sending
 */
axiosInstance.interceptors.request.use(function (config) {
        return config
    },
    function (error) {
        return Promise.reject(error);
    });

/**
 * @author khalid
 * process the response before it is passed
 */
axiosInstance.interceptors.response.use(
    response => {
        if (response.status === 200 || response.status === 201)
            return Promise.resolve(response)
        else
            return Promise.reject(response)
    },

    error => {
        if (error.response.status) {
            switch (error.response.status) {
                case 400:
                    break;

                case 401:
                    break;

                case 403:
                    break;
                case 404:

                    break;
                case 502:
                    break;
            }
            return Promise.reject(error.response);
        }
    }
)

export default axiosInstance
