import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { ellipsis } from 'polished';
import React from 'react';
import Layout from '../components/Layout';
import PlexusContainer from '../components/PlexusContainer';
import SectionHeader from '../components/SectionHeader';
import TextSection from '../components/TextSection';
import { circle, letterSpacing } from '../style/helpers';
import { centerContent } from '../style/modifiers';
import { colorTertiary, fontCondensed } from '../style/theme';
import { MemberPageByIdQuery } from '../typings/graphql';
import urlPrettier from '../utils/urlPrettier';
import Helmet from 'react-helmet';

type Props = {
  name?: string | null;
  role?: string | null;
  memberSince: string;
  memberUntil?: string | null;
  thumb?: string | null;
  email?: string | null;
  lattes?: string | null;
  linkedin?: string | null;
  bio?: string | null;
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
};

const Header = styled(PlexusContainer)`
  padding-top: 36px;
  padding-bottom: 120px;
`;

const ProfileImage = styled.div`
  ${circle(240)};
  margin-right: 54px;
  background-size: cover;
  flex-shrink: 0;
`;

const HeaderLeftContent = styled.div`
  text-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
  max-width: 700px;

  h1 {
    margin-top: 54px;
    ${letterSpacing(6)};
    color: #fff;
    font-weight: 300;
    line-height: 1.1;
    font-size: 54px;
  }

  h2 {
    ${letterSpacing(4)};
    color: #fff;
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 16px;
    margin-top: 12px;
  }

  h3 {
    color: #fff;
    font-weight: 300;
    font-size: 18px;
    opacity: 0.9;
  }
`;

// TODO: add gatsby-img
// TODO: default thumb

const HeaderContentContainer = styled.div`
  ${centerContent};
  max-width: 900px;
  width: 100%;
`;

const InfoContainer = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 900px;
  padding: 28px 46px;
  margin-bottom: 56px;

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
  email,
  lattes,
  linkedin,
  bio,
  otherInfos,
}: Props) => {
  const memberUntilIsValid = memberUntil !== 'Invalid date';
  const memberSinceIsValid = memberSince !== 'Invalid date';
  const infoItens = [
    ...(email ? [{ label: 'Email', info: email, url: `mailto:${email}` }] : []),
    ...(lattes ? [{ label: 'Currículo Lattes', url: lattes }] : []),
    ...(linkedin ? [{ label: 'LinkedIn', url: linkedin }] : []),
    ...(otherInfos || []),
  ];

  return (
    <>
      <Header orangeBackground>
        <HeaderContentContainer>
          <ProfileImage css={{ backgroundImage: `url(${thumb})` }} />
          <HeaderLeftContent>
            <h1>{name}</h1>
            <h2>{role}</h2>
            {memberSinceIsValid && (
              <h3>
                Membro {memberUntilIsValid ? 'de' : 'desde'} {memberSince}{' '}
                {memberUntilIsValid ? ` até ${memberUntil}` : ''}
              </h3>
            )}
          </HeaderLeftContent>
        </HeaderContentContainer>
      </Header>
      {infoItens.length > 0 && (
        <InfoContainer>
          {infoItens.map(({ info, url, label }, i) => (
            <InfoItem key={i}>
              {url ? (
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <h1>{info || urlPrettier(url) || role}</h1>
                  {label && <h2>{label}</h2>}
                </a>
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
      {bio && <TextSection>{bio}</TextSection>}

      <SectionHeader label="Projetos" />
    </>
  );
};

const MemberPage = ({ data }: { data: MemberPageByIdQuery }) => {
  const { frontmatter } = data.markdownRemark!;

  return (
    <Layout>
      <Helmet titleTemplate="COGNITIO · %s">
        <title>{`${frontmatter!.memberName}`}</title>
        <meta name="description" content={`${frontmatter!.memberBio}`} />
      </Helmet>
      <MemberPageTemplate
        name={frontmatter!.memberName}
        role={frontmatter!.memberRole}
        thumb={frontmatter!.memberThumb.childImageSharp!.fluid!.src}
        memberSince={frontmatter!.memberSince}
        memberUntil={frontmatter!.memberUntil}
        email={frontmatter!.memberEmail}
        lattes={frontmatter!.memberLattes}
        linkedin={frontmatter!.memberLinkedin}
        bio={frontmatter!.memberBio}
        otherInfos={frontmatter!.memberOtherInfos}
      />
    </Layout>
  );
};

// TODO: add projects

export default MemberPage;

export const memberPageQuery = graphql`
  fragment Member on MarkdownRemark {
    html
    frontmatter {
      memberRole
      memberName
      memberThumb {
        childImageSharp {
          fluid(maxWidth: 240, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      memberSince(formatString: "M/YYYY", locale: "pt-Br")
      memberUntil(formatString: "M/YYYY", locale: "pt-Br")
      memberEmail
      memberLattes
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
    fields {
      slug
    }
    frontmatter {
      memberRole
      memberName
      memberThumb {
        childImageSharp {
          fluid(maxWidth: 240, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      memberSince(formatString: "M/YYYY", locale: "pt-Br")
      memberUntil(formatString: "M/YYYY", locale: "pt-Br")
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
  }
`;
