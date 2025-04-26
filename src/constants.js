import Resume from "./contents/Resume";
import MyStuff from "./contents/MyStuff";
import AboutMe from "./contents/AboutMe";

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

export const icons = [
  {
    name: "My Stuff",
    icon: "./file.ico",
    address: "C:\\Users\\Pedro\\Desktop\\My Stuff",
    contents: <MyStuff />,
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
    contents: <iframe src="https://jspaint.app" width="800px" height="500px" />,
    completeHeader: false,
  },
];

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
];
