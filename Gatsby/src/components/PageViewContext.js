import React, { useRef } from 'react';

export const PageViewContext = React.createContext();

export const PageViewProvider = function ({ children }) {
  const pageViewCountIndex = useRef(0);
  const pageViewCountPptCreate = useRef(0);
  const pageViewCountSOT = useRef(0);

  const contextValue = React.useMemo(
    () => ({
      pageViewCountIndex,
      pageViewCountPptCreate,
      pageViewCountSOT,
    }),
    [pageViewCountIndex, pageViewCountPptCreate, pageViewCountSOT]
  );

  return (
    <PageViewContext.Provider value={contextValue}>
      {children}
    </PageViewContext.Provider>
  );
};
