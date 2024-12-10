export type EventTypes = {
  accent: string;
  color: string;
  day: number;
  description: number;
  label: string;
  title: string;
};

export type Event = {
  id: string | number;
  accent: string;
  color: string;
  day?: number;
  description?: string;
  label: string;
  title: string;
  titleColor?: string;
};

export type Action = {
  type: 'push' | 'update' | 'delete';
  payload: Event;
};

export function savedEventsReducer(state: Event[], { type, payload }: Action) {
  switch (type) {
    case 'push':
      return [...state, payload];
    case 'update':
      return state.map((evt) => (evt.id === payload.id ? payload : evt));
    case 'delete':
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
}

export function initEvents() {
  if (typeof window === 'undefined') {
    return [];
  }
  const storageEvents = localStorage?.getItem('savedEvents');
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];

  return parsedEvents;
}
