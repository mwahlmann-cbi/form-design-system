import React from 'react';
import CheckIcon from 'lib/icons/react/CheckIcon';
import Updatable from '.';

const Template = (args) => <Updatable {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  message: '42',
  children: <button>lorem ipsum</button>,
};

export const Variations = () => (
  <>
    <Updatable message="alert">
      <div
        style={{
          border: '1px dashed #f09',
          padding: '5px',
        }}
      >
        Updatable can wrap <b>anything</b>!
      </div>
    </Updatable>
    <br />
    <br />
    <Updatable message={<CheckIcon size="xs" color="#fff" />}>
      <img src="https://placeimg.com/80/81/animals" />
    </Updatable>
  </>
);
export default {
  component: Updatable,
  title: 'components/Updatable',
};
