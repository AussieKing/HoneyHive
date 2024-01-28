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
            <p>
              <strong>WEBSITE PRIVACY POLICY</strong>
            </p>
            <p>
              <strong>1. WE RESPECT YOUR PRIVACY</strong>
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
              <strong>2. COLLECTION OF PERSONAL INFORMATION</strong>
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
              <strong>3. HOW WE COLLECT YOUR PERSONAL INFORMATION</strong>
              <br />
              3.1. Honey and Hive Interiors collects personal information from
              you in a variety of ways, including when you interact with us
              electronically or in person, when you access our website, and when
              we provide our services to you. We may receive personal
              information from third parties. If we do, we will protect it as
              set out in this Privacy Policy.
            </p>

            <p>
              <strong>4. USE OF YOUR PERSONAL INFORMATION</strong>
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
              <strong>5. DISCLOSURE OF YOUR PERSONAL INFORMATION</strong>
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
              <strong>6. SECURITY OF YOUR PERSONAL INFORMATION</strong>
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
              <strong>7. ACCESS TO YOUR PERSONAL INFORMATION</strong>
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
              <strong>8. COMPLAINTS ABOUT PRIVACY</strong>
              <br />
              8.1. If you have any complaints about our privacy practices,
              please feel free to send details of your complaints to Honey and
              Hive Interiors. We take complaints very seriously and will respond
              shortly after receiving written notice of your complaint.
            </p>

            <p>
              <strong>9. CHANGES TO PRIVACY POLICY</strong>
              <br />
              9.1. Please be aware that we may change this Privacy Policy in the
              future. We may modify this Policy at any time, in our sole
              discretion, and all modifications will be effective immediately
              upon our posting of the modifications on our website or notice
              board. Please check back from time to time to review our Privacy
              Policy.
            </p>

            <p>
              <strong>10. WEBSITE</strong>
              <br />
              10.1. When you visit our website [insert Honey and Hive Interiors
              website URL], we may collect certain information such as browser
              type, operating system, website visited immediately before coming
              to our site, etc. This information is used in an aggregated manner
              to analyze how people use our site, such that we can improve our
              service.
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
              <p>
                <strong>TERMS OF PAYMENT:</strong>
                <br />
                Payment is due within 7 days of receiving the invoice.
              </p>

              <p>
                <strong>DESIGN FEES:</strong>
                <br />
                We charge a flat fee of $290 (inc gst) for the Initial
                Consultation, an hourly fixed fee of $250/hr (inc gst) for any
                Concept Design & Development work in Stage 1 & 2, and an hourly
                fixed fee of $150.00/hr (inc gst) across our services offered in
                Phases 3-5: Documentation, Project Management, Furniture
                Specifications & Styling.
              </p>

              <p>
                <strong>CLIENT MEETINGS:</strong>
                <br />
                The Initial Consultation Meeting is set at $290 (inc gst) unless
                communicated otherwise. *Travel fees may apply. Meetings beyond
                what is outlined in the Fee Proposal will be charged at an
                hourly rate of $150.00 (inc gst).
              </p>

              <p>
                <strong>REVISIONS:</strong>
                <br />
                We allow for one round of revisions to all documentation issued
                by Honey & Hive Interiors. Any further revisions required will
                be billed at an hourly rate of $150.00 (inc gst). It is
                advisable to review your plans carefully to reduce the need for
                multiple revisions.
              </p>

              <p>
                <strong>CHANGE OF SCOPE:</strong>
                <br />
                Additional fees may occur if there is a change in the project's
                scope. If you decide to change the project's direction from what
                was originally outlined in the design proposal, a new fee
                proposal will be issued. Please refer to the scope of works in
                the project design proposal for further details.
              </p>

              <p>
                <strong>INVOICES FROM OTHER CONSULTANTS:</strong>
                <br />
                Invoices for services provided by consultants outside of Honey &
                Hive Interiors will be sent directly to you from the consultant,
                unless otherwise specified. We appreciate your prompt settlement
                of these invoices, as per their payment terms.
              </p>

              <p>
                <strong>ENGAGEMENT OF OTHER CONSULTANTS:</strong>
                <br />
                Please recognize that other consultants required to complete the
                documentation provide expertise not held by Honey & Hive
                Interiors. Consequently, we are not responsible for the services
                provided. If we engage and/or coordinate any consultants, we
                will do so directly as your agent, and you agree to indemnify us
                against any claims that may arise from or relate to such
                services.
              </p>

              <p>
                <strong>COPYRIGHT:</strong>
                <br />
                The ownership of the copyright in any design and original
                documentation prepared by Honey & Hive Interiors will remain
                with us. Upon making all required payments, you are granted a
                license to use the documentation for the purpose of gaining
                necessary approvals and for the construction of the project.
                This license is not transferable and any alterations to the
                documentation supplied by Honey & Hive Interiors must have
                written permission from us and must specify the extent of
                alterations permitted.
              </p>

              <p>
                <strong>COST ESTIMATES:</strong>
                <br />
                Honey & Hive Interiors does not claim competence in accurately
                estimating the construction cost of the project. If we provide
                an indicative estimate of cost, it must not be relied upon and
                must be confirmed by a quantity surveyor or builder.
              </p>

              <p>
                <strong>QUOTATION ACCEPTANCE AND ENGAGEMENT AGREEMENT:</strong>
                <br />
                To accept the Fee Proposal and engage our services at Honey &
                Hive Interiors, we require your signature, either in writing or
                electronically.
              </p>

              <p>
                <strong>TERMINATION OF ENGAGEMENT:</strong>
                <br />
                If this engagement is terminated before completion, for any
                reason, you will be responsible for paying the total outstanding
                fees applicable for the plans being developed at the time of
                termination. The Initial Consultation and deposit made upon
                engaging our services is non-refundable.
              </p>

              <p>
                <strong>STAGE APPROVALS:</strong>
                <br />
                Before Honey & Hive Interiors can commence each plan phase, we
                require your written or electronic acceptance of the current
                prepared plans and your written or electronic acceptance to
                proceed with further plan drafting. Settlement of all invoices
                issued is also necessary before moving on to the next phase.
              </p>

              <p>
                <strong>LIMIT OF SERVICES:</strong>
                <br />
                If you choose to coordinate the other consultants yourself, our
                services will conclude upon the issuance of BA Plans to you and
                finalisation of your account. If we are engaged to coordinate
                other consultants, our services will cease upon receipt of
                Approved Building Plans from the Certifier and finalisation of
                your account. If you require us to carry out further design or
                drafting work, or consult on any issue after the Approved
                Building Plans have been issued, additional costs associated
                with those extra services will be quoted at the time of your
                request.
              </p>

              <p>
                <strong>PROCUREMENT:</strong>
                <br />
                We offer furnishings and accessories at or below retail prices
                (RRP or market value). If a retailer has an ongoing promotion,
                you'll benefit from sale prices when you make your purchase. Our
                trade or wholesale discounts assist in covering our project
                management and the seamless provision of our full-service
                Procurement & Install services. At Honey & Hive, we prefer to
                share a portion of our industry discounts with our clients. In
                the absence of any trade or wholesale discounts, a 15% handling
                fee will be added. If you choose to compare our supplier quotes
                with other suppliers and decide to purchase items independently,
                please note that we do not assume any responsibility for
                ordering, or issues pertaining to quality, warranties,
                deliveries, or returns.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LegalDocument;
