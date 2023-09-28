export default function handleDateTime(recordDateTime: string) {
  const originTime = new Date(recordDateTime).toLocaleString();
  const dateTime = originTime.split(" ");
  const date = dateTime[0];
  const time = dateTime[1].slice(0, -3);

  return { date, time, originTime };
}
