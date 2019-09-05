export function toJSON(immutable) {
  try {
    return immutable.toJSON().data;
  } catch (err) {
    console.error(err);
    return undefined;
  }
}
