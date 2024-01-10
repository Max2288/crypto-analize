<<<<<<< HEAD
// TODO: поменял расширение файла на .ts, так как в тут полностью отсуствует верстка

export const fetchJsonData = async (url: string, method: string, requestData: any, headers: any) => {
    try {
        const response = await fetch(url, {
            method,
            headers: headers,
            credentials: 'include',
            body: JSON.stringify(requestData)
        });

        if (!response.ok) {
            throw new Error(`HTTP Ошибка! Статус: ${response.status}`);
        }

        const jsonData = await response.json();
        return jsonData;

    } catch (error) {
        throw error;
    }
};
export const fetchEncodedData = async (url: string, method: string, requestData: any, headers: any) => {
    try {
        const response = await fetch(url, {
            method,
            headers: headers,
            credentials: 'include',
            body: new URLSearchParams(requestData)
        });

        if (!response.ok) {
            throw new Error(`HTTP Ошибка! Статус: ${response.status}`);
        }

        const headersData = await response.headers;
        console.log(response);
        return headersData;

    } catch (error) {
        throw error;
    }
=======
export const fetchJsonData = async (url: string, method: string, requestData: any, headers: any) => {
    try {
        const response = await fetch(url, {
            method,
            headers: headers,
            credentials: 'include',
            body: JSON.stringify(requestData)
        });

        if (!response.ok) {
            throw new Error(`HTTP Ошибка! Статус: ${response.status}`);
        }

        const jsonData = await response.json();
        return jsonData;

    } catch (error) {
        throw error;
    }
};

export const fetchEncodedData = async (url: string, method: string, requestData: any, headers: any) => {
    try {
        const response = await fetch(url, {
            method,
            headers: headers,
            credentials: 'include',
            body: new URLSearchParams(requestData)
        });

        if (!response.ok) {
            throw new Error(`HTTP Ошибка! Статус: ${response.status}`);
        }

        const headersData = await response.headers;
        console.log(response);
        return headersData;

    } catch (error) {
        throw error;
    }
>>>>>>> 6aaa058c5478fe56e16d0cd42735584d01d9f0c9
};