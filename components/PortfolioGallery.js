
import React from 'react';
import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';

function PortfolioGallery() {
  const items = [
    {
      itemId: 'yuta',
      mediaUrl: './img/yuta.jpg',
      metaData: {
        type: 'image',
        height: 2607,
        width: 1888,
        title: 'Okkotsu Yuta',
        description: 'March 2022. Jujutsu Kaisen 0 fanart.',
        focalPoint: [0, 0],
      },
    },
    {
      itemId: 'aki',
      mediaUrl: './img/aki.jpg',
      metaData: {
        type: 'image',
        height: 3543,
        width: 3882,
        title: 'Aki Hayakawa',
        description: 'April 2022. Chainsaw Man fanart.',
        focalPoint: [0, 0],
      }
    },
    {
      itemId: '4taro',
      mediaUrl: './img/4taro.jpg',
      metaData: {
        type: 'image',
        height: 3990,
        width: 3056,
        title: 'Immersed',
        description: 'May 2022. Jojo\'s Bizarre Adventure fanart.',
        focalPoint: [0, 0],
      }
    },
    {
      itemId: 'jojo',
      mediaUrl: './img/jojo.jpg',
      metaData: {
        type: 'image',
        height: 2426,
        width: 2872,
        title: 'Jotaro',
        description: 'April 2022. Jojo\'s Bizarre Adventure fanart.',
        focalPoint: [0, 0],
      }
    },
    {
      itemId: 'goldenwind',
      mediaUrl: './img/goldenwind.jpg',
      metaData: {
        type: 'image',
        height: 2349,
        width: 3052,
        title: 'Golden Wind',
        description: 'June 2022. Jojo\'s Bizarre Adventure fanart.',
        focalPoint: [0, 0],
      }
    },
    {
      itemId: 'kira',
      mediaUrl: './img/killerqueen.jpg',
      metaData: {
        type: 'image',
        height: 3285,
        width: 2734,
        title: 'Yoshikage Kira',
        description: 'May 2022. Jojo\'s Bizzare Adventure fanart.',
        focalPoint: [0, 0],
      }
    },
    {
      itemId: 'risotto',
      mediaUrl: './img/risotto.jpg',
      metaData: {
        type: 'image',
        height: 3543,
        width: 3280,
        title: 'Risotto',
        description: 'June 2022. Jojo\'s Bizzare Adventure fanart.',
        focalPoint: [0, 0],
      }
    },
    {
      itemId: 'abbacchio',
      mediaUrl: './img/abbacchio.jpg',
      metaData: {
        type: 'image',
        height: 3134,
        width: 2639,
        title: 'Abbacchio',
        description: 'June 2022. Jojo\'s Bizzare Adventure fanart.',
        focalPoint: [0, 0],
      }
    },

    // {
    //   itemId: 'htmlItem',
    //   html: "<div style='width: 300px; height: 200px; background:pink;'>I am a text block</div>",
    //   metadata: {
    //     type: "text",
    //     height: 200,
    //     width: 300,
    //     title: 'sample-title',
    //     description: 'sample-description',
    //     backgroundColor: 'pink'
    //   },

    // },
  ]


  // The options of the gallery (from the playground current state)
  const options = {
    galleryLayout: 1,
    imageMargin: 0,
    hoveringBehaviour: 'NEVER_SHOW',
    gallerySize: 100,
    // cubeType: 'fit',
    // titlePlacement: 'SHOW_ON_HOVER',
    allowContextMenu: false,
  };

  // The size of the gallery container. The images will fit themselves in it
  const container = {
    width: window.innerWidth,
    height: window.innerHeight * 0.87
  };

  // The eventsListener will notify you anytime something has happened in the gallery.
  // const eventsListener = (eventName, eventData) => console.log({ eventName, eventData });

  // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
  const scrollingElement = window;

  return (
    <ProGallery
      items={items}
      options={options}
      container={container}
      // eventsListener={eventsListener}
      scrollingElement={scrollingElement}
    />
  );
}

export default PortfolioGallery;

  // Enjoy using your new gallery!
  // For more options, visit https://github.com/wix/pro-gallery
