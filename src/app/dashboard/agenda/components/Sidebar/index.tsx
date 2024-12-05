import CreateEventButton from '../CreateEventButton';
import Labels from '../Labels';
import SmallCalendar from '../SmallCalendar';

export default function SideBar() {
  return (
    <aside className="border p-5 w-64">
      <CreateEventButton />
      <SmallCalendar />
      <Labels />
    </aside>
  );
}
