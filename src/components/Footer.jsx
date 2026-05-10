import React, { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    // Inject Tailwind CDN only for this footer to avoid resetting the whole app
    // We will use the cdn link but try to limit the preflight
    const script = document.createElement('script');
    script.src = "https://cdn.tailwindcss.com";
    script.onload = () => {
        window.tailwind.config = {
            corePlugins: {
                preflight: false,
            },
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    colors: {
                        brand: {
                            dark: '#0A0F1C',    
                            card: '#111827',    
                            accent: '#DC2626',  
                            hover: '#B91C1C',   
                            border: '#1E293B'
                        }
                    }
                }
            }
        }
    };
    document.head.appendChild(script);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>{`
        #salesrev-footer {
            font-family: 'Inter', sans-serif;
            background-color: #0A0F1C;
            color: #F8FAFC;
        }
        #salesrev-footer .bg-grid-dark {
            background-size: 30px 30px;
            background-image: 
                linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
        }
        .newsletter-container { transition: all 0.3s ease; }
        .newsletter-container:focus-within {
            border-color: rgba(220, 38, 38, 0.5);
            box-shadow: 0 0 20px rgba(220, 38, 38, 0.15);
            background-color: rgba(255, 255, 255, 0.05);
        }
        .footer-link { transition: all 0.3s ease; }
        .footer-link-icon {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 0;
            transform: translateX(-10px);
            color: #DC2626;
        }
        .footer-link:hover { color: #FFFFFF; transform: translateX(4px); }
        .footer-link:hover .footer-link-icon {
            opacity: 1; transform: translateX(0);
        }
        /* Explicit dividers to avoid 4-sided borders */
        .footer-divider-top { border-top: 1px solid rgba(255, 255, 255, 0.05) !important; border-bottom: 0 !important; border-left: 0 !important; border-right: 0 !important; }
        .footer-divider-bottom { border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important; border-top: 0 !important; border-left: 0 !important; border-right: 0 !important; }
        .footer-divider-inner-top { border-top: 1px solid rgba(255, 255, 255, 0.1) !important; border-bottom: 0 !important; border-left: 0 !important; border-right: 0 !important; }
      `}</style>
      
      <footer id="salesrev-footer" className="relative w-full pt-20 pb-8 footer-divider-top overflow-hidden z-20">
          
          {/* Ambient Backgrounds */}
          <div className="absolute inset-0 bg-grid-dark pointer-events-none z-0 mix-blend-overlay opacity-50"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/10 blur-[150px] pointer-events-none z-0 rounded-full"></div>

          {/* Vertical Side Text */}
          <div className="absolute left-10 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[10px] font-bold uppercase tracking-[0.4em] text-slate-700 hidden 2xl:block z-10 pointer-events-none">
              <span className="text-red-600 mr-2">///</span> connect@salerevai.com
          </div>

          <div className="max-w-[1100px] mx-auto px-6 w-full relative z-10">
              


              {/* MIDDLE SECTION: Links Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
                  
                  {/* Column 1 */}
                  <div className="lg:col-span-4 lg:pr-8">
                      <div className="mb-6">
                          <img src="https://assets.cdn.filesafe.space/tH9jDTs3MXpIvPjTRA1Z/media/69d93b139a68c417bdfb394d.png" alt="Salesrev Logo" className="h-8 lg:h-10 object-contain" loading="lazy" decoding="async" />
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">
                          Salesrev helps ambitious businesses and brands with AI-driven, advanced digital marketing services. Start building visibility, growth, and success with us today.
                      </p>
                      <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 border border-solid border-white/10 text-xs font-semibold text-slate-400 uppercase tracking-widest shadow-sm">
                          <strong className="text-white">SalesRev AI</strong> <span className="text-red-500">|</span> A Product by TWS
                      </div>
                  </div>

                  {/* Column 2: Contact Us */}
                  <div className="lg:col-span-3">
                      <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
                      <ul className="space-y-5">
                          <li className="flex items-center gap-3 group">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                              <a href="tel:+13079200931" className="text-slate-400 text-sm group-hover:text-white transition-colors">
                                  +1 307 920 0931
                              </a>
                          </li>
                          <li className="flex items-center gap-3 group">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                              <a href="mailto:connect@salerevai.com" className="text-slate-400 text-sm group-hover:text-white transition-colors">
                                  connect@salerevai.com
                              </a>
                          </li>
                      </ul>
                  </div>

                  {/* Column 3: Our Services */}
                  <div className="lg:col-span-2 sm:col-span-1">
                      <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
                      <ul className="space-y-3.5">
                          {['SEO','Paid Media (SEM)','Branding','Web Development','Custom Software','AI Automation'].map(s => (
                              <li key={s}>
                                  <a href="#" className="footer-link flex items-center text-sm font-medium text-slate-400">
                                      <i className="ph-bold ph-caret-right footer-link-icon text-xs mr-2"></i> {s}
                                  </a>
                              </li>
                          ))}
                      </ul>
                  </div>

                  {/* Column 4: Industries */}
                  <div className="lg:col-span-3 sm:col-span-1">
                      <h4 className="text-white font-bold text-lg mb-6">Industries We Serve</h4>
                      <ul className="space-y-3.5">
                          {[
                            { name: 'Real Estate', url: '#' },
                            { name: 'Healthcare & Med Spa', url: '#' },
                            { name: 'Home Services', url: '#' },
                            { name: 'Legal Firms', url: '#' },
                            { name: 'Automotive', url: 'https://automotive.salerevai.com/' },
                            { name: 'Solar Industries', url: 'https://solar.salerevai.com/' }
                          ].map(item => (
                              <li key={item.name}>
                                  <a href={item.url} className="footer-link flex items-center text-sm font-medium text-slate-400">
                                      <i className="ph-bold ph-caret-right footer-link-icon text-xs mr-2"></i> {item.name}
                                  </a>
                              </li>
                          ))}
                      </ul>
                  </div>

              </div>

              {/* BOTTOM SECTION */}
              <div className="flex flex-col md:flex-row items-center justify-between pt-8 footer-divider-inner-top gap-6">
                  <div className="text-slate-500 text-xs sm:text-sm text-center md:text-left">
                      © Copyright <span id="current-year">{currentYear}</span> by <strong className="text-white">Salesrev</strong>. All rights reserved.
                  </div>
                  <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-medium">
                      <a href="#" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
                      <a href="#" className="text-slate-500 hover:text-white transition-colors">Terms of Service</a>
                      <a href="#" className="text-slate-500 hover:text-white transition-colors">Cookie Policy</a>
                  </div>
              </div>

          </div>
      </footer>
    </>
  );
}
