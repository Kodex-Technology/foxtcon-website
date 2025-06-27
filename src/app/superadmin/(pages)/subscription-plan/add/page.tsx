'use client';
import React, { useEffect, useState } from 'react';
import './add.scss';
import { featuresList } from '@/constant/organizationFormData';
import { useRouter, useSearchParams } from 'next/navigation';
import { validateForm } from '@/shared/ValidationForm';
import { subscriptionRules } from '@/shared/ValidationRules';
import { showToast } from '@/shared/toastUtils';
import { SuperAdminRoutes } from '@/constant/appRoutes';


interface SubscriptionFormData {
    subscription_name: string;
    subscription_duration: string;
    subscription_description: string;
    subscription_price?: string;
    subscription_validity?: string;
    features: string[];
    [key: string]: unknown;
}
const AddSubscriptionPage = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const planType = searchParams.get('type');
    const isBasic = planType === 'Basic plan';

    const [formData, setFormData] = useState<SubscriptionFormData>({
        subscription_name: '',
        subscription_duration: '',
        subscription_description: '',
        ...(isBasic ? {} : {
            subscription_price: '',
            subscription_validity: '',
        }),
        features: [] as string[],
    });


    const [allFeaturesSelected, setAllFeaturesSelected] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        if (planType) {
            const storageKey = planType.toLowerCase().replace(/\s+/g, '_');
            const storedData = localStorage.getItem(storageKey);

            if (storedData) {
                const parsedData = JSON.parse(storedData);
                setFormData({
                    subscription_name: parsedData.subscription_name || '',
                    subscription_duration: parsedData.subscription_duration || '',
                    subscription_description: parsedData.subscription_description || '',
                    subscription_price: parsedData.subscription_price || '',
                    subscription_validity: parsedData.subscription_validity || '',
                    features: parsedData.features || [],
                });
                setAllFeaturesSelected((parsedData.features || []).length === featuresList.length);
            } else {
                setFormData(prev => ({
                    ...prev,
                    subscription_name: planType,
                    ...(isBasic && { subscription_price: undefined }),
                    ...(isBasic && { subscription_validity: undefined }),
                }));
            }
        }
    }, [planType, isBasic]);


    const handleInputChange = (key: string, value: unknown) => {
        setFormData(prev => ({
            ...prev,
            [key]: value,
        }));

        if (value && value.toString().trim() !== '') {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[key];
                return newErrors;
            });
        }
    };

    const toggleFeature = (featureKey: string) => {
        setFormData(prev => {
            const isSelected = prev.features.includes(featureKey);
            const updatedFeatures = isSelected
                ? prev.features.filter(f => f !== featureKey)
                : [...prev.features, featureKey];

            if (updatedFeatures.length > 0 && errors.features) {
                setErrors(prevErrors => {
                    const newErrors = { ...prevErrors };
                    delete newErrors.features;
                    return newErrors;
                });
            }

            setAllFeaturesSelected(updatedFeatures.length === featuresList.length);

            return {
                ...prev,
                features: updatedFeatures,
            };
        });
    };

    const handleSelectAllFeatures = () => {
        if (allFeaturesSelected) {
            setFormData(prev => ({
                ...prev,
                features: [],
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                features: featuresList.map(f => f.key),
            }));

            if (errors.features) {
                setErrors(prev => {
                    const newErrors = { ...prev };
                    delete newErrors.features;
                    return newErrors;
                });
            }
        }
        setAllFeaturesSelected(!allFeaturesSelected);
    };

    const handlePublish = () => {

        const rulesToUse: Partial<typeof subscriptionRules> = { ...subscriptionRules };

        if (isBasic) {
            delete rulesToUse.subscription_price;
        }

        const validationErrors = validateForm(formData, rulesToUse);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            const storageKey = formData.subscription_name.toLowerCase().replace(/\s+/g, '_');
            const subscriptionData = {
                ...formData,
                id: Date.now().toString(),
                created_at: new Date().toISOString(),
                ...(isBasic && {
                    subscription_price: 0,
                    subscription_validity: 'N/A',
                }),
            };

            localStorage.setItem(storageKey, JSON.stringify(subscriptionData));

            showToast(
                `Subscription "${formData.subscription_name}" saved successfully!`,
                "success",
                () => router.push(SuperAdminRoutes.SUBSCRIPTION_PLAN)
            );

            setFormData({
                subscription_name: '',
                subscription_duration: '',
                subscription_description: '',
                ...(isBasic ? {} : {
                    subscription_price: '',
                    subscription_validity: '',
                }),
                features: [],
            });
            setAllFeaturesSelected(false);
            setErrors({});
        }
    };

    return (
        <div className="container-fluid">
            <div className="add-subscription-page-wrapper">
                <div className="subscription-header">
                    <div className="common-title">
                        <h2>Set Up Subscription Plan</h2>
                    </div>
                </div>
                <div className="form-wrapper">
                    <div className="row">
                        <div className={`${isBasic ? 'col-lg-6' : 'col-lg-4'} mb-3`}>
                            <div className="form-field">
                                <div className="input-field">
                                    <input
                                        type="text"
                                        value={formData.subscription_name}
                                        onChange={(e) => handleInputChange('subscription_name', e.target.value)}
                                        className={formData.subscription_name ? 'filled' : ''}
                                    />
                                    <label >
                                        Name of plan
                                    </label>
                                </div>
                                {errors.subscription_name && (
                                    <p className="error-text">{errors.subscription_name}</p>
                                )}
                            </div>
                        </div>
                        <div className={`${isBasic ? 'col-lg-6' : 'col-lg-4'} mb-3`}>
                            <div className="form-field">
                                <div className="input-field">
                                    <select
                                        value={formData.subscription_duration}
                                        onChange={(e) => handleInputChange('subscription_duration', e.target.value)}
                                        className={`form-select ${formData.subscription_duration ? 'filled' : ''}`}
                                    >
                                        <option value=""></option>
                                        <option value="10">10 Days</option>
                                        <option value="15">15 Days</option>
                                        <option value="30">30 Days</option>
                                    </select>
                                    <label >
                                        Duration for this plan
                                    </label>
                                </div>

                                {errors.subscription_duration && (
                                    <p className="error-text">{errors.subscription_duration}</p>
                                )}
                            </div>
                        </div>

                        {!isBasic && (
                            <div className="col-lg-4 mb-3">
                                <div className="form-field">
                                    <div className="form-feild-col">
                                        <div className="input-field">
                                            <input
                                                type="text"
                                                value={formData.subscription_price || ''}
                                                onChange={(e) => handleInputChange('subscription_price', e.target.value)}
                                                className={formData.subscription_price ? 'filled' : ''}
                                            />
                                            <label >
                                                Enter price in USD
                                            </label>
                                        </div>
                                        <div className="input-field">
                                            <select
                                                value={formData.subscription_validity}
                                                onChange={(e) => handleInputChange('subscription_validity', e.target.value)}
                                            >
                                                <option value="Month">Per Month</option>
                                                <option value="Year">Per Year</option>
                                            </select>
                                        </div>
                                    </div>
                                    {errors.subscription_price && (
                                        <p className="error-text">{errors.subscription_price}</p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-field">
                                <div className="input-field">
                                    <textarea
                                        value={formData.subscription_description}
                                        onChange={(e) => handleInputChange('subscription_description', e.target.value)}
                                        className={formData.subscription_description ? 'filled' : ''}
                                    />
                                    <label >
                                        Enter description
                                    </label>
                                </div>
                                {errors.subscription_description && <p className="error-text">{errors.subscription_description}</p>}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-wrapper">
                    <div className="feature-header">
                        <h2>
                            Select feature
                            <span>
                                Pick the features you want to offer as part of this subscription plan...
                            </span>
                        </h2>
                        <button onClick={handleSelectAllFeatures}>
                            {allFeaturesSelected ? 'Deselect all' : 'Select all'} features
                        </button>
                    </div>

                    <div className="feature-grid">
                        {featuresList.map(({ key, label, icon: Icon }) => (
                            <div className="checkbox-field" key={key}>
                                <label>
                                    <Icon /> {label}
                                </label>
                                <input
                                    type="checkbox"
                                    checked={formData.features.includes(key)}
                                    onChange={() => toggleFeature(key)}
                                />
                            </div>
                        ))}
                    </div>
                    {errors.features && <p className="error-text">{errors.features}</p>}
                </div>

                <div className="subscription-actions">
                    <button className="cancel">Cancel</button>
                    <button onClick={handlePublish}>Publish</button>
                </div>
            </div>
        </div>
    );
};

export default AddSubscriptionPage;