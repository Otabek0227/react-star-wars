import UiButton from "./UiButton";

export default {
    title: 'UI-KIT/UiButton',
    component: UiButton
}

const Template = (args) => <UiButton {...args} />;

export const Primary = Template.bind({});
Primary.args = { onClick: () => console.log('Button Clicked'), disabled: false, children: 'Hello from teding' };