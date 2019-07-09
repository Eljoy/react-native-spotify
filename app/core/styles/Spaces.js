export const spaceScale = [
  0,
  4,
  8,
  16,
  32,
  64
];

const createScaledPropertyGetter = (property) => (x) => {
  return (typeof x === "number" && typeof spaceScale[x] === "number")
    ? { [property]: spaceScale[x] }
    : null;
};

export const getMargin = createScaledPropertyGetter("margin");
export const getMarginHorizontal = createScaledPropertyGetter("marginHorizontal");
export const getMarginVertical = createScaledPropertyGetter("marginVertical");

export const getPadding = createScaledPropertyGetter("padding");
export const getPaddingHorizontal = createScaledPropertyGetter("paddingHorizontal");
export const getPaddingVertical = createScaledPropertyGetter("paddingVertical");
