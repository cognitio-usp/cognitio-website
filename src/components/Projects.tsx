import React from 'react';
import styled from '@emotion/styled';
import SectionHeader from './SectionHeader';
import { ProjectsFragment } from '../typings/graphql';
import { Link } from 'gatsby';
import GatsbyImage, { FluidObject } from 'gatsby-image';
import { getImage } from '../utils/getImage';
import { centerContent, centerContentCollum } from '../style/modifiers';
import { rgba } from '@lucasols/utils';
import { colorSecondary } from '../style/theme';
import { ellipsis } from 'polished';
import { letterSpacing } from '../style/helpers';

type Props = {
  moreButton?: true;
  projects?: ProjectsFragment;
};

const Container = styled.div`
  padding: 0 10px;
  ${centerContent};
  flex-wrap: wrap;
`;

const Project = styled(Link)`
  ${centerContentCollum};
  margin: 8px;
  width: 320px;
  height: 200px;
  border: 1.5px solid ${rgba(colorSecondary, 0.4)};
  border-radius: 8px;
  transition: 160ms;
  flex-grow: 0.4;
  overflow: hidden;
  padding: 16px;

  &:hover {
    border-color: ${colorSecondary};
  }

  h1 {
    padding: 0 8px;
    font-size: 22px;
    font-weight: 400;
    ${letterSpacing(4)};
  }
`;

const Image = styled(GatsbyImage)`
  margin-bottom: 16px;
  height: 140px;
  width: 90%;

  img {
    object-fit: contain !important;
  }
`;

const Projects = ({ moreButton, projects }: Props) => {
  return projects && projects.edges.length > 0 ? (
    <>
      <SectionHeader
        label="Projetos de Pesquisa"
        moreButton={moreButton && { label: 'Ver todos', to: '/projetos' }}
      />
      <Container>
        {projects.edges.map((item, i) => {
          const image = getImage(item.node.frontmatter!.projectThumb);

          return (
            <Project key={i} to={item.node.fields!.slug!}>
              {image && <Image fluid={image} />}
              <h1
                css={{ fontSize: !image ? '28px !important' : undefined }}
                title={item.node.frontmatter!.projectName || undefined}
              >
                {item.node.frontmatter!.projectName}
              </h1>
            </Project>
          );
        })}
      </Container>
    </>
  ) : null;
};

export default Projects;
