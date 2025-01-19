'use client';

import Card from '@/components/card';
import Information from '@/components/information';
import Typography from '@/components/typography';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { Box } from '@/components/box';
import Grid from '@/components/grid';
import Chart from './components/Chart';
import { dadosMockHistorico } from './utils';

export default function Dashboard() {
  return (
    <section className="pt-5">
      <Box className="pb-5">
        <Typography variant="subtitle1">Dashboard</Typography>
      </Box>
      <Grid
        lg="lg:grid-cols-4"
        md="md:grid-cols-4"
        sm="sm:grid-cols-1"
        styles="gap-2"
      >
        <Card
          title="Faturamento total"
          description="Faturamento Total em 30 Dias"
        >
          <Typography variant="subtitle2">R$12.000</Typography>
        </Card>
        <Card title="Remuneração" description="Remuneração em 30 dias">
          <Typography variant="subtitle2">R$13.800</Typography>
        </Card>
        <Card title="Clientes" description="Clientes nos últimos 30 dias">
          <Typography variant="subtitle2">50</Typography>
        </Card>
        <Card title="Percentual comissão">
          <Typography variant="subtitle2">70%</Typography>
        </Card>
      </Grid>
      <Grid
        lg="lg:grid-cols-2"
        md="md:grid-cols-2"
        sm="sm:grid-cols-1"
        styles="gap-2 pt-2"
      >
        <Card title="Estatísticas" description="Relação de ganhos x gastos">
          <Chart />
        </Card>
        <Card title="Últimos(as) clientes">
          {dadosMockHistorico.map((item) => (
            <div key={item.id} className="flex pt-2 pb-2 items-center gap-2">
              <Avatar className="bg-slate-200">
                <AvatarImage src={item.avatar} />
                <AvatarFallback>IM</AvatarFallback>
              </Avatar>
              <Information
                title="01/01/2001"
                value={item.nm_cliente}
                variantTitle="body2"
                variantValue="subtitle2"
                variantColor
              />
            </div>
          ))}
        </Card>
      </Grid>
    </section>
  );
}
