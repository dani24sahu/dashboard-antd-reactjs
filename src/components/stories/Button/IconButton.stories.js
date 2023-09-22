import { DeleteOutlined, SearchOutlined } from "@ant-design/icons";
import IconButton from "./IconButton";

export default {
  title: "Buttons/Icon Button",
  component: IconButton,
};

export const LeftIcon = (args) => <IconButton {...args} />;

LeftIcon.args = {
  icon: <DeleteOutlined />,
  iconPosition: 'left',
  label: 'Delete',
  onClick: () => alert('You clicked delete'),
};

LeftIcon.argTypes = {
  icon: {
    control: {
      type: 'select',
      options: [<DeleteOutlined />, <SearchOutlined />],
    },
  },
  parameters:{
    iconPosition: {
      control: {
        type: 'radio',
        options: ['left', 'right'],
      },
    },
  }
};
export const RightIcon = (args) => <IconButton {...args} />;

RightIcon.args = {
  ...LeftIcon.args,
  iconPosition: 'right',
};
