import { renderComponent , expect } from '../test_helper';
import PostsIndex from '../../src/components/posts_index';

describe('PostsIndex' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(PostsIndex);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});