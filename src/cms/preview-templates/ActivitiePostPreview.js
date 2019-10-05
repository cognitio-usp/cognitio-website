import moment from 'moment';
import React from 'react';
import { ActivitiePostTemplate } from '../../templates/activitie-post';
import { Warn } from '../utils/Warn';

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

  const { 1: urlPath } = /#\/collections\/blog\/(.+)/.exec(
    window.location.hash,
  );

  /** @type string */
  const title = entry.getIn(['data', 'blogTitle']) || '';
  const link =
    urlPath === 'new'
      ? `${moment().format('YYYY-MM-DD-')}${title
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/ +/g, '-')
          .toLowerCase()}`
      : urlPath;

  return (
    <>
      {entry.getIn(['data', 'notListed']) && (
        <Warn>
          Está publicação está marcada como 'não listada', para acessa-la use o
          link:{' '}
          <i css={{ textDecoration: 'underline' }}>
            sites.usp/atividades/{`${link}`}
          </i>
        </Warn>
      )}
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
    </>
  );
};

export default ActivitiePostPreview;
