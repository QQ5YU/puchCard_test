export function handleDateTime(recordDateTime: string | undefined) {
  if (recordDateTime) {
    const originTime = new Date(recordDateTime).toLocaleString();
    const dateTime = originTime.split(" ");
    const date = dateTime[0];
    const time = dateTime[1].slice(0, -3);

    return { date, time, originTime };
  } else return undefined;
}

export function isTimeOut(recordDateTime: string | undefined) {
  if (recordDateTime) {
    const recordTime = new Date(recordDateTime);
    const expireTime = new Date(recordTime.getTime() + 5 * 60000);
    const currentTime = new Date();
    if (currentTime > expireTime) {
      return true;
    } else return false;
  } else return undefined;
}
