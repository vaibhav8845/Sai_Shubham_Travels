// MapComponent.js
import React from 'react';

const MapComponent = () => {
  return (
    <div style={{ width: '100%', height: 'auto', position: 'relative' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.415700146768!2d74.3918944752211!3d19.694918281641296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc57000467b1d9%3A0x5d05cb5e24baccd2!2sSai%20Shubham%20Tours%20And%20Travels%20Office!5e0!3m2!1sen!2sin!4v1724131103168!5m2!1sen!2sin"
        style={{ border: 0, width: '100%', height: '300px' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Embed"
      ></iframe>
    </div>
  );
};

export default MapComponent;
