import axios from "axios";
import generateArrayOfResource from "./generateArrayOfResource";
import handleResourceError from "./handleResourceError";

const getFullResource = async (resource) => {
  try {
    handleResourceError(resource, "getFullResource");

    const resourceIds = await generateArrayOfResource(resource);

    const response = await axios.get(
      `https://rickandmortyapi.com/api/${resource}/${resourceIds}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getFullResource;
