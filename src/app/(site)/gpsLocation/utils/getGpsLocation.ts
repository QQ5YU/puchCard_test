const successHandler = (result: GeolocationPosition) => {
  return new Promise((resolve, reject) => {
    const lat = result.coords.latitude;
    const lng = result.coords.longitude;
    const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const address = data.display_name.split(",").slice(0, -2);
        let addressLocation = "";
        for (let i = address.length - 1; i >= 0; i--) {
          addressLocation += `${address[i]}`;
        }
        resolve(addressLocation);
      })
      .catch((err) => {
        console.error("locationAPIFetchError: ", err);
        reject(err);
      });
  });
};

const errorHandler = (err: GeolocationPositionError) => {
  location.href = "/gpsLocation/failed";
  console.log(err);
};

const getGpsLocation = () => {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (result) => {
          successHandler(result).then(resolve).catch(reject);
        },
        (err) => {
          errorHandler(err);
          reject(err);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
        }
      );
    } else {
      alert("你使用的瀏覽器不支援GPS定位，請嘗試使用其他瀏覽器。");
    }
  });
};

export default getGpsLocation;
