import React, { useState } from "react";
import Card from "../../components/Card/index.tsx";
import TopText from "../../components/TopText/index.tsx";
import List from "../../components/List/index.tsx";
import { Slider } from "@mui/material";

const PricingTrial = () => {
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
    <>
      <TopText
        h1="Simple, traffic-based pricing"
        h2="Sign-up for our 30-day trial. No credit card required."
      />
      <Card>
        {/* topCard */}
        <div className="flex flex-col">
          <div className="flex">
            <p>{pageviews} PAGEVIEWS</p>
            <div className="flex">
              $<p>{price}</p>
              <p>/ month</p>
            </div>
          </div>
          <Slider
            defaultValue={defaultValue}
            step={null}
            marks={marks}
            onChange={handleSliderChange}
            max={marks[marks.length - 1].value}
          />
          <div className="flex">
            <p>Monthly Billing</p>
            <button>Formatar</button>
            <p>Yearly Billing</p>
            <p>25% Discount</p>
          </div>
        </div>
        {/* FooterCard */}
        <div className="flex">
          {/* List */}
          <List />
          <div>
            <button>Start my trial</button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default PricingTrial;
