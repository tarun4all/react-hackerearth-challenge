import React, {useState, useEffect, useContext, useReducer} from 'react';
import { StateProvider, store } from './context-redux/store';
import { Button, Card } from 'react-bootstrap';

function Home() {
    const globalState = useContext(store);
    const { state, dispatch } = globalState;
  
    useEffect(() => {
        console.log('yeah')
      dispatch({type: 'apiCall'});
    }, []);

    return(
        <>{console.log(globalState)}
            {
                state.apiData && state.apiData.map(element => 
                    <>
                        <Card>
                            <Card.Header style={{backgroundColor: 'cyan'}}>{element.Brand}</Card.Header>
                            <Card.Body>
                                <Card.Title>{element.Style}</Card.Title>
                                <Card.Text>
                                    {element.Variety}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card> 
                        <br/>
                    </>
                )
            }
        </>
    )
}

export default Home;