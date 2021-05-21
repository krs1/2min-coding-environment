//https://typescript-jp.gitbook.io/deep-dive/type-system/enums


enum AnimalFlags {
  None           = 0,
  HasClaws       = 1 << 0,
  CanFly         = 1 << 1,
}
type Animal = {
  flags: AnimalFlags
}

function printAnimalAbilities(animal: Animal) {
  var animalFlags = animal.flags;
  if (animalFlags & AnimalFlags.HasClaws) {
      console.log('animal has claws');
  }
  if (animalFlags & AnimalFlags.CanFly) {
      console.log('animal can fly');
  }
  if (animalFlags == AnimalFlags.None) {
      console.log('nothing');
  }
}

let animal: Animal = { flags: AnimalFlags.None };
printAnimalAbilities(animal); // nothing
animal.flags |= AnimalFlags.HasClaws;
console.log(animal.flags |= AnimalFlags.HasClaws)

printAnimalAbilities(animal); // animal has claws
animal.flags &= ~AnimalFlags.HasClaws;
console.log(animal.flags &= ~AnimalFlags.HasClaws)
printAnimalAbilities(animal); // nothing
animal.flags |= AnimalFlags.HasClaws | AnimalFlags.CanFly;
console.log(animal.flags & AnimalFlags.HasClaws)
console.log(animal.flags & AnimalFlags.CanFly)
printAnimalAbilities(animal); // animal has claws, animal can fly
console.log(animal.flags |= AnimalFlags.HasClaws | AnimalFlags.CanFly)