type SizeCols =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12';

type GridProps = {
  children: React.ReactNode;
  lg?: SizeCols;
  md?: SizeCols;
  sm?: SizeCols;
  styles?: string;
};

export default function Grid({ children, lg, md, sm, styles }: GridProps) {
  return (
    <div
      className={`${styles} grid lg:grid-cols-${lg} md:grid-cols-${md} gap-2 sm:grid-cols-${sm}`}
    >
      {children}
    </div>
  );
}
