import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080'
});

export default api;

export function handleError(error, router, openSnackbar) {
    if (
        error.response !== undefined &&
        error.response !== null &&
        error.response.status == 506
    ) {
        router.push("/signout");
    } else if (
        error.response !== undefined &&
        error.response.data !== null &&
        error.response.data.errors.length !== 0
    ) {
        openSnackbar("error", error.response.data.errors[0]);
    } else {
        openSnackbar("error", error.message);
    }
}