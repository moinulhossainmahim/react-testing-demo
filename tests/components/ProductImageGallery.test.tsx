import { render, screen } from '@testing-library/react';
import ProductImageGallery from '../../src/components/ProductImageGallery';

describe('ProductImageGallery', () => {
  it('should render list of images', () => {

    const imageUrls = ['test.jpg', 'test1.jpg' ]

    render(<ProductImageGallery imageUrls={imageUrls} />)

    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(2);

    imageUrls.forEach((url, index) => {
      expect(images[index]).toHaveAttribute('src', url);
    })
  })

  it('should render nothing if no imageUrls', () => {

    const { container } = render(<ProductImageGallery imageUrls={[]} />)
    expect(container).toBeEmptyDOMElement();
  })
});
