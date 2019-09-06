import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';
import { oc } from 'ts-optchain.macro';
import Layout from '../components/Layout';
import SocialButtons from '../components/SocialButtons';
import Tags from '../components/Tags';
import TextSection from '../components/TextSection';
import { joinWith } from '../style/helpers';
import { centerContent } from '../style/modifiers';
import { colorPrimary, colorTertiary } from '../style/theme';
import { BlogPostByIdQuery, ImageSharpFluid } from '../typings/graphql';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import { isBrowser } from '../utils/isBrowser';

type Props = {
  title?: string | null;
  author?: string | null;
  featuredImage?: ImageSharpFluid | string | null;
  readingTime?: string | null;
  date?: string | null;
  contentHTML?: string | null;
  content?: ReactNode;
  relatedProjects?: NonNullable<
    NonNullable<BlogPostByIdQuery['markdownRemark']>['frontmatter']
  >['relatedProjects'];
};

const FeaturedImage = styled.div`
  ${centerContent};
  width: 100%;
  height: 420px;
  overflow: hidden;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 48px;
  letter-spacing: 0.04em;
  color: ${colorPrimary};
`;

const Details = styled.p`
  ${joinWith(' | ', { opacity: 0.2, margin: '0 3px' })};
  font-weight: 600;
  letter-spacing: 0.08em;
  font-size: 14px;
  margin-bottom: 12px;
  color: ${colorTertiary};
`;

export const BlogPostTemplate = ({
  title,
  author,
  featuredImage,
  readingTime,
  relatedProjects,
  date,
  content,
  contentHTML,
}: Props) => (
  <>
    {featuredImage && (
      <FeaturedImage>
        <PreviewCompatibleImage imageInfo={featuredImage} fillContainer />
      </FeaturedImage>
    )}

    <TextSection
      css={{ marginTop: 36 }}
      contentHTML={contentHTML}
      content={content}
    >
      <header css={{ marginBottom: 46 }}>
        {relatedProjects && (
          <Tags
            css={{ marginLeft: -4, color: colorTertiary }}
            projects={relatedProjects.map(item => ({
              label: oc(item).frontmatter.projectName('ERRO!'),
              toLink: oc(item).fields.slug('ERRO!'),
            }))}
          />
        )}
        <Title>{title}</Title>
        <Details>
          {author && <span>{author}</span>}
          {<time>{date}</time>}
          {readingTime && (
            <span>{`Leitura de ${readingTime.replace(' read', '')}`}</span>
          )}
        </Details>
      </header>
    </TextSection>

    <SocialButtons
      pageUrl={isBrowser ? window.location.href : ''}
      pageTitle={`COGNITIO · ${title}`}
    />
    {/* TODO: fix pageUrl to parent page */}
  </>
);

const BlogPost = ({ data }: { data: BlogPostByIdQuery }) => {
  const { frontmatter, fields, html, excerpt } = oc(data).markdownRemark() || {};
  const {
    blogTitle,
    blogAuthor,
    image,
    date,
    relatedProjects,
  } = frontmatter || {};

  return (
    <Layout>
      <Helmet titleTemplate="COGNITIO · %s">
        <title>{`${blogTitle}`}</title>
        <meta name="description" content={`${excerpt}`} />
      </Helmet>
      <BlogPostTemplate
        title={blogTitle}
        author={blogAuthor}
        featuredImage={
          oc(image).childImageSharp.fluid()
        }
        date={date}
        relatedProjects={relatedProjects}
        readingTime={oc(fields).readingTime.text()}
        contentHTML={html}
      />
    </Layout>
  );
};

export default BlogPost;

export const blogPostQuery = graphql`
  query BlogPostById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt(pruneLength: 200, truncate: true)
      frontmatter {
        blogTitle
        blogAuthor
        relatedProjects {
          fields {
            slug
          }
          frontmatter {
            projectName
          }
        }
        image {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date(formatString: "DD/MM/YYYY", locale: "pt-Br")
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`;
