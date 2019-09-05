import React from 'react';
import { ContactPageTemplate } from '../../templates/contact-page';
import { toJSON } from '../utils/toJSON';

const ContactPagePreview = ({ entry }) => {
  const {
    contacts,
    address1,
    address2,
  } = toJSON(entry) || {};

  return (
    <ContactPageTemplate
      contacts={contacts}
      address1={address1}
      address2={address2}
    />
  );
};

export default ContactPagePreview;
