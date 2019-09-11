import css from '@emotion/css';
import styled from '@emotion/styled';
import React from 'react';
import Icon, { Icons } from '../components/Icon';
import Link from "../lib/gatsby-link";
import { letterSpacing } from '../style/helpers';
import { mqMobile } from '../style/mediaQueries';
import { centerContent, fillContainer } from '../style/modifiers';
import { colorGradient, colorPrimary, colorSecondary, colorTertiary } from '../style/theme';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

type Props = {
  label?: string;
  onClick?: () => any;
  className?: string;
  href?: string;
  to?: string;
  noNewTab?: boolean;
  outline?: boolean;
  small?: boolean;
  leadingIcon?: Icons;
};

const Container = styled.div`
  position: relative;

  display: inline-flex;
  color: #fff;

  border-radius: 100px;
  z-index: 0;

  &::before {
    ${fillContainer};
    content: '';
    border-radius: 100px;
    opacity: 0.85;
    transition: 160ms;
    z-index: -1;
  }

  &:hover::before {
    opacity: 1;
  }

  a, button {
    text-align: center;
    ${centerContent};
    /* z-index: 1; */
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 300;
    padding: 12px 26px;
    height: 100%;
    width: 100%;

    ${mqMobile} {
      padding: 10px 26px;
      font-size: 18px;
    }
  }

  span {
    ${letterSpacing(12)};
  }
`;

const filledTypeStyle = css`
  button {
    color: #fff;
  }

  &::before {
    background: ${colorGradient()};
  }
`;

const outlineTypeStyle = css`
  color: #000;

  &::before {
    border: solid 1.5px ${colorSecondary};
  }

  &:hover::before {
    border-color: ${colorTertiary};
  }
`;

const smallStyle = css`
  font-weight: 400;

  a, button {
    font-size: 12px;
    padding: 6px 14px;

    ${mqMobile} {
      padding: 4px 14px;
      font-size: 10px;
    }
  }
`;

const LeadingIcon = styled(Icon)`
  margin-right: 6px;
  margin-left: -4px;
`;

const ButtonContent = ({ label, outline, leadingIcon, small }: Props) => (
  <>
    {leadingIcon && (
      <LeadingIcon
        name={leadingIcon}
        size={small ? 18 : 24}
        color={outline ? colorTertiary : '#fff'}
      />
    )}
    {label && <span>{label}</span>}
    {!leadingIcon && (
      <Icon
        name="arrowRight"
        css={css`
          margin-left: ${small ? 4 : 8}px;
          margin-right: -6px;
          transition: 160ms;

          ${Container}:hover & {
            transform: translate3d(${small ? 1.5 : 3}px, 0, 0);
          }
        `}
        size={small ? 16 : 24}
        color={outline ? colorPrimary : '#fff'}
      />
    )}
  </>
);

const Button = ({
  label,
  onClick,
  className,
  href,
  to,
  small,
  outline,
  leadingIcon,
  noNewTab,
}: Props) => {
  const Content = (
    <ButtonContent
      label={label}
      outline={outline}
      leadingIcon={leadingIcon}
      small={small}
    />
  );

  return (
    <Container
      className={className}
      css={[!outline ? filledTypeStyle : outlineTypeStyle, small && smallStyle]}
    >
      {to ? (
        <Link to={to}>{Content}</Link>
      ) : href ? (
        <OutboundLink
          href={href}
          target={noNewTab ? undefined : '_blank'}
          rel="noopener noreferrer"
        >
          {Content}
        </OutboundLink>
      ) : (
        <button onClick={onClick} type="button">
          {Content}
        </button>
      )}
    </Container>
  );
};

export default Button;
