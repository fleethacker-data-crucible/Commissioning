// Text for the local recording server's JSON error body.
// Same result as String(e && e.message || e): the message when it is non-empty,
// otherwise ToString (name and message for an Error). The stack stays off this
// string. String(exception) is not used, because that passes the exception
// object itself into the response.
export function clientErrorText(e) {
  if (e && typeof e.message === 'string' && e.message) return e.message;
  if (e != null && typeof e.toString === 'function') return e.toString();
  if (e === null) return 'null';
  if (e === undefined) return 'undefined';
  return 'request failed';
}
