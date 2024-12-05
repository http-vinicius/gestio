import { Dayjs } from 'dayjs';
import { createContext, PropsWithChildren, useContext, useState } from 'react';

type GlobalContextValues = {
  monthIndex: Dayjs[][];
  setMonthIndex: (index: Dayjs[][]) => void;
};

const GlobalContex = createContext<GlobalContextValues>(
  {} as GlobalContextValues
);

const GlobalProvider = ({ children }: PropsWithChildren) => {
  const [monthIndex, setMonthIndex] = useState<Dayjs[][]>([]);

  const values = {
    monthIndex,
    setMonthIndex,
  };

  return (
    <GlobalContex.Provider value={values}>{children}</GlobalContex.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContex);

  if (!context) {
    throw new Error('useGlobal deve ser utilizado dentro de um GlobalProvider');
  }

  return context;
};

export default GlobalProvider;
