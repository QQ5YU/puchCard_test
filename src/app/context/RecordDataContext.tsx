"use client";
import { createContext, useContext, useState } from "react";

const RecordDataContext = createContext([] as any);

export function RecordDataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [allRecordData, setAllRecordData] = useState([]);

  return (
    <RecordDataContext.Provider value={{ allRecordData, setAllRecordData }}>
      {children}
    </RecordDataContext.Provider>
  );
}

export function useAllRecordData() {
  return useContext(RecordDataContext);
}
