"use client";
import { createContext, useContext, useState } from "react";

const RecordDataContext = createContext([] as any);

export function RecordDataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [recordData, setRecordData] = useState([]);

  return (
    <RecordDataContext.Provider value={{ recordData, setRecordData }}>
      {children}
    </RecordDataContext.Provider>
  );
}

export function useRecordData() {
  return useContext(RecordDataContext);
}
