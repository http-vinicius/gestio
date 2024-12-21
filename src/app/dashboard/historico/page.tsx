import { Box } from '@/components/box';
import Typography from '@/components/typography';
import { HistoricoClientes } from './components/HistoricoClientes';

export default function Historico() {
  return (
    <section className="pt-5">
      <Box className="pb-5">
        <Typography variant="subtitle1">Histórico de Clientes</Typography>
      </Box>
      <HistoricoClientes />
    </section>
  );
}
