import { RefObject, useEffect, useState } from 'react';
import { cardListAsync } from 'store/cardsList/actions';
import { useDispatch } from 'react-redux';

export function useInfinityScroll(bottomOfListRef: RefObject<HTMLDivElement>, errorLoading: string, isLoading: boolean) {
  const [loadCounter, setLoadCounter] = useState(0);
  const [showLoadButton, setShowLoadButton] = useState(false);
  const dispatch = useDispatch();


  useEffect(() => {
    const bottomOfListEl = bottomOfListRef.current;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoading && !errorLoading) {

        if (loadCounter !== 0 && loadCounter % 3 === 0) {
          setShowLoadButton(true);
        } else {
          setLoadCounter((prevCount) => prevCount + 1);
          setShowLoadButton(false);
          dispatch(cardListAsync());
        }
      }
    }, {
      rootMargin: '50px',
    });

    if (bottomOfListEl) {
      observer.observe(bottomOfListEl);
    }

    return () => {
      if (bottomOfListEl) {
        observer.unobserve(bottomOfListEl);
      }
    };
  }, [dispatch, errorLoading, isLoading, bottomOfListRef, loadCounter, showLoadButton]);

  const handleLoadButton = () => {
    setLoadCounter((prevCount) => prevCount + 1);
    setShowLoadButton(false);
    dispatch(cardListAsync());
  };

  return { showLoadButton, handleLoadButton };
}
