import { data } from "../data/data";
import LinkComponent from "./LinkComponent";
export default async function recordList() {
  return (
    <>
      {data &&
        data.map((record) => (
          <div
            className="flex rounded-lg shadow-record bg-[#FBFBFB] w-full py-3 pl-[10px] pr-[21p] mt-[26px]"
            key={record.id}
          >
            <div className="w-[64.62%] w-min-[252px] w-max-[260px] mr-7">
              <div className="w-full bg-[#74ADF080] py-2 px-[19px] rounded-t-md">
                <span className="mr-7">{record.date}</span>
                <span>{record.time}</span>
              </div>
              <div className="w-full bg-[#6091CA20] py-2 px-[19px] rounded-b-md">
                <span>{record.location}</span>
              </div>
            </div>
            <div className="flex flex-col justify-around">
              <LinkComponent
                href={`/recordsSearch/modify/${record.id}`}
                bgColor="buttonOrangeColor"
                text="修改"
              />
              <LinkComponent
                href={`/recordsSearch/viewHistory/${record.id}`}
                bgColor="buttonBlueColor"
                text="查看"
                margin="mt-2"
              />
            </div>
          </div>
        ))}
    </>
  );
}
