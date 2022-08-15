import getLengthOfResource from "./getLengthOfResource";
import handleResourceError from "./handleResourceError";

const generateArrayOfResource = async (resource) => {
  try {
    handleResourceError(resource, "generateArrayOfResource");

    const resourceLength = await getLengthOfResource(resource);

    const resourceIdsArray = new Array(resourceLength)
      .fill()
      .map((_, index) => index + 1);

    if (!resourceIdsArray.length) {
      throw new Error("Ocurrio un error al crear el array de Ids");
    }

    return resourceIdsArray;
  } catch (error) {
    throw error;
  }
};

export default generateArrayOfResource;
