import {useState} from 'react';
import Main from './Main/Main';

const App=()=>{
  const [surah,setSurah]=useState(1);
  const [language,setLanguage]=useState((navigator.language).slice(0,-3));

  window.surah=surah;
  window.setSurah=setSurah;
  window.language=language;
  window.setLanguage=setLanguage;

  return(
    <div style={{width:'100%',height:'100%'}}>
      <Main/>
    </div>
  );
}

export default App;
