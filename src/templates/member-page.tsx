import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { uniqBy } from 'lodash-es';
import { ellipsis } from 'polished';
import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';
import { oc } from 'ts-optchain.macro';
import Icon from '../components/Icon';
import Layout from '../components/Layout';
import PlexusContainer from '../components/PlexusContainer';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Projects from '../components/Projects';
import TextSection from '../components/TextSection';
import { circle, joinWith, letterSpacing } from '../style/helpers';
import { centerContent, fillContainer, centerContentCollum } from '../style/modifiers';
import { colorTertiary, fontCondensed } from '../style/theme';
import { ImageSharpFluid, MemberPageByIdQuery } from '../typings/graphql';
import urlPrettier from '../utils/urlPrettier';
import { mqMobile } from '../style/mediaQueries';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

type Props = {
  name?: string | null;
  role?: string | null;
  memberSince: string;
  memberUntil?: string | null;
  memberUntilTimestamp?: string | null;
  thumb?: string | ImageSharpFluid | null;
  email?: string | null;
  lattes?: string | null;
  forceIsFormeMember?: boolean | null;
  linkedin?: string | null;
  otherInfos?:
    | {
        info?: string | null;
        url?: string | null;
        label?: string | null;
      }[]
    | null;
  featuredLink?: {
    label?: string | null;
    url?: string | null;
  };
  contentHTML?: string | null;
  content?: ReactNode;
  projects?: MemberPageByIdQuery['projects'];
  projectsInWitchIsFormerMember?: MemberPageByIdQuery['projectsInWitchIsFormerMember'];
};

const Header = styled(PlexusContainer)`
  padding: 36px 0 120px;
`;

const ProfileImage = styled.div`
  ${circle(240)};
  margin-right: 40px;
  background-size: cover;
  flex-shrink: 0;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);

  overflow: hidden;

  ${mqMobile} {
    margin-right: 0;
  }
`;

const HeaderLeftContent = styled.div`
  text-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
  max-width: 700px;

  ${mqMobile} {
    text-align: center;
  }

  h1 {
    margin-top: 38px;
    ${letterSpacing(6)};
    color: #fff;
    font-weight: 400;
    line-height: 1.1;
    font-size: 42px;

    ${mqMobile} {
      margin-top: 24px;
      font-size: 36px;
    }
  }

  h2 {
    ${letterSpacing(4)};
    color: #fff;
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 16px;
    margin-top: 12px;

    ${mqMobile} {
      font-size: 24px;
    }
  }

  h3 {
    ${joinWith(' · ')}
    color: #fff;
    font-weight: 300;
    font-size: 18px;
    opacity: 0.9;
  }
`;

const HeaderContentContainer = styled.div`
  ${centerContent};
  max-width: 900px;
  width: calc(100% - 32px);

  ${mqMobile} {
    ${centerContentCollum};
  }
`;

const InfoContainer = styled.div`
  z-index: 1;
  width: calc(100% - 20px);
  max-width: 900px;
  padding: 28px 46px;

  background: #f8f8f8;
  border-radius: 4px;
  margin-top: -70px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 28px;
`;

const InfoItem = styled.div`
  line-height: 1.25;
  font-family: ${fontCondensed};

  a h1 {
    text-decoration: underline;
  }

  a:hover h1 {
    color: ${colorTertiary};
  }

  h1 {
    ${ellipsis()};
    ${letterSpacing(4)};
    width: 100%;
    font-weight: 400;
    font-size: 20px;
    color: $colorPrimary;
    transition: 160ms;
  }

  h2 {
    ${ellipsis()};
    ${letterSpacing(4)};
    color: ${colorTertiary};
    font-weight: 300;
    font-size: 16px;
    padding: 0;
    text-transform: uppercase;
  }
`;

export const MemberPageTemplate = ({
  name,
  role,
  thumb,
  memberSince,
  memberUntil,
  memberUntilTimestamp,
  email,
  forceIsFormeMember,
  lattes,
  linkedin,
  content,
  contentHTML,
  otherInfos,
  projects,
  projectsInWitchIsFormerMember,
}: Props) => {
  const memberUntilIsValid = memberUntil && memberUntil !== 'Invalid date';
  const memberSinceIsValid = memberSince && memberSince !== 'Invalid date';
  const infoItens = [
    ...(email ? [{ label: 'Email', info: email, url: `mailto:${email}` }] : []),
    ...(lattes ? [{ label: 'Currículo Lattes', url: lattes }] : []),
    ...(linkedin ? [{ label: 'LinkedIn', url: linkedin }] : []),
    ...(otherInfos || []),
  ];

  const filteredProjects = {
    edges: uniqBy(
      [...oc(projects).edges([]), ...oc(projectsInWitchIsFormerMember).edges([])],
      'id',
    ),
  };

  const noInfoItens = infoItens.length === 0;
  const isFormerMember =
    forceIsFormeMember
    || (memberUntilTimestamp && +memberUntilTimestamp < Date.now());

  return (
    <>
      <Header
        orangeBackground
        css={{ paddingBottom: noInfoItens ? 36 : undefined }}
      >
        <HeaderContentContainer>
          <ProfileImage>
            {thumb ? (
              <PreviewCompatibleImage imageInfo={thumb} fillContainer />
            ) : (
              <PlexusContainer
                opacity={1}
                edgesOpacity={0.9}
                color="#fff"
                css={fillContainer}
              >
                <Icon name="avatar" size={100} color="#fff" />
              </PlexusContainer>
            )}
          </ProfileImage>
          <HeaderLeftContent>
            <h1
              css={{ marginTop: noInfoItens ? '24px !important' : undefined }}
            >
              {name}
            </h1>
            <h2>{role}</h2>
            <h3>
              {isFormerMember && <span>Ex-membro</span>}
              {memberSinceIsValid && (
                <span
                  title={
                    memberUntilIsValid
                      ? 'Período de participação no grupo'
                      : 'Membro desde'
                  }
                >
                  {memberSince}
                  {memberUntilIsValid ? ` – ${memberUntil}` : ''}
                </span>
              )}
            </h3>
          </HeaderLeftContent>
        </HeaderContentContainer>
      </Header>
      {infoItens.length > 0 && (
        <InfoContainer>
          {infoItens.map(({ info, url, label }, i) => (
            <InfoItem key={i}>
              {url ? (
                <OutboundLink href={url} target="_blank" rel="noopener noreferrer">
                  <h1>{info || urlPrettier(url) || role}</h1>
                  {label && <h2>{label}</h2>}
                </OutboundLink>
              ) : (
                <>
                  <h1>{info || role}</h1>
                  {label && <h2>{label}</h2>}
                </>
              )}
            </InfoItem>
          ))}
        </InfoContainer>
      )}
      {(content || contentHTML) && (
        <TextSection
          css={{ marginTop: 56 }}
          content={content}
          contentHTML={contentHTML}
        />
      )}

      <Projects projects={filteredProjects} />
    </>
  );
};

const MemberPage = ({ data }: { data: MemberPageByIdQuery }) => {
  const {
    memberName,
    memberRole,
    image,
    memberSince,
    memberUntil,
    memberEmail,
    memberLattes,
    memberLinkedin,
    memberOtherInfos,
    isFormerMember,
    memberUntilTimestamp,
  } = oc(data).markdownRemark.frontmatter() || {};

  return (
    <Layout pageTitle={memberName || undefined}>
      <Helmet titleTemplate="COGNITIO · %s">
        <title>{`${memberName}`}</title>
        <meta
          name="description"
          content={`${oc(data).markdownRemark.excerpt('')}`}
        />
      </Helmet>
      <MemberPageTemplate
        name={memberName}
        role={memberRole}
        thumb={oc(image).childImageSharp.fluid()}
        memberSince={memberSince}
        memberUntil={memberUntil}
        memberUntilTimestamp={memberUntilTimestamp}
        email={memberEmail}
        lattes={memberLattes}
        linkedin={memberLinkedin}
        contentHTML={oc(data).markdownRemark.html()}
        otherInfos={memberOtherInfos}
        forceIsFormeMember={isFormerMember}
        projects={data.projects}
        projectsInWitchIsFormerMember={data.projectsInWitchIsFormerMember}
      />
    </Layout>
  );
};

export default MemberPage;

export const memberPageQuery = graphql`
  fragment Member on MarkdownRemark {
    html
    excerpt(pruneLength: 200)
    frontmatter {
      memberRole
      memberName
      image {
        childImageSharp {
          fluid(maxWidth: 240, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      memberSince(formatString: "MMM [de] YYYY", locale: "pt-Br")
      memberUntil(formatString: "MMM [de] YYYY", locale: "pt-Br")
      memberUntilTimestamp: memberUntil(formatString: "x")
      memberEmail
      memberLattes
      isFormerMember
      memberLinkedin
      memberOtherInfos {
        info
        link
        label
      }
      memberFeaturedLink {
        label
        url
      }
    }
  }

  fragment MemberCard on MarkdownRemark {
    id
    fields {
      slug
    }
    frontmatter {
      memberRole
      memberName
      memberType
      isFormerMember
      image {
        childImageSharp {
          fluid(maxWidth: 240, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      memberUntilTimestamp: memberUntil(formatString: "x")
      memberFeaturedLink {
        label
        url
      }
    }
  }

  query MemberPageById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      ...Member
    }

    projects: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "project-page" }
          projectMembers: { elemMatch: { id: { eq: $id } } }
        }
      }
      sort: { fields: [frontmatter___projectStart], order: DESC }
    ) {
      ...Projects
    }

    projectsInWitchIsFormerMember: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "project-page" }
          projectFormerMembers: { elemMatch: { id: { eq: $id } } }
        }
      }
      sort: { fields: [frontmatter___projectStart], order: DESC }
    ) {
      ...Projects
    }
  }
`;
