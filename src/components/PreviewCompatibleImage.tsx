import Img, { FluidObject } from 'gatsby-image';
import React, { CSSProperties } from 'react';
import { ImageSharpFluid } from '../typings/graphql';

type Props = {
  imageInfo: ImageSharpFluid | string;
  className?: string;
  fillContainer?: boolean;
  padding?: string;
  contain?: boolean | null;
};

const fillContainerStyle: CSSProperties = {
  height: '100%',
  width: '100%',
  position: 'absolute',
};

const PreviewCompatibleImage = ({
  imageInfo,
  className,
  fillContainer,
  padding,
  contain,
}: Props) => {
  if (typeof imageInfo === 'string') {
    return (
      <img
        className={className}
        style={{
          ...(fillContainer ? fillContainerStyle : {}),
          padding,
          objectFit: contain ? 'contain' : 'cover',
        }}
        src={imageInfo}
        alt=""
      />
    );
  }

  return (
    <Img
      style={{
        ...(fillContainer ? fillContainerStyle : {}),
      }}
      imgStyle={{
        padding,
        objectFit: contain ? 'contain' : 'cover',
      }}
      className={className}
      fluid={imageInfo as FluidObject}
    />
  );
};

export default PreviewCompatibleImage;
