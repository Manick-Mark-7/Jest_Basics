test("addition", () => {
  expect(2 + 2).toBe(4);
});

test("null", () => {
  const val = null;
  expect(val).toBeNull();
  expect(val).toBeDefined();
  expect.assertions(2);
});

//testing arrays

const animals = ["dog", "cat"];

test("Animal array testing", () => {
  expect(animals).toContain("cat");
  expect(animals).toBeInstanceOf(Array);
});

//getting error

function getData() {
  throw new Error("Not found");
}

test("getData test", () => {
  expect(() => getData()).toThrow();
});
