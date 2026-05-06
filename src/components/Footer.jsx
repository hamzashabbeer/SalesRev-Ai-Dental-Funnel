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
                preflight: false, // DO NOT RESET APP STYLES
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

    // Add Phosphor Icons
    const link1 = document.createElement('link');
    link1.rel = 'stylesheet';
    link1.href = 'https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css';
    document.head.appendChild(link1);

    const link2 = document.createElement('link');
    link2.rel = 'stylesheet';
    link2.href = 'https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css';
    document.head.appendChild(link2);

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
              <span className="text-red-600 mr-2">///</span> info@salesrev.ai
          </div>

          <div className="max-w-[1100px] mx-auto px-6 w-full relative z-10">
              
              {/* TOP SECTION: Newsletter & Socials */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-12 footer-divider-bottom mb-12">
                  
                  {/* Logo */}
                  <div className="flex-shrink-0">
                      <img src="https://assets.cdn.filesafe.space/tH9jDTs3MXpIvPjTRA1Z/media/69d93b139a68c417bdfb394d.png" alt="Salesrev Logo" className="h-10 object-contain" />
                  </div>

                  {/* Newsletter */}
                  <div className="w-full max-w-lg flex-1">
                      <form className="newsletter-container flex items-center bg-white/5 border border-solid border-white/10 rounded-full p-1.5 w-full">
                          <input type="email" placeholder="Enter your email to subscribe" className="flex-1 bg-transparent border-none text-white text-sm px-5 py-2 focus:outline-none placeholder-slate-500" required />
                          <button type="submit" className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-full transition-colors shadow-lg shadow-red-600/20">
                              Subscribe
                          </button>
                      </form>
                  </div>

                  {/* Socials */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                      <a href="#" className="w-11 h-11 rounded-full bg-white/5 border border-solid border-white/10 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white hover:border-red-500 transition-all duration-300">
                          <i className="ph-fill ph-linkedin-logo text-xl"></i>
                      </a>
                      <a href="#" className="w-11 h-11 rounded-full bg-white/5 border border-solid border-white/10 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white hover:border-red-500 transition-all duration-300">
                          <i className="ph-fill ph-instagram-logo text-xl"></i>
                      </a>
                      <a href="#" className="w-11 h-11 rounded-full bg-white/5 border border-solid border-white/10 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white hover:border-red-500 transition-all duration-300">
                          <i className="ph-fill ph-youtube-logo text-xl"></i>
                      </a>
                  </div>
              </div>

              {/* MIDDLE SECTION: Links Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
                  
                  {/* Column 1 */}
                  <div className="lg:col-span-4 lg:pr-8">
                      <div className="mb-6">
                          <img src="https://assets.cdn.filesafe.space/tH9jDTs3MXpIvPjTRA1Z/media/69d93b139a68c417bdfb394d.png" alt="Salesrev Logo" className="h-8 lg:h-10 object-contain" />
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
                          <li className="flex items-start gap-3">
                              <i className="ph ph-map-pin text-red-500 text-lg mt-0.5"></i>
                              <span className="text-slate-400 text-sm leading-relaxed">
                                  66-68 Hagley Road<br/>Birmingham B16 8PF
                              </span>
                          </li>
                          <li className="flex items-center gap-3 group">
                              <i className="ph ph-phone text-red-500 text-lg"></i>
                              <a href="tel:01902921235" className="text-slate-400 text-sm group-hover:text-white transition-colors">
                                  0-1902-921235
                              </a>
                          </li>
                          <li className="flex items-center gap-3 group">
                              <i className="ph ph-envelope-simple text-red-500 text-lg"></i>
                              <a href="mailto:info@salesrev.ai" className="text-slate-400 text-sm group-hover:text-white transition-colors">
                                  info@salesrev.ai
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
                          {['Real Estate','Healthcare & Med Spa','Home Services','Legal Firms','Automotive','Fulfillment & E-com'].map(i => (
                              <li key={i}>
                                  <a href="#" className="footer-link flex items-center text-sm font-medium text-slate-400">
                                      <i className="ph-bold ph-caret-right footer-link-icon text-xs mr-2"></i> {i}
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
