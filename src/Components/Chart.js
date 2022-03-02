import React, { useEffect, useState, useCallback } from "react";
import { Doughnut } from "react-chartjs-2";

function Chart(props) {
  const array1 = [];
  const [color, setcolor] = useState([]);
  function getRandomColor() {
    var letters = "0123456789ABCDEF".split("");
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // for (var i = 0; i < 2; i++) {
  //   setcolor([...color, getRandomColor()]);
  // }
  const data1 = {
    labels: props.chartLabelArray,
    datasets: [
      {
        label: "My First Dataset",
        data: props.chartValueArray,
        backgroundColor: color,
      },
    ],
  };

  const initialChartColors = () => {
    for (var i = 0; i < 10; i++) {
      array1[i] = getRandomColor();
    }
    setcolor(array1, ...color);
  };

  useEffect(() => {
    setcolor([getRandomColor(), ...color]);
    console.log(color);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.totalExpense]);
  useEffect(() => {
    cb();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cb = useCallback(() => {
    initialChartColors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mr-[30px]">
      <Doughnut data={data1} redraw={true} responsove={true} />
    </div>
  );
}

export default Chart;
