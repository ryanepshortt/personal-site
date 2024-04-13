import React from "react";
import { SoftballProvider } from "../../contexts/Softball";
import PlayerList from "../../components/softball/playerList/PlayerList";
import "./Softball.css";
import FinalLineup from "../../components/softball/finalLineup/FinalLineup";

function Softball() {
  return (
    <div className="softball-page-wrapper">
      <div className="player-list-wrapper">
        <PlayerList />
      </div>
      <FinalLineup />
    </div>
  );
}

function SoftballPage() {
  return (
    <SoftballProvider>
      <Softball />
    </SoftballProvider>
  );
}

export default SoftballPage;
