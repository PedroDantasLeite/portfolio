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

// Scalable folder structure for "My Stuff"
export const myStuffContents = [
  {
    name: "Resume",
    icon: "./text.ico",
    address: "C:\\Users\\Pedro\\Desktop\\Resume",
    contents: <Resume />,
  },
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
    contents: <Photos />,
  },
  // Example for nested folders:
  // {
  //   name: "Projects",
  //   icon: "./folder.ico",
  //   address: "C:\\Users\\Pedro\\Desktop\\My Stuff\\Projects",
  //   folderItems: [...], // Array of items for this folder
  // },
];

// Desktop icons, scalable for any folder or file
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
