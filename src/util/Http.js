import axios from 'axios';
import moment from "moment";
import md5 from "md5"

class Http {

    get = (url, data, signature = true) => {
        const timestamp = moment().toISOString()
        let esc = encodeURIComponent;
        let query = '';
        if (data.filter) {
            const newData = data.filter
            query = Object.keys(newData).map(k => {
                if (typeof newData[k] === 'object') {
                    let paramsArray = newData[k]
                    let str = []

                    paramsArray.forEach(item => {
                        str.push(`${esc(k)}=${esc(item)}`)
                    })

                    return str.join('&')
                } else {
                    return `${esc(k)}=${esc(newData[k])}`
                }
            }).join('&');
        }
        url = `${url}?${query}`;

        let token = undefined
        let headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-timestamp': timestamp,
        };

        const accessToken = localStorage.getItem('accessToken')
        if (accessToken) {
            headers.Authorization = 'Bearer ' + accessToken;
            token = headers.Authorization
        }

        if (signature) {
            headers.signature = this.generateSignature(
                token,
                {},
                'get',
                this.getUrl(url),
                timestamp
            )
        }

        return axios({
            method: 'get',
            url,
            headers,
        });
    };

    post = (url, data) => {
        const timestamp = moment().utc(true).toISOString()

        let headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        let token = undefined
        const accessToken = localStorage.getItem('accessToken')
        if (accessToken) {
            headers.Authorization = 'Bearer ' + accessToken;
            token = headers.Authorization
        }

        headers.signature = this.generateSignature(
            token,
            data,
            'post',
            this.getUrl(url),
            timestamp
        )

        delete data.access_token;

        let formData = new FormData();
        if (data.file) {
            headers['Content-Type'] = 'multipart/form-data';
            formData.append('file', data.file);
            data = formData;
        } else {
            if (data.array) {
                data = data.array;
            }
        }

        return axios({
            method: 'post',
            url,
            headers,
            data,
        });
    };

    delete = (url, data) => {
        const timestamp = moment().toISOString()

        let esc = encodeURIComponent;
        let query = ''

        if (data.filter) {
            const newData = data.filter
            query = Object.keys(newData)
                .map(k => `${esc(k)}=${esc(newData[k])}`)
                .join('&');
        }

        url = url + '?' + query;

        let headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-timestamp': timestamp
        };
        let token = undefined
        if (data.access_token) {
            headers.Authorization = 'Bearer ' + data.access_token;
            token = headers.Authorization
        }

        headers.signature = this.generateSignature(
            token,
            {},
            'delete',
            this.getUrl(url),
            timestamp
        )

        return axios({
            method: 'delete',
            url,
            headers,
        });
    };

    generateSignature = (token, body, method, url, timestamp) => {
        const key = process.env.VUE_APP_KEY
        const string = `${token}:${md5(
            JSON.stringify(body ?? {}).replace(/\s/gm, ''),
        )}:${method.toLowerCase()}:${url}:${md5(
            timestamp,
        )}:${key}`;

        return md5(string)
    }

    getUrl = (str) => {
        const apiUrl = process.env.VUE_APP_API_URL
        return str.replace(apiUrl, '')
    }
}

export default new Http();