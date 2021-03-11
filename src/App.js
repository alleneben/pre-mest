
import MyFirstComponent from './components/MyFirstComponent'
import MySecondComponent from './components/MySecondComponent';
import MyThirdComponent from './components/MyThirdComponent';
import MyFourthComponent from './components/MyFourthComponent';
import MyFifthComponent from './components/MyFifthComponent';
import MySixthComponent from './components/MySixthComponent';
import MySeventhComponent from './components/MySeventhComponent';
import MyEightComponent from './components/MyEightComponent';
import MyNinthComponent from './components/MyNinthComponent';
import MyTenthComponent from './components/MyTenthComponent';

import MasterComponent from './components/MasterComponent';
import ParentComponent from './components/parentcomponent';


function App() {

  return (
    <div>
      <MasterComponent name="1" height="45"/>
      <MasterComponent name="2" height="67"/>
      <MasterComponent name="3" height="34"/>
      <MasterComponent name="4" height="30"/>


      <ParentComponent name="Kojo" gender="Female" age="23" email="kojo@gmail.com"/>

    </div>

  );
}

export default App;
