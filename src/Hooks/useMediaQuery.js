import { useMediaQuery } from 'react-responsive';

function useResponsive() {
  const xs = useMediaQuery({ query: '(max-width: 576px)' });
  const lg = useMediaQuery({ query: '(min-width: 992px)' });

  return { xs, md: !(xs || lg), lg };
}

export default useResponsive;
