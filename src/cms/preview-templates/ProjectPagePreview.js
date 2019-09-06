import moment from 'moment';
import React from 'react';
import { ProjectPageTemplate } from '../../templates/project-page';
import { toJSON } from '../utils/toJSON';


const ProjectPagePreview = ({ entry, widgetFor, getAsset }) => {
  const {
    projectName,
    image,
    projectStart,
    projectEnd,
  } = toJSON(entry) || {};

  return (
    <ProjectPageTemplate
      name={projectName}
      thumb={getAsset(image) && getAsset(image).toString()}
      start={projectStart && moment(projectStart).format('MMM [de] YYYY')}
      end={projectEnd && moment(projectEnd).format('MMM [de] YYYY')}
      content={widgetFor('body')}
    />
  );
  // members={getMembers(projectMembers)}
  // formerMembers={getMembers(projectFormerMembers)}
};

export default ProjectPagePreview;
