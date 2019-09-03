import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import SocialButtons from '../components/SocialButtons';
import TextSection from '../components/TextSection';
import { joinWith } from '../style/helpers';
import { centerContent } from '../style/modifiers';
import { colorPrimary, colorTertiary, fontCondensed } from '../style/theme';
import { BlogPostByIdQuery } from '../typings/graphql';
import { oc } from 'ts-optchain.macro';
import Tags from '../components/Tags';

type Props = {
  title?: string | null;
  author?: string | null;
  featuredImage?: string | null;
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
  min-height: 200px;
  max-height: 420px;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
  }
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
        <img src={featuredImage} alt="" />
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
              // TODO: change all ! operator to  ts-optchain
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
      pageUrl={window.location.href}
      pageTitle={`COGNITIO · ${title}`}
    />
    {/* TODO: fix pageUrl to parent page */}
  </>
);

const BlogPost = ({ data }: { data: BlogPostByIdQuery }) => {
  const { frontmatter, fields, html, excerpt } = data.markdownRemark!;

  return (
    <Layout>
      <Helmet titleTemplate="COGNITIO · %s">
        <title>{`${frontmatter!.blogTitle}`}</title>
        <meta name="description" content={`${excerpt}`} />
      </Helmet>
      <BlogPostTemplate
        title={frontmatter!.blogTitle}
        author={frontmatter!.blogAuthor}
        featuredImage={
          frontmatter!.blogFeaturedImage &&
          frontmatter!.blogFeaturedImage.childImageSharp!.fluid!.src
        }
        date={frontmatter!.date}
        relatedProjects={frontmatter!.relatedProjects}
        readingTime={fields!.readingTime && fields!.readingTime.text}
        contentHTML={html}
      />
    </Layout>
  );
};

// TODO: add projects

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
        blogFeaturedImage {
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
