// feature flags
// declare const __DEV__: boolean;
// declare const __PROD__: boolean;

declare module "*.svg" {
  const content: string;
  export default content;
}
