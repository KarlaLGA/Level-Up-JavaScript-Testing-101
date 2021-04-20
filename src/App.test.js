import { add, total } from "./App";

test("Test 1", () => {
  expect(true).toBeTruthy();
});

test("Add", () => {
  expect(add(1, 2)).toBe(3);
});

test("Total", () => {
  expect(total(5, 20)).toBe("$25");
});

const mock = jest.fn(() => 3);

test("Mock", () => {
  expect(mock(2, 1)).toBe(3);
  expect(mock).toHaveBeenCalledTimes(1);
});
