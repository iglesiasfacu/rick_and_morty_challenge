import axios from "axios";
import handleResourceError from "./handleResourceError";

const getLengthOfResource = async (resource) => {
  try {
    handleResourceError(resource, "getLengthOfResource");
    const apiURL = `https://rickandmortyapi.com/api/${resource}`;
    const response = await axios.get(apiURL);
    return response.data.info.count;
  } catch (error) {
    throw error;
  }
};

export default getLengthOfResource;
