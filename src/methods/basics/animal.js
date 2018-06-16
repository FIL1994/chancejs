
import { initOptions, testRange } from "../../helpers";
import { get, pick } from "../utils";

const animal = options => {
  options = initOptions(options);

  //returns a random animal
  options = initOptions(options);

  if (typeof options.type !== "undefined") {
    //if user does not put in a valid animal type, user will get an error
    testRange(
      !get("animals")[options.type.toLowerCase()],
      "Please pick from desert, ocean, grassland, forest, zoo, pets, farm."
    );
    //if user does put in valid animal type, will return a random animal of that type
    return pick(get("animals")[options.type.toLowerCase()]);
  }
  //if user does not put in any animal type, will return a random animal regardless
  let animalTypeArray = [
    "desert",
    "forest",
    "ocean",
    "zoo",
    "farm",
    "pet",
    "grassland"
  ];
  return pick(get("animals")[pick(animalTypeArray)]);
};

export default animal;
