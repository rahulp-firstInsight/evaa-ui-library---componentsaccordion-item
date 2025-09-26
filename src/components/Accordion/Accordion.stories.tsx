import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionProps } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible accordion component that supports single or multiple open items, with optional flush styling and disabled states.',
      },
    },
  },
  argTypes: {
    allowMultiple: {
      control: 'boolean',
      description: 'Allow multiple accordion items to be open at the same time',
    },
    flush: {
      control: 'boolean',
      description: 'Remove borders and rounded corners for a flush appearance',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the accordion',
    },
    defaultOpenItems: {
      control: 'object',
      description: 'Array of item IDs that should be open by default',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const sampleItems = [
  {
    id: 'item-1',
    title: 'Accordion Item #1',
    content: (
      <div>
        <p>This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.</p>
        <p>These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</p>
      </div>
    ),
  },
  {
    id: 'item-2',
    title: 'Accordion Item #2',
    content: (
      <div>
        <p>This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.</p>
        <ul>
          <li>List item one</li>
          <li>List item two</li>
          <li>List item three</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'item-3',
    title: 'Accordion Item #3',
    content: (
      <div>
        <p>This is the third item's accordion body. It demonstrates how you can include various types of content.</p>
        <button style={{ padding: '8px 16px', backgroundColor: '#0d6efd', color: 'white', border: 'none', borderRadius: '4px' }}>
          Sample Button
        </button>
      </div>
    ),
  },
];

const disabledItems = [
  ...sampleItems.slice(0, 2),
  {
    ...sampleItems[2],
    disabled: true,
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
    allowMultiple: false,
    flush: false,
  },
};

export const AllowMultiple: Story = {
  args: {
    items: sampleItems,
    allowMultiple: true,
    flush: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'When `allowMultiple` is true, users can open multiple accordion items simultaneously.',
      },
    },
  },
};

export const Flush: Story = {
  args: {
    items: sampleItems,
    allowMultiple: false,
    flush: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Flush accordion removes borders and rounded corners for a seamless appearance.',
      },
    },
  },
};

export const WithDisabledItem: Story = {
  args: {
    items: disabledItems,
    allowMultiple: false,
    flush: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Accordion items can be disabled to prevent user interaction.',
      },
    },
  },
};

export const DefaultOpen: Story = {
  args: {
    items: sampleItems,
    allowMultiple: true,
    flush: false,
    defaultOpenItems: ['item-1', 'item-3'],
  },
  parameters: {
    docs: {
      description: {
        story: 'You can specify which items should be open by default using the `defaultOpenItems` prop.',
      },
    },
  },
};

export const SingleItem: Story = {
  args: {
    items: [sampleItems[0]],
    allowMultiple: false,
    flush: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Accordion works perfectly with just a single item.',
      },
    },
  },
};

export const LongContent: Story = {
  args: {
    items: [
      {
        id: 'long-content',
        title: 'Accordion with Long Content',
        content: (
          <div>
            <h4>Long Content Example</h4>
            <p>This accordion item contains a lot of content to demonstrate how the component handles longer text and various elements.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h5>Subsection</h5>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '4px', margin: '16px 0' }}>
              <strong>Note:</strong> This is a highlighted section within the accordion content.
            </div>
          </div>
        ),
      },
    ],
    allowMultiple: false,
    flush: false,
    defaultOpenItems: ['long-content'],
  },
  parameters: {
    docs: {
      description: {
        story: 'Accordion handles long content gracefully with smooth animations.',
      },
    },
  },
};
