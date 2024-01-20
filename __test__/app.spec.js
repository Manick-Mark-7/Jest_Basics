const { getData } = require("../app");
const crypto = require("crypto");

jest.mock("crypto");

test("Fetch Data", async () => {
  crypto.randomBytes.mockResolvedValueOnce("byte");
  //mockResolvedValueOnce works as
  // crypto.randomBytes.mockImplementationOnce(() => Promise.resolve("bytes"));
  const res = await getData();
  console.log(res);
});
