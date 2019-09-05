import moment from 'moment';
import React from 'react';
import { ProjectPageTemplate } from '../../templates/project-page';
import { toJSON } from '../utils/toJSON';

function getMembers(input) {
  return (
    input &&
    input.map(item => ({
      fields: { slug: '#' },
      frontmatter: {
        memberName: item,
      },
    }))
  );
}

const ProjectPagePreview = ({ entry, widgetFor, widgetsFor, getAsset }) => {
  const {
    projectName,
    projectThumb,
    projectStart,
    projectEnd,
    projectMembers,
    projectFormerMembers,
  } = toJSON(entry) || {};

  return (
    <ProjectPageTemplate
      name={projectName}
      thumb={getAsset(projectThumb) && getAsset(projectThumb).toString()}
      start={projectStart && moment(projectStart).format('MMM [de] YYYY')}
      end={projectEnd && moment(projectEnd).format('MMM [de] YYYY')}
      content={widgetFor('body')}
    />
  );
  // members={getMembers(projectMembers)}
  // formerMembers={getMembers(projectFormerMembers)}
};

export default ProjectPagePreview;
