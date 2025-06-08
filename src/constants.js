import Resume from "./contents/Resume";
import AboutMe from "./contents/AboutMe";
import Photos from "./contents/Photos";

// Sidebar cards (reusable for all folders)
const systemTask = {
  title: "System Tasks",
  rows: [
    {
      label: "Add or Remove Programs",
      icon: "./cd-box.ico",
    },
    {
      label: "Change a Setting",
      icon: "./little-board.ico",
    },
  ],
};

const otherPlaces = {
  title: "Other Places",
  rows: [
    {
      label: "My Network Places",
      icon: "./pc-world.ico",
    },
    {
      label: "My Documents",
      icon: "filed-up-folder.ico",
    },
    {
      label: "Shared Documents",
      icon: "./tiny-folder.ico",
    },
    {
      label: "Control Panel",
      icon: "./lil-pencil-writting.ico",
    },
  ],
};

export const sidebarCards = [systemTask, otherPlaces];

export const myStuffContents = [
  {
    name: "About me",
    icon: "./about-me.ico",
    address: "C:\\Users\\Pedro\\Desktop\\My Stuff\\About Me",
    contents: <AboutMe />,
  },
  {
    name: "Photos",
    icon: "./fotita.ico",
    address: "C:\\Users\\Pedro\\Desktop\\My Stuff\\Photos",
  },
  {
    name: "Resume",
    icon: "./text.ico",
    address: "C:\\Users\\Pedro\\Desktop\\Resume",
    contents: <Resume />,
  },
  // Example for nested folders:
  // {
  //   name: "Projects",
  //   icon: "./folder.ico",
  //   address: "C:\\Users\\Pedro\\Desktop\\My Stuff\\Projects",
  //   folderItems: [...], // Array of items for this folder
  // },
];

export const desktopIcons = [
  {
    name: "My Stuff",
    icon: "./file.ico",
    address: "C:\\Users\\Pedro\\Desktop\\My Stuff",
    folderItems: myStuffContents,
  },
  {
    name: "Resume",
    icon: "./text.ico",
    address: "C:\\Users\\Pedro\\Desktop\\Resume",
    contents: <Resume />,
  },
  {
    name: "Paint",
    icon: "./paint.png",
    contents: (
      <iframe
        src="https://jspaint.app"
        width="800px"
        height="500px"
        title="Paint"
      />
    ),
    completeHeader: false,
  },
];

export const myPhotos = [
  {
    label: "noronha1.jpeg",
    image: "./photos/1.jpeg",
  },
  {
    label: "bathroom?.jpeg",
    image: "./photos/2.jpeg",
  },
  {
    label: "noronha3.jpeg",
    image: "./photos/3.jpeg",
  },
  {
    label: "untosum.jpeg",
    image: "./photos/4.jpeg",
  },
  {
    label: "<3.jpeg",
    image: "./photos/5.jpeg",
  },
  {
    label: "dontlikeroads.jpeg",
    image: "./photos/6.jpeg",
  },
  {
    label: "oldpartner.jpeg",
    image: "./photos/7.jpeg",
  },
  {
    label: "peggy18.jpeg",
    image: "./photos/8.jpeg",
  },
];
