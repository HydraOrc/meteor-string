sanitizeString = function sanitizeString(str) {
  str = str || '';
  return decodeURI(str).toLocaleLowerCase().trim().replace(/\s\s+/g, ' ');
};

escapeRegExp = function escapeRegExp(str) {
  str = str || '';
  return str.replace(/[-[\]/{}()<>*+?!=.:\\^$|]/g, '\\$&');
};
