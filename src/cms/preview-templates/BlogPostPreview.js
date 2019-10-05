import React, { useEffect } from 'react';
import { BlogPostTemplate } from '../../templates/blog-post';
import moment from 'moment';
import { toJSON } from '../utils/toJSON';
import { Warn } from '../utils/Warn';

const BlogPostPreview = ({ entry, widgetFor, getAsset, fieldsMetaData }) => {
  const date = moment(entry.getIn(['data', 'date']));
  const image = entry.getIn(['data', 'image']);

  const test = toJSON(fieldsMetaData) || {};

  console.log(test);

  useEffect(() => {
    const imgs = document
      .getElementsByTagName('iframe')[1]
      .contentDocument.querySelectorAll('.frame-content div div div > img');

    imgs.forEach(img => {
      const currentCaption = img.parentNode.querySelector('figcaption');

      if (currentCaption) {
        if (img.title || img.alt) {
          currentCaption.innerHTML = img.title || img.alt;
        } else {
          currentCaption.remove();
        }
      } else if (img.title || img.alt) {
        const caption = document.createElement('figcaption');
        caption.innerHTML = img.title || img.alt;
        caption.style.marginTop = '-32px';
        caption.style.marginBottom = '32px';

        img.parentNode.appendChild(caption);
      }
    });
  }, [entry]);

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
            sites.usp/noticias/{`${link}`}
          </i>
        </Warn>
      )}
      <BlogPostTemplate
        content={widgetFor('body')}
        featuredImage={getAsset(image) && getAsset(image).toString()}
        title={title}
        author={entry.getIn(['data', 'blogAuthor'])}
        date={date && date.format('DD/MM/YYYY')}
        readingTime="# min"
      />
    </>
  );
};

export default BlogPostPreview;
