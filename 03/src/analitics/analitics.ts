let logged;

function sendAnalitics(data: string) {
  console.log(data);
  logged = true;
}

sendAnalitics("The data");
