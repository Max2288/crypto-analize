export const fetchJsonData = async (url: string, method: string, requestData: any) => {
    try {
        const response = await fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
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