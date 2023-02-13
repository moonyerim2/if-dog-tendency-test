export const getRandomIdArr = (dogs, max, counts, species) => {
  let randomArr = [];

  const dogSpeciesArr = Object.keys(dogs.allDogName);
  const id = dogSpeciesArr.indexOf(species);

  while (randomArr.length < counts) {
    const randomNumber = Math.floor(Math.random() * max);

    if (id == randomNumber || randomArr.includes(randomNumber)) {
      continue;
    }
    randomArr.push(randomNumber);
  }
  return randomArr;
};
