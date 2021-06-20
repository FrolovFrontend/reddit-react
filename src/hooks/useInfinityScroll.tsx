import { RefObject, useEffect } from 'react';
import { cardListAsync } from 'store/cardsList/actions';
import { useDispatch } from 'react-redux';

export function useInfinityScroll(bottomOfListRef: RefObject<HTMLDivElement>, errorLoading: string, isLoading: boolean) {
  const dispatch = useDispatch();

  useEffect(() => {
    const bottomOfListEl = bottomOfListRef.current;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(cardListAsync());
      }
    }, {
      rootMargin: '50px',
    });
    if (bottomOfListEl && !isLoading && !errorLoading) {
      observer.observe(bottomOfListEl);
    }
    return () => {
      if (bottomOfListEl) {
        observer.unobserve(bottomOfListEl);
      }
    };
  }, [dispatch, errorLoading, isLoading, bottomOfListRef]);
}
