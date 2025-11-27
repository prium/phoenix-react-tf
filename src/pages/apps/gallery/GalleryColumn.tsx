import GalleryColumnItems from 'components/modules/gallery/GalleryColumnItems';
import GalleryLayout from 'components/modules/gallery/GalleryLayout';
import { defaultIsotopeNavItems, columnItems } from 'data/gallery';
import { useState } from 'react';

const GalleryColumn = () => {
    const [currentItems, setCurrentItems] = useState(columnItems)
    const [selectedCategory, setSelectedCategory] = useState('1');

    const handleNavItemSelect = (category: string | null) => {
      setSelectedCategory(category || '1');
      setCurrentItems(
        columnItems.filter(item =>item.category.includes(category ?? '1'))
      );
    };
  return (
    <GalleryLayout
      title="Gallery"
      defaultActiveKey="1"
      view="column"
      gridLayouts={true}
      navClassName='gap-md-5 nav-underline'
      navItems={defaultIsotopeNavItems}
      onSelect={handleNavItemSelect}
    >
      <GalleryColumnItems columnItems={currentItems} />
    </GalleryLayout>
  );
};

export default GalleryColumn;
