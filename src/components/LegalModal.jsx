import React, { useEffect } from 'react';

export default function LegalModal({ isOpen, onClose, title }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const getContent = () => {
    switch (title) {
      case 'Privacy Policy':
        return (
          <>
            <p><strong>Privacy Policy Effective Date: September 2, 2026</strong></p>
            <p>The Wolf Stack ("TWS," "SaleRev-Ai," "we," "us," or "our") operates dental.salerevai.com (the "Site"), a landing page for our dental patient booking and lead conversion system. This Privacy Policy explains what information we collect, how we use it, and the choices you have.</p>
            <p><strong>Information We Collect</strong><br/>
            - <em>Information you provide:</em> name, email address, phone number, practice/business name, and any details you enter when booking a demo, filling out a contact form, or messaging us.<br/>
            - <em>Automatically collected information:</em> IP address, browser type, device information, pages viewed, referring URL, and general usage data, collected via cookies and similar technologies (see our Cookie Policy).<br/>
            - <em>Information from third parties:</em> if you interact with us through an integrated scheduling, chat, or CRM tool (e.g., GoHighLevel or a similar platform), we may receive your submitted details from that tool.</p>
            <p><strong>How We Use Information</strong><br/>
            - Respond to demo requests and inquiries<br/>
            - Operate, maintain, and improve the Site and our booking/automation product<br/>
            - Send you information you've requested about our services<br/>
            - Analyze Site traffic and usage trends<br/>
            - Comply with legal obligations and protect against fraud or misuse</p>
            <p><strong>Sharing of Information</strong><br/>
            We do not sell your personal information. We may share it with:<br/>
            - Service providers who help us operate the Site or deliver our product (e.g., hosting, CRM, email, analytics providers), bound by confidentiality obligations<br/>
            - Legal authorities, if required by law or to protect our rights<br/>
            - A successor entity in the event of a merger, acquisition, or sale of assets</p>
            <p><strong>Cookies</strong><br/>
            We use cookies and similar technologies as described in our Cookie Policy. You can control cookies through your browser settings or our cookie preference tool.</p>
            <p><strong>Data Retention</strong><br/>
            We retain personal information for as long as needed to fulfill the purposes described above, or as required by law, after which it is deleted or anonymized.</p>
            <p><strong>Your Rights</strong><br/>
            Depending on your location, you may have the right to access, correct, delete, or restrict use of your personal information, or to opt out of certain processing. To exercise these rights, contact us at <a href="mailto:connect@salerevai.com" style={{color: '#3b82f6'}}>connect@salerevai.com</a> or +1 (307) 920-0931.</p>
            <p><strong>Data Security</strong><br/>
            We use reasonable administrative, technical, and physical safeguards to protect your information. No method of transmission or storage is 100% secure.</p>
            <p><strong>Children's Privacy</strong><br/>
            This Site is not directed to individuals under 16, and we do not knowingly collect their personal information.</p>
            <p><strong>Changes to This Policy</strong><br/>
            We may update this Privacy Policy from time to time. The "Effective Date" above reflects the latest revision.</p>
            <p><strong>Contact Us</strong><br/>
            Questions about this Privacy Policy? Contact us at <a href="mailto:connect@salerevai.com" style={{color: '#3b82f6'}}>connect@salerevai.com</a> or +1 (307) 920-0931.</p>
          </>
        );
      case 'Terms of Service':
        return (
          <>
            <p><strong>Terms of Use Effective Date: September 2, 2026</strong></p>
            <p>Welcome to dental.salerevai.com, operated by The Wolf Stack ("TWS," "SaleRev-Ai," "we," "us"). By accessing or using this Site, you agree to these Terms of Use ("Terms"). If you do not agree, please do not use the Site.</p>
            <p><strong>Use of the Site</strong><br/>
            This Site provides information about our dental patient booking and lead conversion system and allows you to request a demo or contact us. You agree to use the Site only for lawful purposes and not to:<br/>
            - Submit false or misleading information<br/>
            - Attempt to gain unauthorized access to the Site or its systems<br/>
            - Interfere with the Site's operation or security<br/>
            - Scrape, copy, or reproduce Site content without permission</p>
            <p><strong>Intellectual Property</strong><br/>
            All content on this Site — including text, graphics, logos, and software — is owned by or licensed to The Wolf Stack and protected by intellectual property laws. You may not reproduce or distribute it without our written consent.</p>
            <p><strong>No Professional or Medical Advice</strong><br/>
            Content on this Site is for general informational purposes about our software product only. It is not medical, legal, or professional advice, and SaleRev-Ai is not a healthcare provider. Any patient scheduling or communication facilitated through our system remains the responsibility of the dental practice using it.</p>
            <p><strong>SMS Communications</strong><br/>
            If you provide your phone number and opt in via a form on this Site, you agree to receive SMS messages from us (e.g., appointment/demo reminders and service or marketing updates). Message and data rates may apply, and frequency may vary. Reply STOP at any time to opt out.</p>
            <p><strong>Third-Party Links and Integrations</strong><br/>
            The Site may link to or integrate with third-party tools (e.g., scheduling or CRM platforms). We are not responsible for the content, policies, or practices of third parties.</p>
            <p><strong>Disclaimer of Warranties</strong><br/>
            The Site and its content are provided "as is" and "as available," without warranties of any kind, express or implied, including fitness for a particular purpose, accuracy, or uninterrupted availability.</p>
            <p><strong>Limitation of Liability</strong><br/>
            To the fullest extent permitted by law, The Wolf Stack shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Site.</p>
            <p><strong>Changes to These Terms</strong><br/>
            We may revise these Terms at any time. Continued use of the Site after changes constitutes acceptance of the updated Terms.</p>
            <p><strong>Governing Law</strong><br/>
            These Terms are governed by the laws of the State of Wyoming, USA, without regard to conflict-of-law principles.</p>
            <p><strong>Contact Us</strong><br/>
            Questions about these Terms? Contact us at <a href="mailto:connect@salerevai.com" style={{color: '#3b82f6'}}>connect@salerevai.com</a> or +1 (307) 920-0931.</p>
          </>
        );
      case 'Cookie Policy':
        return (
          <>
            <p><strong>Cookie Policy Effective Date: September 2, 2026</strong></p>
            <p>This Cookie Policy explains how The Wolf Stack, operator of SaleRev-Ai, uses cookies and similar technologies on dental.salerevai.com.</p>
            <p><strong>What Are Cookies</strong><br/>
            Cookies are small text files placed on your device when you visit a website. They help the site function, remember preferences, and provide insight into how visitors use it.</p>
            <p><strong>Types of Cookies We Use</strong></p>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1.25rem', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ textAlign: 'left', padding: '8px' }}>Category</th>
                  <th style={{ textAlign: 'left', padding: '8px' }}>Purpose</th>
                  <th style={{ textAlign: 'left', padding: '8px' }}>Can You Opt Out?</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '8px' }}>Strictly Necessary</td>
                  <td style={{ padding: '8px' }}>Core site functionality, security, load balancing</td>
                  <td style={{ padding: '8px' }}>No — required for the Site to work</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '8px' }}>Analytics/Performance</td>
                  <td style={{ padding: '8px' }}>Understand traffic, page views, and demo-request conversion (e.g., Google Analytics)</td>
                  <td style={{ padding: '8px' }}>Yes</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '8px' }}>Marketing/Advertising</td>
                  <td style={{ padding: '8px' }}>Track ad campaign performance and retarget visitors (e.g., Meta Pixel, Google Ads)</td>
                  <td style={{ padding: '8px' }}>Yes</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '8px' }}>Functional</td>
                  <td style={{ padding: '8px' }}>Remember preferences like form progress or chat widget state</td>
                  <td style={{ padding: '8px' }}>Yes</td>
                </tr>
              </tbody>
            </table>
            <p><strong>Third-Party Cookies</strong><br/>
            Some cookies are set by third-party tools we use (analytics platforms, CRM/booking widgets, ad networks). These providers may collect data under their own privacy policies.</p>
            <p><strong>Managing Cookies</strong><br/>
            You can accept, reject, or customize non-essential cookies via the consent banner on this Site, or manage/delete cookies through your browser settings at any time. Blocking essential cookies may affect Site functionality.</p>
            <p><strong>Updates to This Policy</strong><br/>
            We may update this Cookie Policy periodically. Continued use of the Site after changes means you accept the updated policy.</p>
            <p><strong>Contact Us</strong><br/>
            Questions about our use of cookies? Contact <a href="mailto:connect@salerevai.com" style={{color: '#3b82f6'}}>connect@salerevai.com</a> or +1 (307) 920-0931.</p>
          </>
        );
      default:
        return <p>Legal document content goes here.</p>;
    }
  };

  return (
    <>
      <style>{`
        .legal-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10, 15, 28, 0.8);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          padding: 1.5rem;
          animation: modalFadeIn 0.3s ease;
        }

        .legal-modal-container {
          background: #0f172a;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          width: 100%;
          max-width: 600px;
          max-height: 85vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          animation: modalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .legal-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .legal-modal-title {
          margin: 0;
          color: white;
          font-size: 1.25rem;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
        }

        .legal-modal-close {
          background: rgba(255, 255, 255, 0.05);
          border: none;
          color: #94a3b8;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }

        .legal-modal-close:hover {
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }

        .legal-modal-content {
          padding: 1.5rem;
          overflow-y: auto;
          color: #cbd5e1;
          font-size: 0.9375rem;
          line-height: 1.7;
          font-family: 'Inter', sans-serif;
        }

        .legal-modal-content p {
          margin-bottom: 1.25rem;
        }

        .legal-modal-content strong {
          color: white;
          font-weight: 600;
          display: block;
          margin-bottom: 0.25rem;
        }

        .legal-modal-footer {
          padding: 1.25rem 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          justify-content: flex-end;
        }

        .legal-modal-btn {
          background: #DC2626;
          color: white;
          border: none;
          padding: 0.625rem 1.25rem;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .legal-modal-btn:hover {
          background: #B91C1C;
        }

        /* Scrollbar styles for the content */
        .legal-modal-content::-webkit-scrollbar {
          width: 6px;
        }
        .legal-modal-content::-webkit-scrollbar-track {
          background: transparent;
        }
        .legal-modal-content::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        .legal-modal-content::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
      <div className="legal-modal-overlay" onClick={onClose}>
        <div className="legal-modal-container" onClick={(e) => e.stopPropagation()}>
          <div className="legal-modal-header">
            <h3 className="legal-modal-title">{title}</h3>
            <button className="legal-modal-close" onClick={onClose} aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="legal-modal-content">
            {getContent()}
          </div>
          <div className="legal-modal-footer">
            <button className="legal-modal-btn" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
