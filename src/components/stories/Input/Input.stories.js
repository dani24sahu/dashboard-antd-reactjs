import { BellFilled, MailOutlined } from "@ant-design/icons";
import Input from "./Input";
import { emailSchema, passwordSchema, urlSchema } from "./validationSchema";

export default {
  title: "Inputs/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  placeholder: "Enter text",
};

export const LeftIconInput = Template.bind({});
LeftIconInput.args = {
  placeholder: "Enter text",
  leftIcon: <BellFilled />,
};

export const RightIconInput = Template.bind({});
RightIconInput.args = {
  placeholder: "Enter text",
  rightIcon: <BellFilled />,
};

export const LargeInput = Template.bind({});
LargeInput.args = {
  placeholder: "Large Input",
  size: "large",
};

export const SmallInput = Template.bind({});
SmallInput.args = {
  placeholder: "Small Input",
  size: "small",
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  placeholder: "Enter Password",
  type: "password",
  size: "large",
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  placeholder: "Enter Email",
  leftIcon: <MailOutlined />,
  validationSchema: emailSchema,
  size: "large",
  parameters: {
    controls: { expanded: true },
  },
};

export const PasswordInputWithValidation = Template.bind({});
PasswordInputWithValidation.args = {
  placeholder: "Enter Password",
  type: "password",
  size: "large",
  validationSchema: passwordSchema,
  parameters: {
    controls: { expanded: true },
  },
};

export const UrlInput = Template.bind({});
UrlInput.args = {
  placeholder: "Enter URL",
  type: "url",
  validationSchema: urlSchema, // Use the URL validation schema
  size: "large",
};

const options = ["Apple", "Banana", "Cherry", "Date"];
export const AutoCompleteInput = Template.bind({});
AutoCompleteInput.args = {
  options,
  type: "search",
  required: true,
  placeholder: "Type to search",
  leftIcon: null,
  rightIcon: null,
  size: "large",
  onSelect: (value) => {
    console.log(`Selected: ${value}`);
  },
};
