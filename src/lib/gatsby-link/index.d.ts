/* eslint-disable react/prefer-stateless-function */
import * as React from 'react';

export interface GatsbyLinkProps<TState> extends LinkProps<TState> {
  /** A class to apply when this Link is active */
  activeClassName?: string;
  /** Inline styles for when this Link is active */
  activeStyle?: object;
  innerRef?: Function;
  title?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  /** Class the link as highlighted if there is a partial match via a the `to` being prefixed to the current url */
  partiallyActive?: boolean;
  /** Used to declare that this link replaces the current URL in history with the target */
  replace?: boolean;
  /** The URL you want to link to */
  to: string;
}

/**
 * This component is intended _only_ for links to pages handled by Gatsby. For links to pages on other
 * domains or pages on the same domain not handled by the current Gatsby site, use the normal `<a>` element.
 */
export default class GatsbyLink<TState> extends React.Component<
  GatsbyLinkProps<TState>,
  any
> {}
