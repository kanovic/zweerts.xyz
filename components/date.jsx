import { parseISO, format } from 'date-fns';

export default function Date({ datestring }) {
  const date = parseISO(datestring);

  return (
    <p>
      <time dateTime={datestring}>{format(date, 'LLLL d, yyyy')}</time>
    </p>
  );
}
