import { Dayjs } from 'dayjs';
import React from 'react';
import { Action, Event } from '../ContextWrapper/utils';

export type LabelType = {
  label: string;
  checked: boolean;
};

type GlobalContextTypes = {
  monthIndex: number;
  setMonthIndex: (index: number) => void;
  smallCalendarMonth: number | null;
  setSmallCalendarMonth: (index: number) => void;
  daySelected: Dayjs | null;
  setDaySelected: (day: Dayjs) => void;
  showEventModal: boolean;
  setShowEventModal: (show: boolean) => void;
  dispatchCalEvent: ({ type, payload }: Action) => void;
  savedEvents: Event[];
  selectedEvent: Event | null;
  setSelectedEvent: (index: Event) => void;
  labels: LabelType[];
  setLabels: (value: LabelType[]) => void;
  updateLabel: (value: LabelType) => void;
};

const GlobalContext = React.createContext<GlobalContextTypes>({
  monthIndex: 0,
  setMonthIndex: () => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: () => {},
  daySelected: null,
  setDaySelected: () => {},
  showEventModal: false,
  setShowEventModal: () => {},
  dispatchCalEvent: ({ type, payload }: Action) => {},
  savedEvents: [],
  selectedEvent: null,
  setSelectedEvent: () => {},
  labels: [],
  setLabels: () => {},
  updateLabel: () => {},
});

export default GlobalContext;
