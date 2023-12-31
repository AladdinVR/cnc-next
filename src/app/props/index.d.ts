export type FeaturedPostProps = {
  post: {
    date: string;
    description: string;
    image: string;
    imageLabel: string;
    title: string;
  };
};

export type FooterProps = {
  description: string;
  title: string;
};

export type HeaderProps = {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
  theme: Theme;
  themeSelected: "light" | "dark";
  setThemeSelected: React.Dispatch<React.SetStateAction<"light" | "dark">>;
};

export type HomeProps = {
  en: string;
  fr: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

export type HistoryProps = {
  en: string;
  fr: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

export type JoinProps = {
  en: string;
  fr: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

export type MainProps = {
  en: string;
  fr: string;
};

export type MarkdownProps = {
  fileName: string;
};

export type TrainingProps = {
  en: string;
  fr: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

export type RecordsProps = {
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

export type RecordsRows = {
  id: number;
  swim: string;
  length: string;
  lastName: string;
  firstName: string;
  time: string;
  place: string;
  date: moment;
};

export type SelectButtonProps = {
  div?: React.HTMLAttributes<HTMLDivElement>;
  className?: string;
  menuItemsStyle?: SxProps<Theme>;
  selectItems: {
    inputLabel: { text: string };
    menuItems: { id: number | string; text: string }[];
  };
  onChange?: (e: SelectChangeEvent<string>) => void;
  onClick?: (e: SelectChangeEvent<string>) => void;
  defaultValue: string;
};

export type SidebarProps = {
  archives?: ReadonlyArray<{
    url: string;
    title: string;
  }>;
  description?: string;
  social: ReadonlyArray<{
    icon: React.ElementType;
    name: string;
    href: string;
  }>;
  title?: string;
};

export type SongProps = {
  en: string;
  fr: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
};
