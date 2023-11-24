import React, { useState } from "react";
import Card from "../../components/Card/index.tsx";
import TopText from "../../components/TopText/index.tsx";
import List from "../../components/List/index.tsx";

const PricingTrial = () => {
  const defaultValue = "85";
  const [value, setValue] = useState(defaultValue);

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
            <p>100K PAGEVIEWS</p>
            <div className="flex">
              $<p>{value}</p>
              <p>/ month</p>
            </div>
          </div>
          <input
            type="range"
            min="10"
            max="160"
            step="15"
            defaultValue={defaultValue}
            onChange={(e) => setValue(e.target.value)}
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
