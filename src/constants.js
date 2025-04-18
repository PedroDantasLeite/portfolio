import Resume from "./contents/Resume";

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
    name: "Projects",
    icon: "./file.ico",
    address: "C:\\Users\\Pedro\\Desktop\\Projects",
    contents: (
      <div className="projects">
        <h1>Projects</h1>
      </div>
    ),
  },
  {
    name: "Resume",
    icon: "./text.ico",
    address: "C:\\Users\\Pedro\\Desktop\\Resume",
    contents: <Resume />,
  },
  {
    name: "About Me",
    icon: "./file.ico",
    address: "C:\\Users\\Pedro\\Desktop\\About Me",
    contents: (
      <div className="projects">
        <h1>About Me</h1>
      </div>
    ),
  },
  {
    name: "Paint",
    icon: "./paint.png",
    contents: <iframe src="https://jspaint.app" width="800px" height="500px" />,
    completeHeader: false,
  },
];
