/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { MainContext } from '../../Context/Context';
import Block from './style'



export const Kategory = () => {

    const [state, setState] = useContext(MainContext);

    return (
        <Block>
            <Block.Inset>

                
                <div><a href="#block1"><Block.Img1 onClick={() => setState(1)} active={state} /></a></div>
                <div><a href="#block2"><Block.Img2 onClick={() => setState(2)} active={state} /></a></div>
                <div><a href="#block3"><Block.Img3 onClick={() => setState(3)} active={state} /></a></div>
                <div><a href="#block4"><Block.Img4 onClick={() => setState(4)} active={state} /></a></div>
                <div><a href="#block5"><Block.Img5 onClick={() => setState(5)} active={state} /></a></div>
                <div><a href="#block6"><Block.Img6 onClick={() => setState(6)} active={state} /></a></div>


            </Block.Inset>
        </Block>
    )
}

export default Kategory;