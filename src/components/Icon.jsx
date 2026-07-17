const ICONS = {
  mail: <><path d="M4 6h16v12H4z" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M4 6l8 6 8-6" fill="none" stroke="currentColor" strokeWidth="2"/></>,
  call: <><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" fill="none" stroke="currentColor" strokeWidth="2"/></>,
  smartphone: <><rect x="5" y="2" width="14" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M12 18h.01" fill="none" stroke="currentColor" strokeWidth="2"/></>,
  smart_display: <><rect x="2" y="6" width="20" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M6 12h4M8 10v4" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M14 10h.01M18 10h.01" fill="none" stroke="currentColor" strokeWidth="2"/></>,
  play_circle: <><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M10 8l6 4-6 4V8z" fill="currentColor"/></>,
  arrow_outward: <><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" fill="none" stroke="currentColor" strokeWidth="2"/></>,
  verified: <><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="none" stroke="currentColor" strokeWidth="2"/></>,
  language: <><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" fill="none" stroke="currentColor" strokeWidth="2"/></>,
  school: <><path d="M22 10v6M2 10l10-7 10 7v6H2z" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M6 12v5c0 2 6 3 6 3s6-1 6-3v-5" fill="none" stroke="currentColor" strokeWidth="2"/></>,
  groups: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="9" cy="7" r="4" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" fill="none" stroke="currentColor" strokeWidth="2"/></>,
  arrow_right: <><path d="M5 12h14M12 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2"/></>,
  translate: <><path d="M5 8h14M5 16h14M4 5l-2 18 2-2M20 5l2 18-2-2" fill="none" stroke="currentColor" strokeWidth="2"/></>,
  expand_more: <><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2"/></>,
  check: <><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2"/></>,
  close: <><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeWidth="2"/></>,
  menu: <><path d="M3 6h18M3 12h18M3 18h18" fill="none" stroke="currentColor" strokeWidth="2"/></>,
  lock: <><rect x="3" y="11" width="18" height="11" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M7 11V7a5 5 0 0110 0v4" fill="none" stroke="currentColor" strokeWidth="2"/></>,
  send: <><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" fill="none" stroke="currentColor" strokeWidth="2"/></>,
  visibility: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="3" fill="currentColor"/></>,
  visibility_off: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M23 23l-5-5M3 3l18 18" fill="none" stroke="currentColor" strokeWidth="2"/></>,
  hourglass_empty: <><path d="M6 2h12M6 22h12M6 12h12a4 4 0 01-4 4H10a4 4 0 01-4-4zM6 12a4 4 0 014-4h8a4 4 0 014 4" fill="none" stroke="currentColor" strokeWidth="2"/></>,
  logout: <><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" fill="none" stroke="currentColor" strokeWidth="2"/></>,
  add: <><path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" strokeWidth="2"/></>,
  image: <><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="8.5" cy="10.5" r="1.5" fill="currentColor"/><path d="M21 15l-5-5L5 21" fill="none" stroke="currentColor" strokeWidth="2"/></>,
  open_in_new: <><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" fill="none" stroke="currentColor" strokeWidth="2"/></>,
  delete: <><path d="M3 6h18M8 6V4h8v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" fill="none" stroke="currentColor" strokeWidth="2"/></>,
  cloud_upload: <><path d="M20 16.2A4.5 4.5 0 0017.5 8h-1.3a5 5 0 10-9.4 0H6.5A4.5 4.5 0 002 16.2a7 7 0 0014 0z" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M12 12v8M8 16l4-4 4 4" fill="none" stroke="currentColor" strokeWidth="2"/></>,
  save: <><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M17 21v-8H7v8M7 3v5h8" fill="none" stroke="currentColor" strokeWidth="2"/></>,
  edit: <><path d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4 12-12z" fill="none" stroke="currentColor" strokeWidth="2"/></>,
  link: <><path d="M10 14a3.5 3.5 0 007 0l2-2a3.5 3.5 0 00-4.95-4.95l-1.8 1.8" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M14 10a3.5 3.5 0 00-7 0l-2 2a3.5 3.5 0 004.95 4.95l1.8-1.8" fill="none" stroke="currentColor" strokeWidth="2"/></>,
  person: <><circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M4 20c0-4 4-7 8-7s8 3 8 7" fill="none" stroke="currentColor" strokeWidth="2"/></>,
  dark_mode: <><path d="M21 12.8A9 9 0 1111 3a7 7 0 009 9.8z" fill="none" stroke="currentColor" strokeWidth="2"/></>,
  light_mode: <><circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" fill="none" stroke="currentColor" strokeWidth="2"/></>,
};

export default function Icon({ name, className = "", size = 20 }) {
  const svg = ICONS[name];
  if (!svg) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {svg}
    </svg>
  );
}
