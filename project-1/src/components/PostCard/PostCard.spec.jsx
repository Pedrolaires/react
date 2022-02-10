import { render, screen } from '@testing-library/react';
import { PostCard } from '.';
import { postCardPropsMock } from './mock';

const props = postCardPropsMock;

describe('<PostCard />', () => {
  it('should render "postcard" correctly', () => {
    render(<PostCard {...props} />);

    const img = screen.getByRole('img', { name: props.title });
    const h2 = screen.getByRole('heading', { name: props.title });

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', props.cover);
    expect(h2).toBeInTheDocument();
    expect(screen.getByText('body1')).toBeInTheDocument();

  });
  it('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);

    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot();
  });

});