import React from 'react';
import styled from '@emotion/styled';
import { rgba } from '@lucasols/utils';
import { colorSecondary } from '../style/theme';
import Button from './Button';
import { mqMobile } from '../style/mediaQueries';

type Link = {
  name: string;
  url: string;
};

type Props = {
  cards: {
    description: string;
    links: Link[] | null;
  }[];
};

const Card = styled.div`
  background: ${rgba(colorSecondary, 0.08)};
  padding: 24px 56px;
  margin-bottom: 16px;
  border-radius: 8px;
  width: calc(100% - 20px);
  max-width: 900px;
  line-height: 1.4;
  word-wrap: break-word;

  ${mqMobile} {
    padding: 24px;
  }

  p {
    width: 100%;
  }
`;

const Link = styled(Button)`
  margin-right: 8px;
  margin-top: 12px;
`;

const ResearchCards = ({ cards }: Props) => (
  <>
    {cards.map((item, i) => (
      <Card key={i}>
        <p>{item.description}</p>
        {item.links &&
          item.links.map((link, i2) => (
            <Link
              key={i2}
              outline
              small
              leadingIcon="link"
              label={link.name}
              href={link.url}
            />
          ))}
      </Card>
    ))}
  </>
);

export default ResearchCards;
