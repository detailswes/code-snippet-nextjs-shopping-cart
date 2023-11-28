import { baseUrl } from "@/config";
import axios from "axios";

const useAxios = axios.create({
  baseURL: baseUrl,
});
export default useAxios;
