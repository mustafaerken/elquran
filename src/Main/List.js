import {useState,useEffect} from 'react';
import Positions from '../data/Positions.json';
import Arabic from '../data/languages/ar.json';

const List=()=>{
  const [langData,setLangData]=useState([]);

  useEffect(()=>{
    if(window.language!='none'){
      import(`../data/languages/${window.language}.json`).then((data)=>{
        setLangData(data);
      })
    }
    else{
      setLangData([]);
    }
  },[window.language])
  
  if(langData[1]){
    return(
      <div style={{width:'100%',flexDirection:'row-reverse',flexWrap:'wrap'}}>
        {Positions.map((each)=>{
          if(each.surah==window.surah){
            return(
                <div style={{flexDirection:'row'}}>
                {Positions[each.id].surah>window.surah?
                  <div style={{fontSize:15,padding:5,color:'wheat'}}>
                    {`{ ${each.ayah} }`}
                  </div>
                :null}

                <div style={{marginRight:4,marginLeft:4}}>
                  <div style={{fontFamily:'Hamdullah',fontSize:40}}>
                    {Arabic[each.id]}
                  </div>
                  {langData[1]?
                  <div style={{fontSize:10,marginTop:-7,color:'silver',letterSpacing:-0.3}}>
                    {langData[each.id]?langData[each.id]:'\u00A0'}
                  </div>
                  :null}
                </div>

                {each.position==0&&each.ayah!=1?
                <div style={{fontSize:12,padding:5,color:'wheat'}}>
                  {`{ ${each.ayah-1} }`}
                </div>
                :null}
              </div>
            )
          }
        })}
      </div>
    )
  }

}


export default List;
