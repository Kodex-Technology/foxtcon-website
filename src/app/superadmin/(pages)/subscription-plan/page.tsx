'use client';
import React, { useEffect, useState } from "react";
import "./page.scss";
import { useRouter } from "next/navigation";
import { SuperAdminRoutes } from "@/constant/appRoutes";
import SubscriptionCard from "@/components/superadmin/Subscription/SubcriptionCard/Subscriptioncard";
import { plans } from "@/constant/subscriptionData";
import { NoSubscriptionIcon } from "@/svgs";

const SubscriptionPage = () => {
  const router = useRouter();

  const [basicPlan, setBasicPlan] = useState<any>(null);
  const [standardPlan, setStandardPlan] = useState<any>(null);
  const [premiumPlan, setPremiumPlan] = useState<any>(null);
  const [customPlan, setCustomPlan] = useState<any>(null);

  const handleNavigate = (planType: string) => {
    router.push(`${SuperAdminRoutes.SUBSCRIPTION_PLAN_ADD}?type=${planType}`);
  };

  useEffect(() => {
    const basic = localStorage.getItem('basic_plan');
    const standard = localStorage.getItem('standard_plan');
    const premium = localStorage.getItem('premium_plan');
    const custom = localStorage.getItem('custom_plan');

    if (basic) setBasicPlan(JSON.parse(basic));
    if (standard) setStandardPlan(JSON.parse(standard));
    if (premium) setPremiumPlan(JSON.parse(premium));
    if (custom) setCustomPlan(JSON.parse(custom));
  }, []);

  return (
    <div className="container-fluid">
      <div className="subscription-page-wrapper">
        <div className="subscription-header">
          <div className="common-title">
            <h2>Subscription plan</h2>
          </div>
        </div>

        <div className="subcription-card-wrapper">
          <div className="row">
            <div className="col-lg-4 mb-3">
              <SubscriptionCard
                title={plans.Basic.title}
                description={plans.Basic.shortDescription}
                onNavigate={handleNavigate}
                planData={basicPlan}
              />
            </div>
            <div className="col-lg-4 mb-3">
              <SubscriptionCard
                title={plans.Standard.title}
                description={plans.Standard.shortDescription}
                onNavigate={handleNavigate}
                planData={standardPlan}
              />
            </div>
            <div className="col-lg-4 mb-3">
              <SubscriptionCard
                title={plans.Premium.title}
                description={plans.Premium.shortDescription}
                onNavigate={handleNavigate}
                planData={premiumPlan}
              />
            </div>
            <div className="col-lg-4 mb-3">
              <SubscriptionCard
                title={plans.Custom.title}
                description={plans.Custom.shortDescription}
                onNavigate={handleNavigate}
                planData={customPlan}
              />
            </div>
          </div>
        </div>
        {!basicPlan && !standardPlan && !premiumPlan && !customPlan && (
          <div className="no-data-available">
            <NoSubscriptionIcon />
            <p>There is no subscription plans created yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscriptionPage;
