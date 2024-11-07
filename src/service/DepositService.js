import Http from "../util/Http";

const apiUrl = 'https://app-tabunganku-api.vercel.app/api'

export const getBalance = (data) => {
    return Http.get(`${apiUrl}/deposit/user-balance`, data)
}

export const getBalancePercentage = (data) => {
    return Http.get(`${apiUrl}/deposit/user-balance-percentage`, data)
}