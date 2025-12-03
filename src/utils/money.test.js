import { it, expect, describe } from "vitest";
import { formatMoney } from "./formatMoney";
describe("formatMoney",()=>{
it("formats 10000 as Rs. 100.00", () => {
  expect(formatMoney(10000)).toBe("Rs. 100.00");
});

it("formats 250 as Rs. 2.50", () => {
  expect(formatMoney(250)).toBe("Rs. 2.50");
});
})

