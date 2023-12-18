import React, { useState } from "react";

import { Slider } from "@mui/material";

const PriceSlider = () => {
  const defaultValue = 16;
  const [price, setPrice] = useState(16);
  const [pageviews, setPageviews] = useState("100K");

  const marks = [
    { value: 8, price: "8" },
    { value: 12, price: "12" },
    { value: 16, price: "16" },
    { value: 24, price: "24" },
    { value: 36, price: "36" },
  ];

  const handleSliderChange = (e) => {
    const price = parseInt(e.target.value);

    let views = "100K"; // Valor padrão de visualizações

    if (price === 8) {
      views = "10K";
    } else if (price === 12) {
      views = "50K";
    } else if (price === 16) {
      views = "100K";
    } else if (price === 24) {
      views = "500K";
    } else if (price === 36) {
      views = "1M";
    }
    setPrice(price);
    setPageviews(views);
  };

  return (
    <Slider
      defaultValue={defaultValue}
      step={null}
      marks={marks}
      onChange={handleSliderChange}
    />
  );
};

export default PriceSlider;
