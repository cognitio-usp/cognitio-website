import { Maybe, GatsbyImageSharpFluidFragment } from '../typings/graphql';
import { FluidObject } from 'gatsby-image';

export type ImageNode = Maybe<{
  childImageSharp: Maybe<{
    fluid: Maybe<GatsbyImageSharpFluidFragment>;
  }>;
}>;

export function getImage(image: ImageNode) {
  return image && image.childImageSharp && (image.childImageSharp.fluid as FluidObject);
}
