import styled from '@emotion/styled';
import { rgba } from '@lucasols/utils';
import Link from '../lib/gatsby-link';
import React from 'react';
import { oc } from 'ts-optchain.macro';
import { circle } from '../style/helpers';
import {
  centerContent,
  centerContentCollum,
  fillContainer,
} from '../style/modifiers';
import { colorSecondary } from '../style/theme';
import { MemberCardFragment } from '../typings/graphql';
import Button from './Button';
import SectionHeader from './SectionHeader';
import Icon from './Icon';
import PlexusContainer from './PlexusContainer';
import PreviewCompatibleImage from './PreviewCompatibleImage';

type Props = {
  sectionLabel?: string;
  sort?: boolean;
  members?: (MemberCardFragment | null | undefined)[] | null;
};

const Container = styled.div`
  ${centerContent};
  padding: 0 10px;
  margin-bottom: -24px;
  flex-wrap: wrap;
  max-width: 1100px;
  align-items: flex-start;
`;

const Card = styled.div`
  ${centerContentCollum};
  position: relative;
  justify-content: flex-start;
  margin: 16px 24px;
  margin-bottom: 40px;
  width: 260px;

  &::before {
    content: '';
    margin: -16px;
    ${fillContainer};
    background: ${rgba(colorSecondary, 0.04)};
    border-radius: 8px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 160ms;
  }

  &:hover::before {
    opacity: 1;
  }

  h1,
  h2,
  h3 {
    text-align: center;
    font-weight: 400;
    line-height: 1.4;
  }

  h1 {
    margin-top: 10px;
    font-size: 20px;
  }

  h2 {
    font-size: 18px;
    font-weight: 300;
  }

  > a {
    width: 100%;
    ${centerContentCollum};
    justify-content: flex-start;
  }
`;

const ProfileImage = styled.div`
  ${circle(200)};
  overflow: hidden;
  position: relative;
  border: 2px solid ${rgba(colorSecondary, 0.3)};
  transition: border-color 160ms;
  z-index: 1;

  ${Card} a:hover & {
    border-color: ${colorSecondary};
  }
`;

const Members = ({ members, sectionLabel = 'Membros', sort }: Props) => {
  const sortedMembers = sort
    ? members &&
      members.sort(
        (a, b) =>
          oc(a).frontmatter.memberType(-500)
          - oc(b).frontmatter.memberType(-500),
      )
    : members;

  return sortedMembers && sortedMembers.length > 0 ? (
    <>
      <SectionHeader label={sectionLabel} />
      <Container>
        {sortedMembers.map((item, i) => {
          if (!item) return null;

          const { frontmatter, fields } = item;

          const image = oc(frontmatter).image.childImageSharp.fluid();

          const lattes = frontmatter?.memberLattes;
          const linkedIn = frontmatter?.memberLinkedin;

          const featuredLink = frontmatter?.memberFeaturedLink?.url
            ? frontmatter.memberFeaturedLink
            : lattes
              ? {
                  label: 'CV Lattes',
                  url: lattes,
                }
              : linkedIn
                ? {
                    label: 'LinkedIn',
                    url: linkedIn,
                  }
                : undefined;

          return (
            <Card key={i}>
              <Link
                css={{ position: 'relative' }}
                to={oc(fields).slug() || 'ERROR'}
                title="Acessar página do membro"
              >
                <ProfileImage>
                  {image ? (
                    <PreviewCompatibleImage imageInfo={image} fillContainer />
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
                <h1>{oc(frontmatter).memberName()}</h1>
                <h2>{oc(frontmatter).memberRole()}</h2>
              </Link>
              {featuredLink && (
                <Button
                  css={{ marginTop: 8 }}
                  small
                  outline
                  leadingIcon="link"
                  label={featuredLink.label || 'Link'}
                  href={featuredLink.url || undefined}
                />
              )}
            </Card>
          );
        })}
      </Container>
    </>
  ) : null;
};

export default Members;
