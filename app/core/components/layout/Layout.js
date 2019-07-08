export const layoutOptions = ["row", "column"];
export const alignmentMainAxis = ["start", "center", "end", "stretch", "space-around", "space-between", "space-evenly"];
export const alignmentCrossAxis = ["start", "center", "end", "stretch", "baseline"];

const normalized = {
  start: "flex-start",
  end: "flex-end"
};

const WHITESPACE = /\s+/g;

const extractAlignAxis = (layoutAlignValue) => {
  const axis = {
    main: "start",
    cross: "stretch"
  };

  const values = layoutAlignValue.toLowerCase().trim().split(WHITESPACE);

  if (values.length > 0) axis.main = values[0] || axis.main;
  if (values.length > 1) axis.cross = values[1] || axis.cross;

  if (alignmentMainAxis.indexOf(axis.main) < 0) axis.main = "start";
  if (alignmentCrossAxis.indexOf(axis.cross) < 0) axis.cross = "stretch";

  return axis;
};

const normalizeAxis = (axis) => {
  const main = normalized[axis.main] || axis.main;
  const cross = normalized[axis.cross] || axis.cross;
  return { main, cross };
};

const toLayoutAlignStyle = (layoutAlignValue) => {
  const axis = normalizeAxis(extractAlignAxis(layoutAlignValue));

  const justifyContent = axis.main;
  const alignItems = axis.cross;

  return { justifyContent, alignItems };
};

const toLayoutStyle = (layoutValue) => {
  const flexDirection = layoutOptions.includes(layoutValue) ? layoutValue : "column";
  return { flexDirection };
};

const Layout = { toLayoutStyle, toLayoutAlignStyle };

export default Layout;
