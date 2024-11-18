import { RotasTypes } from '@/types/site-route';

import { CalendarDays, History, House, Settings, Users } from 'lucide-react';

const routes: RotasTypes[] = [
  {
    id: 1,
    nome: 'Dashboard',
    url: '/dashboard',
    icon: House,
  },
  {
    id: 2,
    nome: 'Agenda',
    url: '/dashboard/agenda',
    icon: CalendarDays,
  },
  {
    id: 3,
    nome: 'Clientes',
    url: '/dashboard/clientes',
    icon: Users,
  },
  {
    id: 4,
    nome: 'Histórico',
    url: '/dashboard/historico',
    icon: History,
  },
  {
    id: 5,
    nome: 'Configurações',
    url: '/dashboard/configuracoes',
    icon: Settings,
  },
];

export default routes;
