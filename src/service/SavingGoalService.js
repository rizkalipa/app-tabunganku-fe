import Http from "../util/Http";

const apiUrl = 'https://app-tabunganku-api.vercel.app/api'

export const getSavingGoals = (data) => {
    return Http.get(`${apiUrl}/goals/recent-goals`, data)
}