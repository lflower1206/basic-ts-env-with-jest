import Default from "../src/index";

describe("index.spec.ts", () => {
  it("should be passed", done => {
    expect(new Default().sayHi()).toBe("hi!");
    done();
  });
});
