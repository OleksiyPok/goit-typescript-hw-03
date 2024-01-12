class Key {
  constructor(
    private signature: number = Math.floor(
      // Math.random() * (10000 - 1000) + 1000
      Math.random() * (5 - 1) + 1
    )
  ) {}

  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key = key) {}

  getKey() {
    return this.key;
  }
}

abstract class House {
  constructor(
    protected door: boolean,
    protected key: object,
    protected tenants: object[]
  ) {}

  public comeIn(person: object): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key === this.key) {
      this.door = true;
    }
  }
  getTenants() {
    return this.tenants;
  }
}

const key = new Key();

const person = new Person(key);

const myHouse = new MyHouse(false, key, []);

myHouse.openDoor(person.getKey());
myHouse.comeIn(person);

export {};
