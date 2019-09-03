import React from 'react';
import { BlogPostTemplate } from '../../templates/blog-post';
import moment from 'moment';

const BlogPostPreview = ({ entry, widgetFor, getAsset }) => {
  const date = moment(entry.getIn(['data', 'date']));
  const image = entry.getIn(['data', 'blogFeaturedImage']);

  return (
    <BlogPostTemplate
      content={widgetFor('body')}
      featuredImage={getAsset(image)}
      title={entry.getIn(['data', 'blogTitle'])}
      author={entry.getIn(['data', 'blogAuthor'])}
      date={date && date.format('DD/MM/YYYY')}
      readingTime="# min"
    />
  );
};

export default BlogPostPreview;
