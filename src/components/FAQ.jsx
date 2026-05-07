import React, { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "We already have a sales team.",
      a: "That’s perfect. This system supports your team by making sure they only speak with qualified prospects and don’t lose leads when they’re busy."
    },
    {
      q: "We don’t need AI.",
      a: "That’s completely fine. This isn’t about AI — it’s about faster response, better qualification, and more booked consultations."
    },
    {
      q: "This seems expensive.",
      a: "In solar, one deal is worth thousands. Recovering just a few additional appointments can easily cover the cost."
    },
    {
      q: "Can it integrate with our CRM?",
      a: "Yes. We can connect it with GoHighLevel or your existing CRM using workflows, webhooks, or API depending on your setup."
    },
    {
      q: "What if leads don’t answer?",
      a: "The system follows up automatically, retrying calls, sending messages, and notifying your team when leads respond."
    }
  ];

  return (
    <section className="section-faq" id="faq">
        <div className="container">
            <div className="faq-layout-grid">
                
                {/* Left Sidebar: Header & Contact Box */}
                <div className="faq-sidebar mobile-no-sticky">
                    <div className="faq-header-left">
                        <div className="eyebrow-red">Objections Handled</div>
                        <h2>Frequently Asked <span className="highlight">Questions</span></h2>
                        <p>Find straightforward answers to the most common questions about how SaleRevAi integrates and delivers results.</p>
                    </div>

                    <div className="faq-sidebar-card">
                        <div className="fsc-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                            </svg>
                        </div>
                        <div className="fsc-content">
                            <h3>Still have questions?</h3>
                            <p>We're here to help you understand exactly how SaleRevAi can fit into your specific workflow.</p>
                        </div>
                        <a href="#demo" className="btn-primary" style={{ width: '100%' }}>
                            Talk to our team
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Right Column: FAQ Accordions */}
                <div className="faq-container">
                    {faqs.map((faq, index) => (
                      <div className={`faq-item ${openIndex === index ? 'active' : ''}`} key={index}>
                          <div className="faq-question" onClick={() => toggle(index)}>
                              {faq.q}
                              <div className="faq-icon">
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}>
                                      <line x1="12" y1="5" x2="12" y2="19"></line>
                                      <line x1="5" y1="12" x2="19" y2="12"></line>
                                  </svg>
                              </div>
                          </div>
                          <div className="faq-answer">
                              <p>{faq.a}</p>
                          </div>
                      </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}
