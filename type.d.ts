interface Title {
  text: string;
}

interface Button {
  bgColor: string;
  text: string;
  type: "submit" | "button";
  isLoading?: boolean;
  margin?: string;
  onClick?: () => void;
}

interface LinkButton {
  href: string;
  text: string;
  bgColor: string;
  margin?: string;
}

interface Input {
  alt: string;
  id: string;
  name: string;
  placeholder: string;
  imgSrc: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type recordType = {
  vw_employee: string;
  vw_type: string;
  vw_addr: string;
  vw_notes: null | string;
  vw_img: null | string;
  vw_punchId: number;
  vw_datetime: string;
};
