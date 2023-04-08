
const LOCALSTORAGE_KEY = "animals";

export const getAnimalFromLs = <AniamlData>(): AniamlData[] => {
  let animalFromLS = localStorage.getItem(LOCALSTORAGE_KEY) || "[]";
  return JSON.parse(animalFromLS);
};



export const saveAnimalToLs = <AniamlData>(data: AniamlData): void => {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
};


