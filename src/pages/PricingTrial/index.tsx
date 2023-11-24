import React from "react";
import Card from "../../components/Card/index.tsx";
import TopText from "../../components/TopText/index.tsx";
import checkIcon from "../../assets/images/icon-check.svg";

const PricingTrial = () => {
  return (
    <>
      <TopText
        h1="Simple, traffic-based pricing"
        h2="Sign-up for our 30-day trial. No credit card required."
      />
      <Card>
        {/* topCard */}
        <div>
          <div>
            <p>100K PAGEVIEWS</p>
            <div>
              <p>$16.00</p>
              <p>/ month</p>
            </div>
          </div>
          <input type="range" min="10" max="160" step="30" />
          <div>
            <p>Monthly Billing</p>
            <button>Formatar</button>
            <p>Yearly Billing</p>
            <p>25% Discount</p>
          </div>
        </div>
        {/* FooterCard */}
        <div>
          {/* List */}
          <div>
            <ul>
              <div>
                <li>
                  <img src={checkIcon} alt="checkIcon" />
                  <p>Unlimited websites</p>
                </li>
                <li>
                  <img src={checkIcon} alt="checkIcon" />
                  <p>100% data ownership</p>
                </li>
                <li>
                  <img src={checkIcon} alt="checkIcon" />
                  <p>Email reports</p>
                </li>
              </div>
            </ul>
          </div>
          <div>
            <button>Start my trial</button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default PricingTrial;
