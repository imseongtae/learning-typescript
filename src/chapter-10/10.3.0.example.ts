/**
 * 제네릭 클래스
 * @module 10-3-0-Example
 */

class Secret<Key, Value> {
  key: Key;
  value: Value;

  constructor(key: Key, value: Value) {
    this.key = key;
    this.value = value;
  }

  getValue(key: Key): Value | undefined {
    return this.key === key ? this.value : undefined;
  }
}

const storage = new Secret(12345, 'luggage'); // Type: Secret<number, string>

storage.getValue(1987); // Type: string | undefined
