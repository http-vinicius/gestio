type OutHistoricoClientes = {
  id: number;
  avatar: string;
  nm_cliente: string;
  dt_atendimento: Date;
};

export const dadosMockHistorico: OutHistoricoClientes[] = [
  {
    id: 0,
    avatar:
      'https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    nm_cliente: 'Isadora Regina',
    dt_atendimento: new Date('02-02-2024 00:00:00.000'),
  },
  {
    id: 1,
    avatar:
      'https://images.pexels.com/photos/789303/pexels-photo-789303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    nm_cliente: 'Lucia Regina',
    dt_atendimento: new Date('02-02-2024 00:00:00.000'),
  },
  {
    id: 2,
    avatar:
      'https://images.pexels.com/photos/789555/pexels-photo-789555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    nm_cliente: 'Luciele Monaliza',
    dt_atendimento: new Date('03-02-2024 00:00:00.000'),
  },
  {
    id: 3,
    avatar:
      'https://images.pexels.com/photos/29344820/pexels-photo-29344820/free-photo-of-cristina.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    nm_cliente: 'Jaqueline Marinho',
    dt_atendimento: new Date('03-02-2024 00:00:00.000'),
  },
];
