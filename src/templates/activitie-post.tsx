import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';
import { oc } from 'ts-optchain.macro';
import Button from '../components/Button';
import Icon from '../components/Icon';
import Layout from '../components/Layout';
import PlexusContainer from '../components/PlexusContainer';
import SocialButtons from '../components/SocialButtons';
import Tags from '../components/Tags';
import TextSection from '../components/TextSection';
import { mqMobile } from '../style/mediaQueries';
import { centerContent, centerContentCollum } from '../style/modifiers';
import { colorSecondary } from '../style/theme';
import { ActivitiePostByIdQuery } from '../typings/graphql';
import { formatActivitieDate } from '../utils/formatActivitieDate';
import { isBrowser } from '../utils/isBrowser';

type Props = {
  title?: string | null;
  contentHTML?: string | null;
  content?: ReactNode;
  type?: string | null;
  yearOnly?: string | null;
  monthAndYear?: string | null;
  dateTime?: string | null;
  dateOnly?: string | null;
  endYearOnly?: string | null;
  endMonthAndYear?: string | null;
  endDateTime?: string | null;
  endDateOnly?: string | null;
  dateFormat?: number | null;
  location?: string | null;
  relatedProjects?: NonNullable<
    NonNullable<ActivitiePostByIdQuery['markdownRemark']>['frontmatter']
  >['relatedProjects'];
  link?: {
    label?: string | null;
    url?: string | null;
  } | null;
};

const Header = styled(PlexusContainer)`
  padding: 56px 16px 36px;
  ${centerContentCollum};
`;

const Title = styled.h1`
  ${centerContent};
  position: relative;
  color: #fff;
  font-weight: 300;
  font-size: 42px;
  text-align: center;
  padding-bottom: 16px;
  max-width: 1000px;
  width: 100%;

  ${mqMobile} {
    font-size: 36px;
  }

  &::after {
    content: '';
    position: absolute;
    height: 1px;
    bottom: 0;
    width: 232px;
    display: block;

    background: ${colorSecondary};
  }
`;

const DetailContainer = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 24px;
  font-weight: 300;
`;

const Detail = styled.div`
  ${centerContent};
  font-size: 18px;
  line-height: 26px;
  margin: 0 16px;
  margin-bottom: 12px;
  color: #fff;
`;

const DetailIcon = styled(Icon)`
  margin-right: 12px;
`;

const Link = styled(Button)`
  margin-top: 16px;
`;

export const ActivitiePostTemplate = ({
  title,
  dateFormat,
  yearOnly,
  monthAndYear,
  dateTime,
  dateOnly,
  content,
  type,
  relatedProjects,
  contentHTML,
  location,
  link,
  endDateTime,
  endDateOnly,
  endMonthAndYear,
  endYearOnly,
}: Props) => {
  const date = formatActivitieDate({
    yearOnly,
    monthAndYear,
    dateTime,
    dateFormat,
    dateOnly,
    endDateTime,
    endDateOnly,
    endMonthAndYear,
    endYearOnly,
  });

  return (
    <>
      <Header>
        <Tags
          css={{ marginTop: -32, marginBottom: 24 }}
          projects={[
            ...(type ? [{ label: type, toLink: '/atividades' }] : []),
            ...(relatedProjects
              ? relatedProjects.map(item => ({
                  label: oc(item).frontmatter.projectName('ERRO!'),
                  toLink: oc(item).fields.slug('ERRO!'),
                }))
              : []),
          ]}
        />
        <Title>{title}</Title>
        <DetailContainer>
          {date && (
            <Detail>
              <DetailIcon name="calendar" color={colorSecondary} />
              {date}
            </Detail>
          )}
          {location && (
            <Detail>
              <DetailIcon name="location" color={colorSecondary} />
              {location}
            </Detail>
          )}
        </DetailContainer>
        {link && link.url && (
          <Link
            label={link.label || 'ERRO: Rótulo não definido'}
            href={link.url || undefined}
            leadingIcon="link"
          />
        )}
      </Header>

      <TextSection
        css={{ marginTop: 46 }}
        contentHTML={contentHTML}
        content={content}
      />

      <SocialButtons
        pageUrl={isBrowser ? window.location.href : ''}
        pageTitle={`COGNITIO · ${title}`}
      />
    </>
  );
};

const ActivitiePost = ({ data }: { data: ActivitiePostByIdQuery }) => {
  const { frontmatter, html, excerpt } = oc(data).markdownRemark() || {};
  const {
    activitieTitle,
    activitieType,
    activitieLocation,
    relatedProjects,
    activitieLink,
    dateFormat,
    yearOnly,
    monthAndYear,
    dateTime,
    dateOnly,
    endDateTime,
    endDateOnly,
    endYearOnly,
    endMonthAndYear,
  } = frontmatter || {};

  return (
    <Layout pageTitle={activitieTitle || undefined}>
      <Helmet titleTemplate="COGNITIO · %s">
        <title>{`${activitieTitle}`}</title>
        <meta name="description" content={`${excerpt || ''}`} />
      </Helmet>
      <ActivitiePostTemplate
        title={activitieTitle}
        type={activitieType}
        dateTime={dateTime}
        dateOnly={dateOnly}
        yearOnly={yearOnly}
        monthAndYear={monthAndYear}
        endDateTime={endDateTime}
        endDateOnly={endDateOnly}
        endYearOnly={endYearOnly}
        endMonthAndYear={endMonthAndYear}
        dateFormat={dateFormat}
        location={activitieLocation}
        contentHTML={html}
        relatedProjects={relatedProjects}
        link={activitieLink}
      />
    </Layout>
  );
};

export default ActivitiePost;

export const activitiePostQuery = graphql`
  query ActivitiePostById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt(pruneLength: 200, truncate: true)
      frontmatter {
        activitieTitle
        activitieType
        relatedProjects {
          fields {
            slug
          }
          frontmatter {
            projectName
          }
        }
        dateFormat

        yearOnly: date(formatString: "YYYY")
        monthAndYear: date(formatString: "MMM YYYY")
        dateTime: date(formatString: "DD/MM/YYYY, HH:mm")
        dateOnly: date(formatString: "DD/MM/YYYY")

        endYearOnly: dateEnd(formatString: "YYYY")
        endMonthAndYear: dateEnd(formatString: "MMM YYYY")
        endDateTime: dateEnd(formatString: "DD/MM/YYYY, HH:mm")
        endDateOnly: dateEnd(formatString: "DD/MM/YYYY")

        activitieLocation
        activitieLink {
          label
          url
        }
      }
    }
  }
`;
