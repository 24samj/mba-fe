import { toast } from "react-toastify";
import { AxiosInstance } from "../util/axiosInstances";

export const makePayment = async (payment) => {
    try {
        const { data } = await AxiosInstance.post(`/mba/api/v1/payments`);
        return data;
    } catch (ex) {
        toast.error(ex.message);
        console.log(ex);
    }
};
