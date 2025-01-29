import {useState} from 'react';
import Surah from '../data/Surah.json';

const Navigation=()=>{
  return(
    <div style={{width:'100%',paddingBottom:10}}>
      <div style={{width:'90%',paddingTop:20,flexDirection:'row',justifyContent:'space-between'}}>
        <select
        style={{width:120}}
        value={window.surah}
        onChange={(e)=>{window.setSurah(e.target.value)}}>
          {Surah.map((item)=>(
            <option key={item.id} value={item.id}>{item.id} · {item.namet} {item.name} · {item.nAyah}</option>
          ))}
        </select>
        <select
        style={{width:30}}
        value={window.language}
        onChange={(e)=>{window.setLanguage(e.target.value)}}>
          <option value="none">None</option>
          <option value="tr">TR · Türkçe</option>
          <option value="en">EN · English</option>
          <option value="ru">RU · Русский </option>
          <option value="de">DE · Deutsch</option>
          <option value="hi">HI · हिन्दी</option>
          <option value="id">ID · Ind.</option>
          <option value="inh">INH · тоҷикӣ</option>
          <option value="fa">FA · فارسی</option>
          <option value="bn">BN · বাংলা</option>
          <option value="ta">TA · தமிழ்</option>
          <option value="ur">UR · اردو</option>
        </select>
      </div>
      {window.surah!=1&&window.surah!=9?
      <div style={{width:'100%',paddingTop:10,fontFamily:'Hamdullah',fontSize:40}}>
        بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِـيمِ
      </div>
      :null}
    </div>
  );
}

export default Navigation;
