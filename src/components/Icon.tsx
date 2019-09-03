import iconsSet from '../data/icons';
import * as React from 'react';
import { colorPrimary } from '../style/theme';
import { obj } from '../typings/utils';
import { __DEV__ } from '../utils/isDev';

export type JsonIcon = {
  viewBox?: string;
  paths?: (obj | string)[];
};

export type Icons = keyof typeof iconsSet;

type Icon = {
  name: Icons;
  color?: string;
  className?: string;
  size?: number;
};

const Icon = ({ name, color = colorPrimary, size = 24, className }: Icon) => {
  if (__DEV__ && !iconsSet[name]) throw new Error(`Icon ${name} do not exists`);

  const { viewBox, paths }: JsonIcon = iconsSet[name];

  return (
    <svg
      css={{
        height: size,
        width: size,
        fill: color,
      }}
      className={className}
      viewBox={viewBox}
    >
      {paths &&
        paths.map((attributes, i) => (
          <path
            key={i}
            {...(typeof attributes === 'string'
              ? { d: attributes }
              : attributes
            )}
          />
        ))}
    </svg>
  );
};

export default Icon;
