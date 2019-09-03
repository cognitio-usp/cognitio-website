import styled from '@emotion/styled';
import { rgba } from '@lucasols/utils';
import { Link } from 'gatsby';
import GatsbyImage, { FluidObject } from 'gatsby-image';
import React from 'react';
import { oc } from 'ts-optchain.macro';
import { letterSpacing, circle } from '../style/helpers';
import { centerContent, centerContentCollum } from '../style/modifiers';
import { colorSecondary } from '../style/theme';
import { Maybe, MemberCardFragment } from '../typings/graphql';
import SectionHeader from './SectionHeader';

type Props = {
  sectionLabel?: string;
  members?: MemberCardFragment[] | null;
};

const Container = styled.div`
  ${centerContent};
  padding: 0 10px;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const Card = styled.div`
  ${centerContentCollum};
  margin: 16px 24px;
  width: 240px;

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

  a {
    ${centerContentCollum};
  }
`;

const ProfileImage = styled.div`
  ${circle(200)};
  overflow: hidden;
  border: 1.5px solid ${rgba(colorSecondary, 0.4)};

  ${Card}:hover & {
    border-color: ${colorSecondary};
  }
`;

const Members = ({ members, sectionLabel = 'Membros' }: Props) => {
  return members && members.length > 0 ? (
    <>
      <SectionHeader label={sectionLabel} />
      <Container>
        {members.map((item, i) => {
          if (!item) return null;
          const { frontmatter, fields } = item;

          const image = oc(frontmatter).memberThumb.childImageSharp.fluid();

          return (
            <Card key={i}>
              <Link to={oc(fields).slug() || 'ERROR'}>
                {image && (
                  <ProfileImage>
                    <GatsbyImage fluid={image as FluidObject} />
                  </ProfileImage>
                )}
                <h1>{oc(frontmatter).memberName()}</h1>
                <h2>{oc(frontmatter).memberRole()}</h2>
              </Link>
            </Card>
          );
        })}
      </Container>
    </>
  ) : null;
};

export default Members;
