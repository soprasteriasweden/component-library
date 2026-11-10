import type { Preview } from "@storybook/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../src/assets/styles/Text.scss";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
