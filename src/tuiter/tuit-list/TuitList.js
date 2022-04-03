import React, {useEffect} from "react";
/* import tuits from "../data/tuits.json"; */               // import the tuits
import TuitListItem from "./TuitListItem";           // import the TuitListItem
import {useDispatch, useSelector} from "react-redux";
import {findAllTuits} from "../../actions/tuits-actions";
// import * as service from '../../services/tuits-service'

const TuitList = () => {
    const tuits = useSelector((state) => state.tuits);
    const dispatch = useDispatch();
/*    const findAllTuits = async () => {
        const tuits = await service.findAllTuits();
        dispatch({
            type: 'FIND_ALL_TUITS',
            tuits: tuits
        });
    }
    useEffect(findAllTuits, []);
*/
    useEffect(() =>
    findAllTuits(dispatch), []);
    return(
        <>
            {
                tuits.map && tuits.map(tuit => {                            // iterate over each tuit and rendter it as a tuitListItem
                    return(
                        <TuitListItem tuits={tuit} key={tuit._id}/>
                    );
                })
            }
        </>
    )
}

export default TuitList;