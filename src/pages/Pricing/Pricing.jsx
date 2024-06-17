import React from 'react';
import './Pricing.css';

const Pricing = () => {
  const pricingPlans = [
    { name: 'Individual', price: '$5', description: 'per month', details: 'Perfect for individual use' },
    { name: 'Duo', price: '$9', description: 'per month', details: 'Ideal for you and a partner' },
    { name: 'Group', price: '$4', description: 'per member, up to 10 members', details: 'Great for teams and small groups' }
  ];

  return (
    <div className='pricing'>
      <div className="pricing-intro">
        <h1>Our Pricing Plans</h1>
        <p>Choose the plan that fits your needs and start your crypto journey with us.</p>
      </div>
      <div className="pricing-table">
        {pricingPlans.map((plan, index) => (
          <div className="pricing-plan" key={index}>
            <h2>{plan.name}</h2>
            <p className="price">{plan.price}</p>
            <p className="description">{plan.description}</p>
            <p className="details">{plan.details}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing;
