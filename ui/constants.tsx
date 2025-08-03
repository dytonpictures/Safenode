
import React from 'react';

// Using inline SVG for icons to avoid extra dependencies and keep it self-contained.
// Icons are from lucide-dev, an open-source icon library.

const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
);
const ShieldIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
);
const GlobeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
);
const ActivityIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
);
const BrainCircuitIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 5a3 3 0 1 0-5.993.131M12 5a3 3 0 1 1 5.993.131M15 13a3 3 0 1 0-5.993.131M15 13a3 3 0 1 1 5.993.131M9 13a3 3 0 1 0-5.993.131M9 13a3 3 0 1 1 5.993.131M6.42 8.5a3 3 0 1 0 .13-2.993M17.58 8.5a3 3 0 1 1-.13-2.993M17.58 15.5a3 3 0 1 0 .13 2.993M6.42 15.5a3 3 0 1 1-.13 2.993M12 19a3 3 0 1 0-5.993-.131M12 19a3 3 0 1 1 5.993-.131M12 22v-3M12 8V5M15 13h3.5a2.5 2.5 0 0 0 0-5H15M9 13H5.5a2.5 2.5 0 0 1 0-5H9M18.33 13.5 15 13l3.33-1.5M5.67 10.5 9 12l-3.33-1.5M18.33 10.5 15 12l3.33 1.5M5.67 13.5 9 13l-3.33 1.5"/></svg>
);
const SettingsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2.73l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1 0-2.73l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
);

export const NAV_LINKS = [
  { path: '/', title: 'Dashboard', icon: <HomeIcon className="h-5 w-5" /> },
  { path: '/vpn', title: 'VPN Service', icon: <ShieldIcon className="h-5 w-5" /> },
  { path: '/dns', title: 'DNS Service', icon: <GlobeIcon className="h-5 w-5" /> },
  { path: '/monitoring', title: 'Monitoring', icon: <ActivityIcon className="h-5 w-5" /> },
  { path: '/awareness', title: 'Awareness', icon: <BrainCircuitIcon className="h-5 w-5" /> },
  { path: '/settings', title: 'Settings', icon: <SettingsIcon className="h-5 w-5" /> },
];
