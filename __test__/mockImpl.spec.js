test(`mockImplementation`, () => {
  const mockFunc = jest
    .fn(() => `default`)
    .mockImplementation(() => `First Call`)
    .mockImplementation(() => `Second Call`);
  const res = mockFunc();
  //   console.log(res);
});

test(`mockImplementationOnce`, () => {
  const mockfn = jest
    .fn(() => `default`)
    .mockImplementationOnce(() => `FirstCall`)
    .mockImplementationOnce(() => `SecondCall`);
  const res = mockfn(); //
  const res1 = mockfn();
  const res2 = mockfn();
  console.log(res);
  console.log(res1);
  console.log(res2);
});
