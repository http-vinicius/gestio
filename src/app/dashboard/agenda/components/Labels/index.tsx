'use-client';

import GlobalContext from '@/Context/GlobalContext';
import { useContext } from 'react';

export default function Labels() {
  const { labels, updateLabel } = useContext(GlobalContext);

  return (
    <>
      <p className="text-gray-500 font-bold mt-10">Label</p>
      {labels.map(({ label: lbl, checked, accent, titleColor }, idx) => (
        <label key={idx} className="items-center mt-3 flex">
          <input
            type="checkbox"
            checked={checked}
            onChange={() =>
              updateLabel({
                label: lbl,
                checked: !checked,
                accent: accent,
                titleColor: titleColor,
              })
            }
            className={`form-checkbox h-5 w-5 rounded focus:ring-0 cursor-pointer ${accent}`}
          />
          <span className="ml-2 text-gray-700 capitalize">{titleColor}</span>
        </label>
      ))}
    </>
  );
}
