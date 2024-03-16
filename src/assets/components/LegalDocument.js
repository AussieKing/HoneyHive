import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./LegalDocument.css";

const LegalDocument = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isPrivacyPolicy = location.pathname === "/privacy-policy";

  return (
    <div className="legal-document-container">
      <div className="navigation-links">
        <div
          onClick={() => navigate("/privacy-policy")}
          className={
            isPrivacyPolicy ? "read-more-link active" : "read-more-link"
          }
        >
          Privacy Policy
        </div>
        <div
          onClick={() => navigate("/terms-conditions")}
          className={
            !isPrivacyPolicy ? "read-more-link active" : "read-more-link"
          }
        >
          Terms & Conditions
        </div>
      </div>
      <div className="content-area">
        {isPrivacyPolicy ? (
          <div className="privacy-content">
            <p>WEBSITE PRIVACY POLICY</p>
            <p>
              1. WE RESPECT YOUR PRIVACY
              <br />
              1.1. Honey and Hive Interiors respects your right to privacy and
              is committed to safeguarding the privacy of our customers and
              website visitors. We adhere to the Australian Privacy Principles
              contained in the Privacy Act 1988 (Cth). This policy sets out how
              we collect and treat your personal information.
              <br />
              1.2. "Personal information" is information we hold which is
              identifiable as being about you.
            </p>

            <p>
              2. COLLECTION OF PERSONAL INFORMATION
              <br />
              2.1. Honey and Hive Interiors will, from time to time, receive and
              store personal information you enter onto our website, provided to
              us directly or given to us in other forms.
              <br />
              2.2. You may provide basic information such as your name, phone
              number, address, and email address to enable us to send
              information, provide updates, and process your product or service
              order. We may collect additional information at other times,
              including but not limited to, when you provide feedback, when you
              provide information about your personal or business affairs,
              change your content or email preference, respond to surveys and/or
              promotions, provide financial or credit card information, or
              communicate with our customer support.
              <br />
              2.3. Additionally, we may also collect any other information you
              provide while interacting with us.
            </p>

            <p>
              3. HOW WE COLLECT YOUR PERSONAL INFORMATION
              <br />
              3.1. Honey and Hive Interiors collects personal information from
              you in a variety of ways, including when you interact with us
              electronically or in person, when you access our website, and when
              we provide our services to you. We may receive personal
              information from third parties. If we do, we will protect it as
              set out in this Privacy Policy.
            </p>

            <p>
              4. USE OF YOUR PERSONAL INFORMATION
              <br />
              4.1. Honey and Hive Interiors may use personal information
              collected from you to provide you with information, updates, and
              our services. We may also make you aware of new and additional
              products, services, and opportunities available to you. We may use
              your personal information to improve our products and services and
              better understand your needs.
              <br />
              4.2. Honey and Hive Interiors may contact you by a variety of
              measures including, but not limited to, telephone, email, SMS, or
              mail.
            </p>

            <p>
              5. DISCLOSURE OF YOUR PERSONAL INFORMATION
              <br />
              5.1. We may disclose your personal information to any of our
              employees, officers, insurers, professional advisers, agents,
              suppliers, or subcontractors insofar as reasonably necessary for
              the purposes set out in this Policy. Personal information is only
              supplied to a third party when it is required for the delivery of
              our services.
              <br />
              5.2. We may from time to time need to disclose personal
              information to comply with a legal requirement, such as a law,
              regulation, court order, subpoena, warrant, in the course of a
              legal proceeding, or in response to a law enforcement agency
              request.
              <br />
              5.3. We may also use your personal information to protect the
              copyright, trademarks, legal rights, property, or safety of Honey
              and Hive Interiors, www.honeyandhiveinteriors.com, its customers,
              or third parties.
              <br />
              5.4. Information that we collect may from time to time be stored,
              processed in, or transferred between parties located in countries
              outside of Australia.
              <br />
              5.5. If there is a change of control in our business or a sale or
              transfer of business assets, we reserve the right to transfer to
              the extent permissible at law our user databases, together with
              any personal information and non-personal information contained in
              those databases. This information may be disclosed to a potential
              purchaser under an agreement to maintain confidentiality. We would
              seek to only disclose information in good faith and where required
              by any of the above circumstances.
              <br />
              5.6. By providing us with personal information, you consent to the
              terms of this Privacy Policy and the types of disclosure covered
              by this Policy. Where we disclose your personal information to
              third parties, we will request that the third party follow this
              Policy regarding handling your personal information.
            </p>

            <p>
              6. SECURITY OF YOUR PERSONAL INFORMATION
              <br />
              6.1. Honey and Hive Interiors is committed to ensuring that the
              information you provide to us is secure. In order to prevent
              unauthorized access or disclosure, we have put in place suitable
              physical, electronic, and managerial procedures to safeguard and
              secure information and protect it from misuse, interference, loss,
              and unauthorized access, modification, and disclosure.
              <br />
              6.2. The transmission and exchange of information are carried out
              at your own risk. We cannot guarantee the security of any
              information that you transmit to us, or receive from us. Although
              we take measures to safeguard against unauthorized disclosures of
              information, we cannot assure you that personal information that
              we collect will not be disclosed in a manner that is inconsistent
              with this Privacy Policy.
            </p>

            <p>
              7. ACCESS TO YOUR PERSONAL INFORMATION
              <br />
              7.1. You may request details of personal information that we hold
              about you in accordance with the provisions of the Privacy Act
              1988 (Cth). A small administrative fee may be payable for the
              provision of information. If you would like a copy of the
              information, which we hold about you or believe that any
              information we hold on you is inaccurate, out of date, incomplete,
              irrelevant, or misleading, please email us at [insert Honey and
              Hive Interiors email].
              <br />
              7.2. We reserve the right to refuse to provide you with
              information that we hold about you, in certain circumstances set
              out in the Privacy Act.
            </p>

            <p>
              8. COMPLAINTS ABOUT PRIVACY
              <br />
              8.1. If you have any complaints about our privacy practices,
              please feel free to send details of your complaints to Honey and
              Hive Interiors. We take complaints very seriously and will respond
              shortly after receiving written notice of your complaint.
            </p>

            <p>
              9. CHANGES TO PRIVACY POLICY
              <br />
              9.1. Please be aware that we may change this Privacy Policy in the
              future. We may modify this Policy at any time, in our sole
              discretion, and all modifications will be effective immediately
              upon our posting of the modifications on our website or notice
              board. Please check back from time to time to review our Privacy
              Policy.
            </p>

            <p>
              10. WEBSITE
              <br />
              10.1. When you visit our website www.honeyandhiveinteriors.com ,
              we may collect certain information such as browser type, operating
              system, website visited immediately before coming to our site,
              etc. This information is used in an aggregated manner to analyze
              how people use our site, such that we can improve our service.
              <br />
              10.2. Cookies: We may from time to time use cookies on our
              website. Cookies are very small files which a website uses to
              identify you when you come back to the site and to store details
              about your use of the site. Cookies are not malicious programs
              that access or damage your computer. Most web browsers
              automatically accept cookies but you can choose to reject cookies
              by changing your browser settings. However, this may prevent you
              from taking full advantage of our website. Our website may from
              time to time use cookies to analyze website traffic and help us
              provide a better website visitor experience. In addition, cookies
              may be used to serve relevant ads to website visitors through
              third party services such as Google Adwords. These ads may appear
              on this website or other websites you visit.
              <br />
              10.3. Third-party sites: Our site may from time to time have links
              to other websites not owned or controlled by us. These links are
              meant for your convenience only. Links to third-party websites do
              not constitute sponsorship or endorsement or approval of these
              websites. Please be aware that Honey and Hive Interiors is not
              responsible for the privacy practices of other such websites. We
              encourage our users to be aware, when they leave our website, to
              read the privacy statements of each and every website that
              collects personally identifiable information.
            </p>
          </div>
        ) : (
          <div className="terms-content">
            <div className="terms-content">
              <p>HONEY & HIVE INTERIORS TERMS AND CONDITIONS OF USE</p>

              <p>
                1. ABOUT OUR SERVICES
                <br />
                1.1. Welcome to Honey & Hive Interiors. Our services encompass a
                range of interior design solutions, including Concept Design &
                Development, Documentation, Project Management, Furniture
                Specifications, and Styling (the 'Services').
                <br />
                1.2. Honey & Hive Interiors operates with a commitment to
                providing quality design services. By engaging with our
                services, it is understood that you have read, understood, and
                agreed to these terms (the 'Terms'). If you disagree with any
                part of the Terms, please discontinue the use of our services
                immediately.
                <br />
                1.3. We reserve the right to amend these Terms as necessary.
                Changes will be effective immediately upon posting on our
                website or direct communication to you. We recommend keeping a
                copy of these Terms for your reference.
              </p>

              <p>
                2. AGREEMENT TO TERMS
                <br />
                By continuing to use our services or by providing your
                acceptance in writing or electronically, you acknowledge and
                agree to these Terms.
              </p>

              <p>
                3. INTELLECTUAL PROPERTY AND COPYRIGHT
                <br />
                3.1. All material associated with our services, including
                designs, documentation, and website content, is protected under
                copyright laws. Unless specified, all intellectual property
                rights are owned by Honey & Hive Interiors.
                <br />
                3.2. We grant you a non-exclusive, revocable license to use our
                services and website materials for your personal, non-commercial
                use, including the right to:
                <br />
                (a) Use the services as per these Terms;
                <br />
                (b) Store website content in your device's cache memory;
                <br />
                (c) Print materials for personal use.
                <br />
                3.3. No other rights are granted. All other rights are expressly
                reserved by Honey & Hive Interiors.
              </p>

              <p>
                4. PRIVACY POLICY
                <br />
                Our commitment to your privacy is detailed in our Privacy
                Policy, available on our website, which forms part of these
                Terms.
              </p>

              <p>
                5. GENERAL DISCLAIMER
                <br />
                5.1. Our Terms do not limit any statutory rights under
                Australian law, including the Australian Consumer Law.
                <br />
                5.2. Subject to statutory constraints, we exclude all implied
                terms and warranties whether statutory or otherwise, relating to
                our services. Honey & Hive Interiors is not liable for any
                indirect damages arising in connection with our services.
              </p>

              <p>
                6. LIMITATION OF LIABILITY
                <br />
                6.1. Our total liability in connection with the Services will
                not exceed the cost of resupplying our services to you.
                <br />
                6.2. Honey & Hive Interiors is not liable for any direct,
                indirect, incidental, or consequential damages arising from your
                use of our services.
              </p>

              <p>
                7. INDEMNITY
                <br />
                You agree to indemnify Honey & Hive Interiors and its affiliates
                against all claims, losses, or damages arising from your
                content, use of our services, or breach of these Terms.
              </p>

              <p>
                8. JURISDICTION
                <br />
                These Terms are governed by the laws of Queensland. Disputes
                arising will be exclusively subject to the jurisdiction of the
                courts of Queensland.
              </p>

              <p>
                9. SEVERABILITY
                <br />
                If any part of these Terms is found to be invalid or
                unenforceable, that part will be severed, and the remaining
                Terms will remain in effect.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LegalDocument;
