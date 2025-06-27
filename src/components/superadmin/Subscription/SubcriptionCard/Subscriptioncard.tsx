"use client";
import React from "react";
import { NavigateIcon, SubscriptionFeatureIcon } from "@/svgs";

interface SubscriptionCardProps {
  title: string;
  description: string;
  planData?: {
    subscription_name: string;
    subscription_price: string;
    subscription_duration: string;
    subscription_validity: string;
    subscription_description: string;
    features: string[];
  };
  onNavigate: (type: string) => void;
}

const SubscriptionCard = ({
  title,
  description,
  planData,
  onNavigate,
}: SubscriptionCardProps) => {
  return (
    <div className="subscription-card">
      <div className="subscription-card-header">
        <div className="subscription-card-header-col">
          <div className="common-title">
            <h2>{title}</h2>
          </div>
          <button onClick={() => onNavigate(title)}>
            <NavigateIcon />
          </button>
        </div>
        <div className="subscription-card-header-col">
          <p>{description}</p>
        </div>
      </div>
      {planData && (
        <>
          <div className="subscription-card-pricing">
            {planData?.subscription_name == "Basic plan" ? (
              <h2>Free</h2>
            ) : (
              <h2>
                {planData?.subscription_price}
                <span>/{planData?.subscription_validity}</span>
              </h2>
            )}
            <p> valid for {planData?.subscription_duration} days</p>
          </div>
          <div className="subscription-card-description">
            <h2>Description</h2>
            <p>{planData?.subscription_description}</p>
          </div>
          <div className="subscription-card-features">
            <h2>Features</h2>
            <ul>
              {planData?.features.map((feature, i) => (
                <li key={i}>
                  <SubscriptionFeatureIcon />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default SubscriptionCard;
