import moment from 'moment';
import React, { memo } from 'react';
import { ResearchPageTemplate } from '../../templates/research-page';
import { toJSON } from '../utils/toJSON';


const ResearchPagePreview = ({ entry }) => {
  const { links, articles, thesis, books } = toJSON(entry) || {};
  console.log('rendered');

  return (
    <ResearchPageTemplate
      links={links}
      articles={articles}
      thesis={thesis}
      books={books}
    />
  );
};

export default memo(ResearchPagePreview);
