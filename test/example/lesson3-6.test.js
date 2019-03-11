import buildFlower from "../../code/lesson3/lesson3-6"

test("build flower", () => {
   expect(buildFlower([1,0,0,0,1,0,0,0,0,1], 2)).toBe(false);
});