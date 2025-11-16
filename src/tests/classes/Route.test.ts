import { expect, test } from "vitest";
import { Route } from "../../classes/Route";

test("Route instantiation sanity test", () => {
  expect(new Route("", "", [])).toBeInstanceOf(Route);
});
