import React, { useState, useEffect } from 'react';
import { HexGrid, Layout, Hexagon, Text, GridGenerator, HexUtils, Hex } from 'react-hexgrid';
import configs from './configurations.json';
import {Config} from '../interface/Hexgrid.interface'

type State = {
    hexagons: Hex[],
    config: Config
}

export default function Hexgrid(this: any, props: any) { 
    const config = configs['hexagon'];
    const generator = GridGenerator.getGenerator(config.map);
    const hexagons: Hex[] = generator.apply(this, config.mapProps);

    let [type, setType] = useState<State>({hexagons, config});
    let [mouseHold, setMouseHold] = useState(false);

    const changeType = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const map = event.currentTarget.value as keyof typeof configs;
        const config = configs[map];
        const generator = GridGenerator.getGenerator(config.map);
        const hexagons: Hex[] = generator.apply(this, config.mapProps);
        setType({hexagons, config});
    }

    const onClick = (event: React.MouseEvent<SVGGElement, MouseEvent>, hexID: string) => {
        console.log(hexID);
        console.log(event.currentTarget);
    }

    const onMouseDown = (event: React.MouseEvent<SVGGElement, MouseEvent>) => {
      setMouseHold(true);
      const hexagon = event.currentTarget;
      hexagon.style.fill = 'black'
    }

    const onMouseUp = (event: React.MouseEvent<SVGGElement, MouseEvent>) => {
      setMouseHold(false);
    }

    const onMouseEnter = (event: React.MouseEvent<SVGGElement, MouseEvent>) => {
      const hexagon = event.currentTarget;
      if (mouseHold) {
        hexagon.style.fill = 'black'
      }
    }

    useEffect(() => {
        console.log(`component changed to ${type.config.map}`);
        return () => console.log("component will unmount");
    }, [type]);

    const state = type;
    const layout = state.config.layout;
    const size = { x: layout.width, y: layout.height };
    return (
      <div className="App">
        <h2>Select grid type and configuration from dropdown.</h2>
        <div>
          <strong>Template: </strong>
          <select onChange={(ev) => changeType(ev)}>
            {Object.keys(configs).map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
        <hr />
        <HexGrid width={state.config.width} height={state.config.height}>
          <Layout size={size} flat={layout.flat} spacing={layout.spacing} origin={state.config.origin}>
            {
              // note: key must be unique between re-renders.
              // using config.mapProps+i makes a new key when the goal template chnages.
              state.hexagons.map((hex, i) => (
                <Hexagon 
                    className='fill-white stroke-1 stroke-black hover:fill-slate-300'
                    key={state.config.mapProps.toString() + i}
                    q={hex.q} r={hex.r} s={hex.s}
                    onClick={(event) => onClick(event, HexUtils.getID(hex))}
                    onMouseDown={(e) => onMouseDown(e)}
                    onMouseUp={(e) => onMouseUp(e)}
                    onMouseEnter={(e) => onMouseEnter(e)}>
                </Hexagon>
              ))
            }
          </Layout>
        </HexGrid>
      </div>
    );
};
