import { RecordDataProvider } from "./RecordDataContext";

function RecordsSearchPage({ children }: { children: React.ReactNode }) {
  return <RecordDataProvider>{children}</RecordDataProvider>;
}

export default RecordsSearchPage;
