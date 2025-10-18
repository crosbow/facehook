const applyBackendImage = (imagePath) => {
  return `${import.meta.env.VITE_BASE_URL}/${imagePath}`;
};
export { applyBackendImage };
