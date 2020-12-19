const input = process.argv.slice(2)[0];

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const regionalIndicatorMap = letters.reduce(
  (acc, cur) => ({
    ...acc,
    [cur]: `:regional_indicator_${cur}:`,
  }),
  {}
);

regionalIndicatorMap[" "] = ":black_small_square:";

const convert = () => {
  return input
    .split("")
    .map((letter) => regionalIndicatorMap[letter])
    .filter((letter) => !!letter)
    .join(" ");
};

console.log(convert());
