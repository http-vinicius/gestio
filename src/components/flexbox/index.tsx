type FlexBoxProps = {
  direction?: 'flex-row' | 'flex-row-reverse' | 'flex-col' | 'flex-col-reverse';
  flexWrap?: 'flex-wrap' | 'flex-wrap-reverse' | 'flex-nowrap';
  flexGrow?: 'grow' | 'grow-0';
  alignItems?:
    | 'items-start'
    | 'items-end'
    | 'items-center'
    | 'items-baseline'
    | 'items-stretch';
  justifyContent?:
    | 'justify-start'
    | 'justify-end'
    | 'justify-center'
    | 'justify-between'
    | 'justify-around'
    | 'justify-evenly'
    | 'justify-stretch';
  spacing?: number;
  children: React.ReactNode;
  p?: number;
  px?: number;
  py?: number;
  pt?: number;
  pb?: number;
  pr?: number;
  pl?: number;
  m?: number;
  mx?: number;
  my?: number;
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
  className?: string;
};

const FlexBox: React.FC<FlexBoxProps> = ({
  direction = 'flex-row',
  alignItems = 'start',
  flexWrap = 'flex-wrap',
  flexGrow = 'grow-0',
  spacing,
  className,
  p,
  px,
  py,
  pt,
  pb,
  pr,
  pl,
  m,
  mx,
  my,
  mt,
  mb,
  mr,
  ml,
  children,
}) => {
  const gap = spacing ? `gap-${spacing}` : 'gap-0';

  const getSpacing = (name: string, value?: number) =>
    value ? `${name}-${value}` : '';

  const getPadding = `${getSpacing('p', p)} ${getSpacing(
    'px',
    px
  )} ${getSpacing('py', py)} ${getSpacing('pt', pt)} ${getSpacing(
    'pb',
    pb
  )} ${getSpacing('pr', pr)} ${getSpacing('pl', pl)}`;

  const getMargin = `${getSpacing('m', m)} ${getSpacing('mx', mx)} ${getSpacing(
    'my',
    my
  )} ${getSpacing('mt', mt)} ${getSpacing('mb', mb)} ${getSpacing(
    'mr',
    mr
  )} ${getSpacing('ml', ml)}`;

  const joinClasses = `flex ${direction} ${alignItems} ${flexWrap} ${flexGrow} ${gap} ${className} ${getPadding} ${getMargin}`;

  return <div className={joinClasses}>{children}</div>;
};

export default FlexBox;
