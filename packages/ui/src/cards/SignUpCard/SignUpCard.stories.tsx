import { ComponentMeta, ComponentStory } from "@storybook/react";
import { findRoleTemplates } from "storybook/mocks";

import { SignUpCard } from "./SignUpCard";

export default {
  title: "Cards/SignUpCard",
  component: SignUpCard,
  argTypes: {},
} as ComponentMeta<typeof SignUpCard>;

const Template: ComponentStory<typeof SignUpCard> = (args) => (
  <SignUpCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  roles: findRoleTemplates,
};
