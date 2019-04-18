const db = require("../data/dbConfig.js");
const Hobbits = require("./hobbitsModel.js");

describe("hobbits model", () => {
  describe("insert()", () => {
    afterEach(async () => {
      await db("hobbits").truncate(); // Cleanup after each test so the database is cleaned up
    });

    // it("should insert the provided hobbit into the database", async () => {
    //   const hobbit = await Hobbits.insert({ name: "sam" });
    //   expect(hobbit.name).toBe("sam");
    // });

    it("should insert the provided hobbits into the database", async () => {
      await Hobbits.insert({ name: "sam" });
      await Hobbits.insert({ name: "gaffer" });
      const hobbits = await db("hobbits");
      expect(hobbits).toHaveLength(2);
    });

    it("should insert the provided hobbit into the database", async () => {
      let hobbit = await Hobbits.insert({ name: "sam" });
      expect(hobbit.name).toBe("sam");

      hobbit = await Hobbits.insert({ name: "gaffer" });
      expect(hobbit.name).toBe("gaffer");
    });
  });
});
