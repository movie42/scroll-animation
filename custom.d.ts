declare module "*.jpg" {
  const content: React.FunctionComponent<
    React.ImgHTMLAttributes<HTMLImageElement>
  >;
  export default content;
}

declare module "*.jpeg" {
  const content: React.FunctionComponent<
    React.ImgHTMLAttributes<HTMLImageElement>
  >;
  export default content;
}

declare module "*.png" {
  const content: React.FunctionComponent<
    React.ImgHTMLAttributes<HTMLImageElement>
  >;
  export default content;
}

declare module "*.gif" {
  const content: React.FunctionComponent<
    React.ImgHTMLAttributes<HTMLImageElement>
  >;
  export default content;
}

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;
}
