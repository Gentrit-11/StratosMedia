import React from 'react';
import './Price.css';

const PricingPlans = () => {
  return (
    <div className="pricing-container" id="price">
      <h1>Social Media Management</h1>
      <p className="subtitle">"The right choice in marketing is like finding the golden key to your success - We are that key!"</p>
      <div className="plans">
        <div className="plan basic">
          <div className="plan-header basic-header">
            <h2>Basic</h2>
          </div>
          <ul>
            <li>10 posts per month.</li>
            <li>Post design.</li>
            <li>Targeting and audience growth.</li>
            <li>Support in Sponsorships.</li>
          </ul>
          <div className="price">€60/Month</div>
        </div>
        <div className="plan premium">
          <div className="plan-header premium-header">
            <h2>Premium</h2>
          </div>
          <ul>
            <li>28 posts per month.</li>
            <li>Post design.</li>
            <li>Content creation.</li>
            <li>5 Video Animations.</li>
            <li>Targeting and audience growth.</li>
            <li>Support in Sponsorships.</li>
            <li>Marketing Plan.</li>
          </ul>
          <div className="price">€170/Month</div>
        </div>
        <div className="plan standard">
          <div className="plan-header standard-header">
            <h2>Standard</h2>
          </div>
          <ul>
            <li>20 posts per month.</li>
            <li>Post design.</li>
            <li>Content creation.</li>
            <li>3 Video Animations.</li>
            <li>Targeting and audience growth.</li>
            <li>Support in Sponsorships.</li>
          </ul>
          <div className="price">€100/Month</div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
