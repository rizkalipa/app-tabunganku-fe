import Http from "../util/Http";

const apiUrl = 'https://app-tabunganku-api.vercel.app/api'

export const getTransaction = (data) => {
    return Http.get(`${apiUrl}/transaction/recent-transaction`, data)
}