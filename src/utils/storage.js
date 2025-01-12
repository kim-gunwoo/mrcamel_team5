const storage = {
  set: (key, object) => {
    if (!localStorage) return null;

    localStorage[key] =
      typeof object === "string" ? object : JSON.stringify(object);
  },
  get: (key) => {
    if (!localStorage) return null;
    if (!localStorage[key]) return null;

    try {
      const parsed = JSON.parse(localStorage[key]);
      return parsed;
    } catch (e) {
      return localStorage[key];
    }
  },
  remove: (key) => {
    if (!localStorage) return null;
    if (localStorage[key]) localStorage.removeItem(key);
  },
  clear: () => {
    if (!localStorage) return null;
    localStorage.clear();
  },
};

export default storage;
