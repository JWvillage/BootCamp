import {RequestOptions} from "http";

export default function customFetch(
    url = '',
    method = 'GET',
    body = {},
    headers = {}
) {
    let targetUrl = "http://localhost:8088/v1/apis/PETSFINDER" + url;

    let option: RequestInit = {};

    option.method = method;

    option.headers = {
        ...headers
    }

    if (Object.keys(body).length !== 0) {
        option.body = JSON.stringify(body);
    }

    return fetch(targetUrl, option)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            let msgData = JSON.parse(JSON.stringify(json));
            return msgData;
        })

}