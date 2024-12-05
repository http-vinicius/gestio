import GlobalContext from '@/Context/GlobalContext';
import { Plus } from 'lucide-react';
import { useContext } from 'react';

export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);

  return (
    <button
      className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
      onClick={() => setShowEventModal(true)}
    >
      <span className="pl-3 pr-7 flex gap-2">
        <Plus />
        Create
      </span>
    </button>
  );
}
