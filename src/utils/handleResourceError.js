const handleResourceError = (resource, functionName) => {
  const all_resources = ["character", "location", "episode"];
  if (!resource || !all_resources.includes(resource)) {
    throw new Error(
      `No existe o falta definir recurso en la funcion: ${functionName}`
    );
  }
};

export default handleResourceError;
