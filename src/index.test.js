import findMissingLetter from "./index";

describe("findMissingLetter Tests", function(){
  it("exampleTests", () => {
    expect(findMissingLetter(['a','b','c','d','f'])).toEqual('e');
    expect(findMissingLetter(['O','Q','R','S'])).toEqual('P');
  });
});