type Args = {
  yearOnly: string | null | undefined;
  monthAndYear: string | null | undefined;
  dateTime: string | null | undefined;
  dateOnly: string | null | undefined;
  endYearOnly: string | null | undefined;
  endMonthAndYear: string | null | undefined;
  endDateTime: string | null | undefined;
  endDateOnly: string | null | undefined;
  dateFormat: number | null | undefined;
};

export function formatActivitieDate({
  yearOnly,
  monthAndYear,
  dateTime,
  dateOnly,
  endYearOnly,
  endMonthAndYear,
  endDateTime,
  endDateOnly,
  dateFormat,
}: Args) {
  const dateStart =
    dateTime !== 'Invalid date' && dateFormat === 1
      ? dateTime
      : dateFormat === 2
      ? dateOnly
      : dateFormat === 3
      ? monthAndYear
      : dateFormat === 4
      ? yearOnly
      : false;

  const dateEnd =
    endDateTime !== 'Invalid date' && dateFormat === 1
      ? endDateTime
      : dateFormat === 2
      ? endDateOnly
      : dateFormat === 3
      ? endMonthAndYear
      : dateFormat === 4
      ? endYearOnly
      : false;

  return (
    dateStart &&
    `${dateStart}
      ${(dateEnd &&
        dateEnd !== 'Invalid date' &&
        dateEnd !== dateStart &&
        ` – ${
          dateFormat === 1 && dateOnly === endDateOnly
            ? dateEnd.replace(`${dateOnly},` || '', '')
            : dateEnd
        }`)
        || ''}`
  );
}
