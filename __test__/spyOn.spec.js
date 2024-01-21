const { getData } = require(`../app`);
const crypto = require(`crypto`);

test(`SpyOn`, async () => {
  jest.spyOn(crypto, `randomBytes`).mockResolvedValueOnce(`bytes`);
  const res = await getData();
  console.log(res);
  expect(res).toBe("bytes");
});
