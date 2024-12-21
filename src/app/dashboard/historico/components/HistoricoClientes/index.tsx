import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type Invoice = {
  id: string;
  nm_cliente: string;
  vl_pagamento: string;
  dt_agendamento: Date;
};

const invoices: Invoice[] = [
  {
    id: 'INV001',
    nm_cliente: 'John Doe',
    vl_pagamento: '$250.00',
    dt_agendamento: new Date('2023-01-01'),
  },
  {
    id: 'INV002',
    nm_cliente: 'Jane Smith',
    vl_pagamento: '$150.00',
    dt_agendamento: new Date('2023-02-01'),
  },
  {
    id: 'INV003',
    nm_cliente: 'Alice Johnson',
    vl_pagamento: '$350.00',
    dt_agendamento: new Date('2023-03-01'),
  },
  {
    id: 'INV004',
    nm_cliente: 'Bob Brown',
    vl_pagamento: '$450.00',
    dt_agendamento: new Date('2023-04-01'),
  },
  {
    id: 'INV005',
    nm_cliente: 'Charlie Davis',
    vl_pagamento: '$550.00',
    dt_agendamento: new Date('2023-05-01'),
  },
  {
    id: 'INV006',
    nm_cliente: 'Diana Evans',
    vl_pagamento: '$200.00',
    dt_agendamento: new Date('2023-06-01'),
  },
  {
    id: 'INV007',
    nm_cliente: 'Frank Green',
    vl_pagamento: '$300.00',
    dt_agendamento: new Date('2023-07-01'),
  },
];

export function HistoricoClientes() {
  return (
    <Table>
      <TableCaption>Lista dos seus clientes recentes.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[70%]">Nome</TableHead>
          <TableHead className="w-[20%]">Data Agendamento</TableHead>
          <TableHead className="text-right w-[10%]">Valor</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.nm_cliente}</TableCell>
            <TableCell>{invoice.dt_agendamento.toLocaleDateString()}</TableCell>
            <TableCell className="text-right">{invoice.vl_pagamento}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
