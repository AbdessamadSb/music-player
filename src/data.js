import { v4 as uuidv4 } from "uuid";
function chillhop() {
  return [
    {
      name: "Oh Let's Ride",
      artist: "Teddy Roxpin",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/09/8504dc266e0c0d7c3c9e3581b1c34426648a4027-1024x1024.jpg",
      id: uuidv4(),
      color: ["#906836", "#BC8F00"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=45229",
      active: true,
    },
    {
      name: "Funky Record",
      artist: "Teddy Roxpin",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/09/8504dc266e0c0d7c3c9e3581b1c34426648a4027-1024x1024.jpg",
      id: uuidv4(),
      color: ["#906836", "#BC8F00"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=45230",
      active: false,
    },
    {
      name: "A Reminder",
      artist: "Sleepy Fish, coa",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/05/4a42f136486d42e4d021c673540885c82a1934e6-1024x1024.jpg",
      id: uuidv4(),
      color: ["#960F0B", "#004143"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=36925",
      active: false,
    },
    {
      name: "Penpals Perhaps",
      artist: "TSleepy Fish, coa",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/05/4a42f136486d42e4d021c673540885c82a1934e6-1024x1024.jpg",
      id: uuidv4(),
      color: ["#906836", "#BC8F00"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=37133",
      active: false,
    },
    {
      name: "Night Owl",
      artist: "brillion",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/05/5158b15bf8cb3b9d50588cfc31d36d28c816dc0c-1024x1024.jpg",
      id: uuidv4(),
      color: ["#823CD3", "#2F1987"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=35641",
      active: false,
    },
    {
      name: "Roaming",
      artist: "L'Indécis",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/05/5158b15bf8cb3b9d50588cfc31d36d28c816dc0c-1024x1024.jpg",
      id: uuidv4(),
      color: ["#906836", "#BC8F00"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=35662",
      active: false,
    },
  ];
}
export default chillhop;
