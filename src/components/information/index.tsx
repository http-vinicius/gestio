import Typography, { VariantTypes } from '../typography';

import styles from './information.module.css';

type InformationProps = {
  title: string;
  value: string;
  variantTitle: VariantTypes;
  variantValue: VariantTypes;
  variantColor?: boolean;
};

export default function Information({
  title,
  value,
  variantTitle,
  variantValue,
  variantColor = false,
}: InformationProps) {
  const stylesTitle = variantColor ? styles.titulo : '';

  return (
    <div>
      <Typography variant={variantTitle} className={stylesTitle}>
        {title}
      </Typography>
      <Typography variant={variantValue}>{value}</Typography>
    </div>
  );
}
