import axios from "axios";

function apiHandler() {

    const getLastApiVersion = async () => {
        const versionsUrl = 'https://ddragon.leagueoflegends.com/api/versions.json'
        const response = await axios.get<string[]>(versionsUrl);
        const data: string = await response.data[0]

        return data
    }

    return {
        getLastApiVersion
    }
}

const api = apiHandler()
export default api