import React from 'react';
import Progress from './component/progressBar/progressBar'
import ViewResultModal from './component/ViewResultModal/ViewResultModal'
import Stepper from './component/stepper/stepper'
import Select from './component/UI/dropdown/select'
import CheckBox from './component/UI/checkbox/checkbox'
import Slider from './component/UI/sliderWithNumber/sliderwithnumber'
import WProgress from './component/progressBar/wildelyProgress/wprogress'
import Spinner from './component/UI/spinner/spinner'
import PlacementScore from './component/newQS/placementScore'
import Type from './component/newQS/type'
import SelectTime from './component/newQS/SelectTime'
import Goal from './component/newQS/goal'
import Weakness from './component/newQS/weakness'
import Name from './component/newQS/name'
import Email from './component/newQS/validemail'
import NewMain from './component/newMain/newMain'
function App() {
  return (
    <div className="App">
      {/* <Progress />
      <Main />
      <ViewResultModal /> */}
      {/* <Stepper /> */}
      {/* <Select /> */}
      {/* <Slider /> */}
      {/* <WProgress /> */}
      {/* <Spinner /> */}
      {/* <Carousel /> */}
      {/* <SelectTime /> */}
      {/* <Goal /> */}
      {/* <Weakness /> */}
      {/* <Email /> */}
      <NewMain />
      {/* <PlacementScore /> */}
      <WProgress />
    </div>
  );
}

export default App;
