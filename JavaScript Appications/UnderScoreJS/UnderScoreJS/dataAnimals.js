function getAnimals() {
    var animals = [];

    function Animal(specie, name, legs) {
        this.specie = specie;
        this.name = name;
        this.legs = legs;
    }

    var dog1 = new Animal('dog', 'Sharo', 4);
    var dog2 = new Animal('dog', 'Max', 4);
    var dog3 = new Animal('dog', 'Arq', 4);
    var dog4 = new Animal('dog', 'Rex', 4);
    var cat1 = new Animal('cat', 'Pisana', 4);
    var cat2 = new Animal('cat', 'Chernio', 4);
    var pig1 = new Animal('pig', 'Koleda', 4);
    var pig2 = new Animal('pig', 'Velikden', 4);
    var parrot1 = new Animal('parrot', 'Poli', 2);
    var parrot2 = new Animal('parrot', 'Arq', 2);
    var human1 = new Animal('human', 'Dimo', 2);
    var human2 = new Animal('human', 'Ivan', 2);
    var spider1 = new Animal('spider', 'Penio', 8);
    var spider2 = new Animal('spider', 'Valio', 8);
    var hlebarka1 = new Animal('hlebarka', 'Mima', 6);
    var hlebarka2 = new Animal('hlebarka', 'Raq', 6);
    var stonojka1 = new Animal('stonojka', 'Jane', 100);
    var stonojka2 = new Animal('stonojka', 'Tushtata', 100);

    animals.push(dog1, dog2, dog3, dog4, cat1, cat2, parrot1, parrot2, spider1, spider2,
                  hlebarka1, hlebarka2, stonojka1, stonojka2, human1, human2, pig1, pig2);

    return animals;
}
