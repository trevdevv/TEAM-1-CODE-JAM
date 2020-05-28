import React from "react";
import "babel-polyfill";
import renderer from "react-test-renderer";

// Import chart component
import Charts from "../src/components/Charts";

// Expected Chart Data on Render
const ChartData = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  datasets: [
    {
      type: "bar",
      label: "My Contributions",
      data: [10, 20, 5, 8, 10],
      backgroundColor: "rgba(11, 113, 126, 0.7)",
    },
    {
      type: "bar",
      label: "Total Contributions",
      data: [30, 40, 50, 60, 20],
      backgroundColor: [
        "rgba(255,99,132,0.6)",
        "rgba(54,162,235,0.6)",
        "rgba(255,206,86,0.6)",
        "rgba(75,192,192,0.6)",
        "rgba(153,102,255,0.6)",
      ],
    },
  ],
};

// Check charts are rendering correctly
test("Charts are set up correctly", () => {
  const component = renderer.create(<Charts />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // Test that the props are rendered correctly
  const { id, chartData, className } = tree.props;

  expect(id).toBe("chart");
  expect(chartData).toStrictEqual(ChartData);
  expect(className).toBe("chart");
});
