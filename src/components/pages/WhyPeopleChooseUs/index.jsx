import React from 'react';
import Block, { Main, Right, Img} from './style';
import Anchor from '../../Generic';
import Kategory from '../../Kategory/index'


export const WhyPeopleChooseUs = () => {
    return (
        <Main id='block4'>
            <Block>
                <Block.Left>
                    <Kategory />
                </Block.Left>

                <Right>
                    <Right.Title>WHY PEOPLE CHOOSE US?</Right.Title>

                    <Right.InsetBlock>

                        <Right.ChangeBlock end='200'>
                            <Right.BlockTitle>INDUSTRY LEADERSHIP</Right.BlockTitle>
                            <Right.Block>
                                <div><Img.Star /></div>
                                <Right.BlockText>We care about more than just moving product. We’ve created an extensive and organized transportation network across America.</Right.BlockText>
                            </Right.Block>
                        </Right.ChangeBlock>

                        <Right.ChangeBlock>
                            <Right.BlockTitle>TECHNOLOGY</Right.BlockTitle>
                            <Right.Block>
                                <div><Img.Settings /></div>
                                <Right.BlockText>Keeping you connected. Our cutting-edge technology helps our truck drivers take the best routes while keeping our customers informed throughout the delivery.</Right.BlockText>
                            </Right.Block>
                        </Right.ChangeBlock>

                        <Right.ChangeBlock end='200'>
                            <Right.BlockTitle>EXCEPTIONAL CUSTOMER SERVICE</Right.BlockTitle>
                            <Right.Block>
                                <div><Img.Croun /></div>
                                <Right.BlockText>Our dedicated team of professionals will provide helpful information, answer any questions, and make sure that our customer’s needs are met.</Right.BlockText>
                            </Right.Block>
                        </Right.ChangeBlock>

                    </Right.InsetBlock>

                </Right>

            </Block>
            <Main.Anchor>
                <Anchor />
            </Main.Anchor>

        </Main>
    )
}

export default WhyPeopleChooseUs;