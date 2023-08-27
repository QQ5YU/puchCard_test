import { data } from "../data/data";
import LinkComponent from "./LinkComponent";
export default function recordList() {
  return (
    <>
      {data &&
        data.map((record) => (
          <div
            className="shadow-record mt-[26px] flex w-full rounded-lg bg-[#FBFBFB] py-3 pl-[10px] pr-[21p]"
            key={record.id}
          >
            <div className="w-min-[252px] w-max-[260px] mr-7 w-[64.62%]">
              <div className="w-full rounded-t-md bg-[#74ADF080] px-[19px] py-2">
                <span className="mr-7">{record.date}</span>
                <span>{record.time}</span>
              </div>
              <div className="w-full rounded-b-md bg-[#6091CA20] px-[19px] py-2">
                <span>{record.location}</span>
              </div>
            </div>
            <div className="flex flex-col justify-around">
              <LinkComponent
                href={`/recordsSearch/modify/${record.id}`}
                bgColor="alertRed"
                text="修改"
              />
              <LinkComponent
                href={`/recordsSearch/viewHistory/${record.id}`}
                bgColor="successBlue"
                text="查看"
                margin="mt-2"
              />
            </div>
          </div>
        ))}
    </>
  );
}
