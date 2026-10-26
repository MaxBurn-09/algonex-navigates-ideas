import { describe, expect, it } from "vitest";
import { EVENT } from "@/lib/event-config";

describe("AlgoNex prize pool", () => {
  it("sets the total prize pool to two lakh rupees plus", () => {
    expect(EVENT.prizePoolAmount).toBe(200000);
    expect(EVENT.prizePoolLabel).toBe("₹2 Lakh+");
  });
});