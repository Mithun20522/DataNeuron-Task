import React, { useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import ShowData from '../components/ShowData';

const ResponsiveGridLayout = WidthProvider(Responsive);

const Home = () => {
  const [layouts, setLayouts] = useState({
    lg: [
      { i: 'component1', x: 0, y: 0, w: 6, h: 4 },
      { i: 'component2', x: 6, y: 0, w: 6, h: 4 },
      { i: 'component3', x: 0, y: 4, w: 12, h: 4 }
    ]
  });

  const handleResize = (layout, oldItem, newItem) => {
    const newLayout = layout.map(item => {
      if (item.i === newItem.i) {
        return newItem;
      }
      return item;
    });
    setLayouts({ lg: newLayout });
  };

  return (
    <div className="bg-gray-200 p-5">
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200 }}
        cols={{ lg: 12 }}
        rowHeight={100}
        margin={[10, 10]}
        resizeHandles={['s','e','w','n','se','ne','nw','sw']}
        draggableHandle=".draggable-handle"
        draggableCancel=".no-drag"
        onResize={handleResize}
      >
        <div key="component1" className="component bg-white border rounded-md flex flex-col justify-center items-center">
          <ShowData window={'window-1'} />
        </div>
        <div key="component2" className="component bg-white border rounded-md flex flex-col justify-center items-center">
          <ShowData window={'window-2'} />
        </div>
        <div key="component3" className="component bg-white border rounded-md flex flex-col justify-center items-center">
          <ShowData window={'window-3'} />
        </div>
      </ResponsiveGridLayout>
    </div>
  );
};

export default Home;
