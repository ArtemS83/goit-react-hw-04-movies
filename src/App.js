import { useState, useEffect } from 'react';
import imagesApi from 'services/imagesApi';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Loader from 'react-loader-spinner';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  App: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: 16,
    paddingBottom: 24,

    '& svg': {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

const App = () => {
  const [images, setImages] = useState([]); //hits
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalImages, setTotalImages] = useState(null); //totalHits
  const [btnLoadMoreDisabled, setBtnLoadMoreDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const classes = useStyles();

  const hendelSearchImages = valueSerch => {
    if (valueSerch === searchQuery) return;
    setSearchQuery(valueSerch);
    setCurrentPage(1);
    setImages([]);
    setTotalImages(null);
    setBtnLoadMoreDisabled(false);
  };
  const hendelLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setIsLoading(true);
    imagesApi
      .fetchImages({ searchQuery, currentPage })
      .then(data => {
        setImages(prevImages => [...prevImages, ...data.hits]);
        setTotalImages(data.totalHits);

        if (
          data.hits.length < 12 ||
          data.totalHits === data.hits.length * (currentPage - 1)
        ) {
          setBtnLoadMoreDisabled(true);
        }

        if (currentPage < 2) return;
        const scrollHeight =
          document.documentElement.clientHeight +
          document.documentElement.scrollTop -
          150;
        window.scrollTo({
          // top: document.documentElement.scrollHeight, //прокрутка на всю длину документа
          top: scrollHeight,
          behavior: 'smooth', // можно убрать,подключено на html
        });
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, [searchQuery, currentPage]);

  return (
    <div className={classes.App}>
      <Searchbar onSubmit={hendelSearchImages} />
      {/* {isLoading && <h1>Loading...</h1>} */}
      {!totalImages && (
        <Loader
          type="Puff"
          color="#3f51b5"
          height={60}
          width={60}
          visible={isLoading}
        />
      )}
      {totalImages !== null && (
        <ImageGallery
          images={images}
          totalImages={totalImages}
          onLoadMore={hendelLoadMore}
          btnLoadMoreDisabled={btnLoadMoreDisabled}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default App;
