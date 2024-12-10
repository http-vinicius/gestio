'use-client';

import { useContext, useState } from 'react';

import GlobalContext from '@/Context/GlobalContext';
import {
  AlignRight,
  Bookmark,
  CircleCheck,
  Clock4,
  Grip,
  Trash2,
  X,
} from 'lucide-react';

const labelsClasses = [
  {
    primary: 'bg-indigo-500',
    secondary: 'bg-indigo-200',
    accent: 'accent-indigo-500',
    titleColor: 'Índigo',
  },
  {
    primary: 'bg-gray-500',
    secondary: 'bg-gray-200',
    accent: 'accent-gray-500',
    titleColor: 'Cinza',
  },
  {
    primary: 'bg-green-500',
    secondary: 'bg-green-200',
    accent: 'accent-green-500',
    titleColor: 'Verde',
  },
  {
    primary: 'bg-blue-500',
    secondary: 'bg-blue-200',
    accent: 'accent-blue-500',
    titleColor: 'Azul',
  },
  {
    primary: 'bg-red-500',
    secondary: 'bg-red-200',
    accent: 'accent-red-500',
    titleColor: 'Vermelho',
  },
  {
    primary: 'bg-purple-500',
    secondary: 'bg-purple-200',
    accent: 'accent-purple-500',
    titleColor: 'Roxo',
  },
];

export default function EventModal() {
  const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } =
    useContext(GlobalContext);
  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : '');
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ''
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl.primary === selectedEvent.color)
      : labelsClasses[0]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLabel?.primary ?? '',
      color: selectedLabel?.secondary ?? '',
      titleColor: selectedLabel?.titleColor ?? '',
      accent: selectedLabel?.accent ?? '',
      day: daySelected?.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: 'update', payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: 'push', payload: calendarEvent });
    }
    setShowEventModal(false);
  };

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="text-gray-400">
            <Grip />
          </span>
          <div className="flex">
            {selectedEvent && (
              <span
                className="text-gray-400 cursor-pointer"
                onClick={() => {
                  dispatchCalEvent({ type: 'delete', payload: selectedEvent });
                  setShowEventModal(false);
                }}
              >
                <Trash2 />
              </span>
            )}
            <button onClick={() => setShowEventModal(false)}>
              <span className="text-gray-400 cursor-pointer">
                <X />
              </span>
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="flex gap-3">
              <span className="text-gray-400">
                <Clock4 />
              </span>
              <p>{daySelected?.format('dddd, MMMM DD')}</p>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-gray-400">
                <AlignRight />
              </span>
              <input
                type="text"
                name="Description"
                placeholder="Add a description"
                value={description}
                required
                className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="items-center flex gap-3">
              <span className="text-gray-400">
                <Bookmark />
              </span>
              <div className="flex gap-x-2">
                {labelsClasses.map((lblClass, i) => (
                  <span
                    key={i}
                    onClick={() => setSelectedLabel(lblClass)}
                    className={`${lblClass.primary} w-6 h-6 rounded-full flex items-center cursor-pointer`}
                  >
                    {selectedLabel === lblClass && (
                      <span className="text-white text-sm" key={i}>
                        <CircleCheck />
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-end w-100 border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Salvar
          </button>
        </footer>
      </form>
    </div>
  );
}
