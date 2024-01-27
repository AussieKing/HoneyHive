import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './LegalDocument.css'; 

const LegalDocument = () => {
  const navigate = useNavigate(); 
  const location = useLocation();
  const isPrivacyPolicy = location.pathname === '/privacy-policy';

  return (
    <div className="legal-document-container">
      <div className="navigation-links">
        <div
          onClick={() => navigate('/privacy-policy')}
          className={isPrivacyPolicy ? 'read-more-link active' : 'read-more-link'}
        >
          Privacy Policy
        </div>
        <div
          onClick={() => navigate('/terms-conditions')}
          className={!isPrivacyPolicy ? 'read-more-link active' : 'read-more-link'}
        >
          Terms & Conditions
        </div>
      </div>
      <div className="content-area">
        {isPrivacyPolicy ? (
          <div className="privacy-content">
            {/* Content for Privacy Policy here */}
          </div>
        ) : (
          <div className="terms-content">
            {/* Content for Terms & Conditions here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default LegalDocument;
