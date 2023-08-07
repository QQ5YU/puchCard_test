import Image from "next/image";
import Link from "next/link";
import "./gpsLocation.css";

export default function UserLocationPage() {
  return (
    <div className="mx-auto px-[11.23%]">
      {/* title  */}
      <h1 className="text-mainBlue font-bold text-2xl mt-[97px] w-full">
        GPS 定位打卡
      </h1>
      {/* location img  */}
      <div className="bg-[#ECECEC] rounded-lg w-[390px] h-[48.94px] mt-8 p-4 flex items-center justify-between ">
        <label className="text-sm text-[#8B8B8B] inline-block">
          定位我的位置
        </label>
        <button
          type="button"
          title="locationBtn"
          className="bg-[#F03C5C] rounded-full w-[29px] h-[29px] flex justify-center items-center"
        >
          <Image
            src="../images/gpsLocation/NavigationArrow.svg"
            width={19}
            height={19}
            alt="NavigationArrow icon"
          ></Image>
        </button>
      </div>
      {/*  description */}
      <div className="flex flex-col items-center justify-center mt-24">
        <Image
          src="../images/gpsLocation/location.svg"
          width={72}
          height={72}
          alt="location"
        ></Image>
        <p className="text-mainBlue font-bold text-2xl  mt-6">立即打卡</p>
        <p className="mt-12 w-[390px] text-center text-base text-[#564A4A] font-bold">
          打卡後的五分鐘內請儘快修改您的打卡資料
          並且確保您輸入的資訊是正確且準確的 若
          <span className="text-mainBlue font-bold inline-block relative">
            超過五分鐘未送出打卡資料
          </span>
          ，系統將自動將您導回打卡頁面，請重新進行打卡。
        </p>
      </div>
      {/* buttons  */}
      <div className="mt-24 mb-[81px]">
        <Link
          href="/user/recordSearch"
          className="bg-buttonBlueColor rounded-lg text-white font-bold py-5 px-2 w-[182px] inline-block text-center"
        >
          打卡紀錄查詢/修改
        </Link>
        <button
          type="submit"
          className="bg-buttonOrangeColor rounded-lg text-white font-bold py-5 px-2 w-[182px] ml-5 text-center "
        >
          開始打卡
        </button>
      </div>
    </div>
  );
}
