import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export type RotasTypes = {
  id: number;
  nome: string;
  url: string;
  icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string;
      titleId?: string;
    } & RefAttributes<SVGSVGElement>
  >;
};
