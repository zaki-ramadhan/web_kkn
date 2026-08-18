import React, { createContext, useContext, useState, useMemo } from 'react';
import { smartDigitalData, legacyData } from '../data/bpjsData';

const VersionContext = createContext(null);

export function VersionProvider({ children }) {
  // Default to 'new' (SMART DIGITAL client draft)
  const [version, setVersion] = useState('new');

  const isNewVersion = version === 'new';

  const currentData = useMemo(() => {
    return isNewVersion ? smartDigitalData : legacyData;
  }, [isNewVersion]);

  const toggleVersion = (target) => {
    if (target) {
      setVersion(target);
    } else {
      setVersion((prev) => (prev === 'new' ? 'old' : 'new'));
    }
  };

  const value = useMemo(
    () => ({
      version,
      isNewVersion,
      currentData,
      toggleVersion,
    }),
    [version, isNewVersion, currentData]
  );

  return (
    <VersionContext.Provider value={value}>
      {children}
    </VersionContext.Provider>
  );
}

export function useVersion() {
  const context = useContext(VersionContext);
  if (!context) {
    throw new Error('useVersion must be used within a VersionProvider');
  }
  return context;
}
