// EmailJS Configuration
// Replace these values with your actual EmailJS credentials
// Get these from your EmailJS dashboard: https://dashboard.emailjs.com/

const EMAILJS_CONFIG = {
  // Your EmailJS Public Key (from Account > General)
  publicKey: 'HH30rEjCHwGjRhegy',

  // Your EmailJS Service ID (from Email Services)
  serviceId: 'service_sti4wp9',

  // Your EmailJS Template ID (from Email Templates)
  templateId: 'template_yoot44b',

  // Your email address where notifications will be sent
  recipientEmail: 'info@mcvanhassel.com'
};

// Make config available globally
window.EMAILJS_CONFIG = EMAILJS_CONFIG;
