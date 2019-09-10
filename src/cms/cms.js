import CMS from 'netlify-cms-app';
import React from 'react';
import FileSystemBackend from 'netlify-cms-backend-fs';
import { useDebounce } from '@lucasols/utils';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import { CSSInjector } from './utils/cssInjector';

import { Widget as IdWidget } from '@ncwidgets/id';
import { addMarkdownYoutubeWidget } from './custom-widgets/markdownYoutube';
import ProjectPagePreview from './preview-templates/ProjectPagePreview';
import ActivitiePostPreview from './preview-templates/ActivitiePostPreview';
import MemberPagePreview from './preview-templates/MemberPagePreview';

import { Warn } from './utils/Warn';
import ResearchPagePreview from './preview-templates/ResearchPagePreview';
import ContactPagePreview from './preview-templates/ContactPagePreview';

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
    name: 'git-gateway',
    // publish_mode: 'editorial_workflow',
  };
}

addMarkdownYoutubeWidget();
CMS.registerWidget(IdWidget);

CMS.init({ config });

CMS.registerPreviewTemplate('index', props => (
  <CSSInjector>
    <IndexPagePreview {...props} />
    <Warn>
      Obs: Algumas areas da página não são visíveis na pré-visualização
    </Warn>
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
CMS.registerPreviewTemplate('projects', props => (
  <CSSInjector>
    <ProjectPagePreview {...props} />
    <Warn>
      Obs: Algumas areas da página não são visíveis na pré-visualização
    </Warn>
  </CSSInjector>
));
CMS.registerPreviewTemplate('activities', props => (
  <CSSInjector>
    <ActivitiePostPreview {...props} />
    <Warn>
      Obs: Algumas areas da página não são visíveis na pré-visualização
    </Warn>
  </CSSInjector>
));
CMS.registerPreviewTemplate('members', props => (
  <CSSInjector>
    <MemberPagePreview {...props} />
    <Warn>
      Obs: Algumas areas da página não são visíveis na pré-visualização
    </Warn>
  </CSSInjector>
));
CMS.registerPreviewTemplate('contact', props => (
  <CSSInjector>
    <ContactPagePreview {...props} />
  </CSSInjector>
));
CMS.registerPreviewTemplate('membersPage', () => (
  <CSSInjector>
    <Warn>Essa página não tem pré-visualização</Warn>
  </CSSInjector>
));
CMS.registerPreviewTemplate('research', props => {
  const debouncedEntry = useDebounce(props.entry, 1000);

  return (
    <CSSInjector>
      <ResearchPagePreview entry={debouncedEntry} />
    </CSSInjector>
  );
});
