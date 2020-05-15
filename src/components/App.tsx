import React, { useState } from 'react';
import styles from './App.module.scss';
import Header from './header/Header';
import Player from './player/Player';
import { IPlayer } from './player/IPlayer';
import FormPlayer from './formPlayer/FormPlayer';
import { generateId } from "../utils/GuidUtils";

const App = () => {

  const [players, setPlayers] = useState([
    {
      id: generateId(),
      name: "Joao",
      score: 0
    },
    {
      id: generateId(),
      name: "Maria",
      score: 0
    }
  ]);

  const removePlayer = (id: string): void => {
    setPlayers(players.filter((player: IPlayer) => player.id !== id));
  }

  const handleChangeScore: (id: string) => (delta: number) => void = (id: string) => {
    return (delta: number): void => {
      setPlayers((prevState: IPlayer[]) => {
        return prevState.map((player: IPlayer) => {
          if (player.id === id) {
            return { ...player, score: player.score + delta };
          }
          return player;
        });
      });
    }
  }

  const generateNewPlayerId = (): string => {
    const id: string = generateId();

    const exist: boolean = players.some((player: IPlayer) => player.id === id);
    if (exist) {
      return generateNewPlayerId();
    }
    return id;
  }

  const handleAddPlayer = (name: string): void => {

    if(name.length) {
      setPlayers(
        [
          ...players,
          {
            id: generateNewPlayerId(),
            name,
            score: 0
          } as IPlayer
        ]
      )
    }
  }

  return (
    <div className={styles.scoreboard}>
      <Header title={"Scoreboard"} players={players}></Header>

      <main className={styles.main}>
        {/*Players list*/}
        {players.map(player =>
          <Player
            key={player.id}
            id={player.id}
            name={player.name}
            score={player.score}
            removePlayer={removePlayer}
            changeScore={handleChangeScore(player.id)} />
        )}
      </main>
      
      {/*Add player form*/}
      <FormPlayer addPlayer={handleAddPlayer} />
    </div>

  );
}

export default App;
