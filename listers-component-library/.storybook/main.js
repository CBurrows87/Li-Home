module.exports = {
  stories: ["../src/**/*.stories.{tsx,mdx}"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs/register",
    "@storybook/addon-docs",
    "@storybook/addon-a11y/register",  
  ]
};
