import moment from 'moment';
import React from 'react';
import { ActivitiePostTemplate } from '../../templates/activitie-post';

const ActivitiePostPreview = ({ entry, widgetFor, widgetsFor }) => {
  let relatedProjects;

  // try {
  //   relatedProjects = widgetsFor('relatedProjects')
  //     .toJSON()
  //     .map(item => ({
  //       fields: { slug: '#' },
  //       frontmatter: {
  //         projectName: item.data,
  //       },
  //     }));
  // } catch (err) {
  //   console.error(err);
  // }

  const url = widgetsFor('activitieLink').getIn(['data', 'url']);
  const label = widgetsFor('activitieLink').getIn(['data', 'label']);

  return (
    <ActivitiePostTemplate
      content={widgetFor('body')}
      title={entry.getIn(['data', 'activitieTitle'])}
      type={entry.getIn(['data', 'activitieType'])}
      location={entry.getIn(['data', 'activitieLocation'])}
      datetime={
        entry.getIn(['data', 'date']) &&
        moment(entry.getIn(['data', 'date'])).format('MM/DD/YYYY [às] HH:mm')
      }
      link={{
        url,
        label,
      }}
      relatedProjects={relatedProjects}
    />
  );
};

export default ActivitiePostPreview;
