import CMS from 'netlify-cms-app';
import React from 'react';
import FileSystemBackend from 'netlify-cms-backend-fs';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import { CSSInjector } from './utils/cssInjector';

import './custom-widgets/MarkdownYoutube';

const config = {};

if (process.env.NODE_ENV === 'development') {
  config.backend = {
    name: 'file-system',
    api_root: '/api',
  };
  config.display_url = 'http://localhost:8000';
  CMS.registerBackend('file-system', FileSystemBackend);
} else {
  config.backend = {
    backend: {
      name: 'git-gateway',
      branch: 'master',
    },
  };
}

CMS.init({ config });

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', props => (
  <CSSInjector>
    <IndexPagePreview {...props} />
  </CSSInjector>
));
CMS.registerPreviewTemplate('about', props => (
  <CSSInjector>
    <AboutPagePreview {...props} />
  </CSSInjector>
));
CMS.registerPreviewTemplate('blog', props => (
  <CSSInjector>
    <BlogPostPreview {...props} />
  </CSSInjector>
));
