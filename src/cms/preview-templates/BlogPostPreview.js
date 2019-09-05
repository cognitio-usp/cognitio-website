import React, { useEffect } from 'react';
import { BlogPostTemplate } from '../../templates/blog-post';
import moment from 'moment';

const BlogPostPreview = ({ entry, widgetFor, getAsset }) => {
  const date = moment(entry.getIn(['data', 'date']));
  const image = entry.getIn(['data', 'blogFeaturedImage']);

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

  return (
    <BlogPostTemplate
      content={widgetFor('body')}
      featuredImage={getAsset(image) && getAsset(image).toString()}
      title={entry.getIn(['data', 'blogTitle'])}
      author={entry.getIn(['data', 'blogAuthor'])}
      date={date && date.format('DD/MM/YYYY')}
      readingTime="# min"
    />
  );
};

export default BlogPostPreview;
