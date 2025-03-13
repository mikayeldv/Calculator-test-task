import axios from "axios";
import { ISite, ITest } from "../types/orderTypes";

const baseUrl = import.meta.env.VITE_SERVER_URL;

const getData = async (): Promise<{ tests: ITest[]; sites: ISite[] }> => {
  const testsUrl = `${baseUrl}/tests`;
  const testsData = await axios.get(testsUrl);

  const sitesUrl = `${baseUrl}/sites`;
  const sitesData = await axios.get(sitesUrl);

  return { tests: testsData.data, sites: sitesData.data };
};

export default getData;
