import React from "react";
import "./StartMenu.css";

const StartMenu = () => {
  return (
    <div className="start-menu">
      <header className="startmenu-header">
        <img src="./fish.jpg" />
        <p>Girio</p>
      </header>
      <div className="startmenu-body">
        <hr className="orange-hr" />
        <div className="left-menu">
          <div className="left-startmenu-button">
            <img src="./explorer.ico" />
            <p>Internet</p>
          </div>
          <div className="left-startmenu-button">
            <img src="./email.ico" />
            <p>E-mail</p>
          </div>
          <div className="divider" />
        </div>
        <div className="right-menu">
          <div className="startmenu-button bold">
            <img src="./my-documents.ico" />
            <p>My Documents</p>
          </div>
          <div className="startmenu-button bold">
            <img src="./my-recent-documents.ico" />
            <p>My Recent Documents</p>
          </div>
          <div className="startmenu-button bold">
            <img src="./my-pictures.ico" />
            <p>My Pictures</p>
          </div>
          <div className="startmenu-button bold">
            <img src="./my-music.ico" />
            <p>My Music</p>
          </div>
          <div className="startmenu-button bold">
            <img src="./my-computer.ico" />
            <p>My Computer</p>
          </div>
          <div className="divider" />
          <div className="startmenu-button">
            <img src="./control-panel.ico" />
            <p>Control Panel</p>
          </div>
          <div className="startmenu-button">
            <img src="./program-access.ico" />
            <p>Set Program Access and Defaults</p>
          </div>
          <div className="startmenu-button">
            <img src="./connect-to.ico" />
            <p>Connect to</p>
          </div>
          <div className="startmenu-button">
            <img src="./printer.ico" />
            <p>Printers and Faxes</p>
          </div>
          <div className="divider" />
          <div className="startmenu-button">
            <img src="./help.ico" />
            <p>Help and Support</p>
          </div>
          <div className="startmenu-button">
            <img src="./search.ico" />
            <p>Search</p>
          </div>
          <div className="startmenu-button">
            <img src="./run.ico" />
            <p>Run</p>
          </div>
        </div>
      </div>
      <footer className="startmenu-footer">
        <div className="start-menu-footer-button">
          <img src="./chavinha.ico" />
          <p>Log Off</p>
        </div>
        <div className="start-menu-footer-button">
          <img src="./desligar.ico" />
          <p>Turn Off Computer</p>
        </div>
      </footer>
    </div>
  );
};

export default StartMenu;
