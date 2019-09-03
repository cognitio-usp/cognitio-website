import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { joinWith, letterSpacing } from '../style/helpers';
import { colorSecondary, colorTertiary } from '../style/theme';
import { rgba } from '@lucasols/utils';
import { ellipsis } from 'polished';
import { centerContent } from '../style/modifiers';

type Props = {
  projects: {
    label: string;
    toLink: string;
  }[];
  className?: string;
};

const Container = styled.div`
  color: ${colorSecondary};
`;

const Tag = styled(Link)`
  font-size: 12px;
  font-weight: 400;
  display: inline-block;
  text-transform: uppercase;
  height: 24px;
  border: 1.5px solid ${rgba(colorSecondary, 0.2)};
  border-radius: 40px;
  margin: 4px;
  line-height: 24px;
  padding: 0 8px;

  span {
    margin-top: -1px;
    ${ellipsis(200)};
    ${letterSpacing(4)};
  }
`;

const Tags = ({ projects, className }: Props) => (
  <Container className={className}>
    {projects.map(item => (
      <Tag key={item.label} to={item.toLink} title={item.label}>
        <span>{item.label}</span>
      </Tag>
    ))}
  </Container>
);

export default Tags;
