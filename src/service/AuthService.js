import Http from "../util/Http";

const apiUrl = 'https://app-tabunganku-api.vercel.app/api'

export const Login = (data) => {
    return Http.post(`${apiUrl}/auth/login`, data)
}

export const UserProfile = () => {
    return Http.get(`${apiUrl}/user`, {})
}