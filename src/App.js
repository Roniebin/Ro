import "./App.css";
import NavigationBar from "./NavigationBar";
import ControlCarousel from "./carousel";
import dressOptions from "./data";
import { useEffect, useState } from "react";

function App() {

  let [options, setOptions] = useState(dressOptions);
  let [step,setStep]=useState(0);
  let [nextBtn,SetNextBtn]=useState("NEXT");
  let [pointer,setPointer]=useState(0);
  let [selectedOptions, setSelectedOptions] = useState(Array(dressOptions.length).fill(null)); // 각 단계별 선택된 옵션을 저장하는 배열
  let [otherInput, setOtherInput] = useState(''); // 다른 입력을 위한 상태 추가
  let [activeSteps, setActiveSteps] = useState([true, ...new Array(dressOptions.length - 1).fill(false)]);

  

  const scrollTo1800px = () => {
    window.scrollTo({
      top: 1800, // 1800픽셀 아래로 스크롤
      behavior: 'smooth' // 부드러운 스크롤 효과
    });
  };

  const getButtonStyle = (index) => {
    if (index === step) {
      return {
        background: 'linear-gradient(to right, #0000FF, #6a5acd)',
        color: 'white', // 글씨 색상을 흰색으로 설정
      };
    }
    return {};
  };

  
  const handleStepClick = (index) => {
    const updatedActiveSteps = [...activeSteps];
    updatedActiveSteps[index] = true; // 선택된 인덱스만 활성화
    setActiveSteps(updatedActiveSteps);
    setStep(index);
  };

  const handleOptionClick = (option, index) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[step] = option;
    setSelectedOptions(newSelectedOptions);
    setOtherInput('');
  };

  const handleInputClick = () => {
    setSelectedOptions(selectedOptions.map((item, idx) => idx === step ? null : item));
  };

  const handleInputChange = (event) => {
    setOtherInput(event.target.value);
    const updatedOptions = [...selectedOptions];
    updatedOptions[step] = event.target.value;
    setSelectedOptions(updatedOptions);
  };

  const handleNextButtonClick = () => {
    let newStep = step + 1;
    if (newStep < options.length) {
      setStep(newStep);
      const updatedActiveSteps = [...activeSteps];
      updatedActiveSteps[newStep] = true; // 새로운 스텝을 활성화
      setActiveSteps(updatedActiveSteps);
      setOtherInput(''); // 입력 필드 초기화
    }
    if (newStep === options.length - 1) {
      SetNextBtn("GENERATE");
    }
    console.log(selectedOptions);
};

  return (
    <div className="App">
      <NavigationBar />

      <div className="Main-container">
        <div className="img">
          <div className="content">
          <br></br>
            <h1>Wedding Dress Virtual Fitting</h1>
            <p style={{marginTop:"30px"}}>
            We provide a virtual fitting service utilizing Stable-Diffusion and IDM-Vton
              <br></br>
              Discover and try on the dress that perfectly matches your style
            </p>

            <button className="getStart" onClick={scrollTo1800px}>Get Start</button>
          </div>
          <div className="img-cover"></div>
        </div>

        <div className="About">

            <h3>We deliver the perfect dress tailored just for you</h3>
            <p>
            We are the Princess Maker team. We offer a service that recommends dresses and provides virtual fittings using Stable Diffusion and IDM-Vton. Simply click the button below to go to the dress creation page, answer a few questions, and easily see yourself fitted in the dress of your dreams. Find the perfect dress for your special day!
            </p>

            <button className="getStart" onClick={scrollTo1800px} >Get Start</button>

            <img src="dress8.webp"></img>
        </div>

        <div className="demonstration-container">
          <h3>Create <span style={{color:"orange"}}>wedding dress</span> like these</h3>
          <br></br>       <br></br>
          <ControlCarousel/>
          <br></br>
          <p>You can create and fit a dress just like the example above</p>
        </div>

        <div className="generating-container">
          <div className="generating-dress">
              <h1>AI Wedding Dress Generator</h1>
              <p> Estimated time to complete: 2 minutes</p>

              <div className="pagination">
              {Array.from({ length: options.length }).map((_, index) => (
                <button
                  key={index}
                  style={getButtonStyle(index)}
                  className={activeSteps[index] ? "active" : ""}
                  onClick={() => handleStepClick(index)}
                ></button>
              ))}
              </div>

              <br></br>
                <p className="generating-title">{options[step].question}</p>
                {
                   options[step].options.map((option, index) => (
                    <button
                      key={index}
                      className={`options ${selectedOptions[step] === option ? "selected" : ""}`}
                      onClick={() => handleOptionClick(option, index)}
                    >
                      {option}
                    </button>
                  ))
              }
              <br></br>
              <input
              type="text"
              placeholder="Other"
              className="custom-input"
              onClick={handleInputClick}
              onChange={handleInputChange}
              value={otherInput}
            ></input>
              <br></br><br></br>
              <button className="options next-button" onClick={handleNextButtonClick}>{nextBtn}</button>
          </div>
        </div>
        

      
      </div>
    </div>
  );
}
<script
  src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
  crossorigin
></script>;

export default App;
