import { describe, expect, test } from "vitest";
import { getRouteByTitle } from "../../utils/api";

describe("api.ts tests", () => {
  describe("getRouteByTitle", () => {
    test("Not found", () => {
      expect(getRouteByTitle("unknown", "unknown")).toBeUndefined();
    });

    test("dk64", () => {
      expect(getRouteByTitle("dk64", "Any% 5-Kong").steps).toHaveLength(70);
    });

    test("dk64ce", () => {
      expect(getRouteByTitle("dk64ce", "Glitchless Any%").steps).toHaveLength(
        206
      );
    });

    test("dkb", () => {
      expect(getRouteByTitle("dkb", "Any% (Snakeless)").steps).toHaveLength(164);
    });

    test("dkbce", () => {
      expect(getRouteByTitle("dkbce", "Trans%").steps).toHaveLength(1);
    });

    test("yr", () => {
      expect(
        getRouteByTitle("yr", "No Early Doors (120 Pagies)").steps
      ).toHaveLength(145);
    });
  });
});
