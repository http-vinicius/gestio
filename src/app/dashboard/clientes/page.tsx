import { Box } from '@/components/box';
import { DataGrid } from '@/components/data-grid';
import Typography from '@/components/typography';
import { Card, CardContent } from '@/components/ui/card';

export default function Clientes() {
  return (
    <section className="pt-5">
      <Box className="pb-5">
        <Typography variant="subtitle1">Clientes</Typography>
      </Box>
      <Card>
        <CardContent>
          <DataGrid />
        </CardContent>
      </Card>
    </section>
  );
}
