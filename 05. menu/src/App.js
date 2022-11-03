import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// unique categories with set
// const AllCategories =['all',...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  // for getting unique categories
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  useEffect(() => {
    const catArray = [];
    items.map((item) => catArray.push(item.category));
    const uniqueArray = catArray.filter(onlyUnique);

    setCategories((prevArray) => [prevArray, 'all', ...uniqueArray]);
  }, []);

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
