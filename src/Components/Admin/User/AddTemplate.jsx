import React, { useState, lazy, Suspense,useEffect } from 'react';
import './AddTemplate.css';

const Template1 = lazy(() => import('../Templates/Template1/Template1'));
const Template2 = lazy(() => import('../Templates/Template2/Template2'));
const Template3 = lazy(() => import('../Templates/Template3/Template3'));
const Template4 = lazy(() => import('../Templates/Template4/Template4'));
const Template5 = lazy(() => import('../Templates/Template5/Template5'));
import '../Templates/Template1/Template1.css';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { BASE_URL } from '../../../Utils/config';
import { useNavigate } from "react-router-dom";



const TemplateSelector = () => {
        const navigate = useNavigate();
    const [selectedTemplate, setSelectedTemplate] = useState(1);  
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({});
    useEffect(() => {
        return () => {
            if (location.pathname === "/add-user") {
                localStorage.removeItem("tempUserData");
                console.log("User data removed from localStorage");
            }
        };
    }, [location]);
    const templates = [
        {
            id: 1,
            name: "Template 1",
            component: Template1,
        },
        {
            id: 2,
            name: "Template 2",
            component: Template2,
        },
        {
            id: 3,
            name: "Template 3",
            component: Template3,
        },
        {
            id: 4,
            name: "Template 4",
            component: Template4,
        },
        {
            id: 5,
            name: "Template 5",
            component: Template5,
        }
    ];

    const base64ToFile = (base64String, fileName) => {
        const arr = base64String.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], fileName, { type: mime });
    };
    
    const renderTemplatePreview = () => {
        const selectedTemplateData = templates.find(temp => temp.id === selectedTemplate);
        
        if (!selectedTemplateData) return null;
        
        const TemplateComponent = selectedTemplateData.component;
        
        return (
            <Suspense fallback={<div className="loading-preview">Loading template...</div>}>
                <TemplateComponent />
            </Suspense>
        );
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submit button clicked");
    
        setIsLoading(true);
        setError(null);
    
        try {
            const tempUserData = JSON.parse(localStorage.getItem("tempUserData")) || {};
            const finalData = { ...tempUserData, ...formData };
    
            const formDataToSend = new FormData();
    
 
            Object.keys(finalData).forEach(key => {
                if (key !== 'logo' && key !== 'social_media_links' && key !== 'reEnterPassword') {
                    formDataToSend.append(key, finalData[key]);
                }
            });
    
     
            if (finalData.logo && finalData.logo.startsWith("data:image")) {
                const logoFile = base64ToFile(finalData.logo, "logo.png");
                formDataToSend.append('logo', logoFile);
            }
    
   
            const validSocialLinks = finalData.social_media_links?.filter(link => link.trim() !== '') || [];
            formDataToSend.append('social_media_links', JSON.stringify(validSocialLinks));
    
            console.log("Submitting form data:", finalData);
    
            const response = await axios.post(`${BASE_URL}/nfc/users/`, formDataToSend, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
    
            console.log('User created successfully:', response.data);
            localStorage.removeItem("tempUserData");
            navigate('/add-user');
        } catch (err) {
            console.error('Error creating user:', err);
            setError(err.response?.data?.error || 'An error occurred');
        } finally {
            setIsLoading(false);
        }
    };
    
    
    return (
        <div className="add-users-container">
            <h1 className="page-title">Add Users</h1>
        
            <div className="main-container">
                <div className="preview-container">
                    <h2 className="section-title">Preview</h2>
                    <div className="preview-wrapper">
                        {renderTemplatePreview()}
                    </div>
                </div>
                
                <div className="conttttemp">
                    <div className="templates-container">
                        <div className="template-header section">
                            <h2 className="sectionsss-title">Change Template</h2>
                        </div>
        
                        <div className="templates-grid">
                            {templates.map((template) => {
                                const TemplateComponent = template.component;
                                
                                return (
                                    <div
                                        key={template.id}
                                        className={`template-item ${selectedTemplate === template.id ? 'selected' : ''}`}
                                        onClick={() => setSelectedTemplate(template.id)}
                                    >
                                        <div className="template-preview">
                                            <div className="template-thumbnail">
                                                <Suspense fallback={<div className="loading-thumbnail">Loading...</div>}>
                                                    <div className="scaled-template-view">
                                                        <TemplateComponent miniPreview={true} />
                                                    </div>
                                                </Suspense>
                                            </div>
                                          
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="action-buttons-container">
                        <button className="btn-cancel">Cancel</button>
                      <button className="btn-submit" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TemplateSelector;