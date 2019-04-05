declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "*.html" {
  const template: string;
  export default template;
}
