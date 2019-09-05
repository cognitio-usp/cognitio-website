import { anyObj } from '@lucasols/utils/dist/typings/utils';

export default function getUnique<T extends anyObj[]>(arr: T, prop: string) {
  return arr.filter(
    (obj, pos, arr2) =>
      arr2.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos,
  );
}
