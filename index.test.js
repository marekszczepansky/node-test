import beginsWithCapitalLetter from "./index";

test("test", ()=>{
    expect(beginsWithCapitalLetter("Test")).toBe(true);
});

test("supports null", () => {
    expect(beginsWithCapitalLetter(null)).toBeFalsy();
});

test("supports empty string", () => {
    expect(beginsWithCapitalLetter("")).toBeFalsy();
});

test("should return true when starts with single capital letter", () => {
    expect(beginsWithCapitalLetter("Marek")).toBeTruthy();
});

test("should return true when contains single capital letter only", () => {
    expect(beginsWithCapitalLetter("M")).toBeTruthy();
});

test("should return true when contains many capital letters", () => {
    expect(beginsWithCapitalLetter("MaReK")).toBeTruthy();
});

test("should return true when contains many capital letter only", () => {
    expect(beginsWithCapitalLetter("MAREK")).toBeTruthy();
});

test("should return false when contains many capital letter but the first one", () => {
    expect(beginsWithCapitalLetter("mArEk")).toBeFalsy();
});

test("should return false when contains no capital letter", () => {
    expect(beginsWithCapitalLetter("marek 123 !@$#%^&',")).toBeFalsy();
});

test("should return false when contains no small letter", () => {
    expect(beginsWithCapitalLetter("123MAREK%$#@%$#@!%$")).toBeFalsy();
});