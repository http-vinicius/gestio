import { RotasTypes } from '@/types/site-route';

import { CalendarDays, History, House, Settings, Users } from 'lucide-react';

const routes: RotasTypes[] = [
  {
    id: 1,
    nome: 'Dashboard',
    url: '/',
    icon: House,
  },
  {
    id: 2,
    nome: 'Agenda',
    url: '/agenda',
    icon: CalendarDays,
  },
  {
    id: 3,
    nome: 'Clientes',
    url: '/clientes',
    icon: Users,
  },
  {
    id: 4,
    nome: 'Histórico',
    url: '/historico',
    icon: History,
  },
  {
    id: 5,
    nome: 'Configurações',
    url: '/configuracoes',
    icon: Settings,
  },
];

export default routes;
